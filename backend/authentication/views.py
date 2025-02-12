
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
import boto3
from botocore.exceptions import ClientError
from django.conf import settings

cognito_client = boto3.client('cognito-idp', 
    region_name=settings.AWS_REGION,
    aws_access_key_id=settings.AWS_ACCESS_KEY_ID,
    aws_secret_access_key=settings.AWS_SECRET_ACCESS_KEY
)

@api_view(['POST'])
def signup(request):
    try:
        response = cognito_client.sign_up(
            ClientId=settings.COGNITO_APP_CLIENT_ID,
            Username=request.data['email'],
            Password=request.data['password'],
            UserAttributes=[
                {'Name': 'name', 'Value': request.data['name']},
                {'Name': 'email', 'Value': request.data['email']},
                {'Name': 'phone_number', 'Value': request.data['phone_number']},
            ]
        )
        
        return Response({
            'message': 'Please check your email for verification code',
            'userSub': response['UserSub']
        })
    except ClientError as e:
        return Response({
            'error': str(e)
        }, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def verify_otp(request):
    try:
        response = cognito_client.confirm_sign_up(
            ClientId=settings.COGNITO_APP_CLIENT_ID,
            Username=request.data['email'],
            ConfirmationCode=request.data['otp']
        )
        
        return Response({
            'message': 'Email verified successfully'
        })
    except ClientError as e:
        return Response({
            'error': str(e)
        }, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def login(request):
    try:
        response = cognito_client.initiate_auth(
            ClientId=settings.COGNITO_APP_CLIENT_ID,
            AuthFlow='USER_PASSWORD_AUTH',
            AuthParameters={
                'USERNAME': request.data['username'],
                'PASSWORD': request.data['password']
            }
        )
        
        return Response({
            'token': response['AuthenticationResult']['AccessToken'],
            'id_token': response['AuthenticationResult']['IdToken'],
            'refresh_token': response['AuthenticationResult']['RefreshToken']
        })
    except ClientError as e:
        return Response({
            'error': str(e)
        }, status=status.HTTP_400_BAD_REQUEST)
