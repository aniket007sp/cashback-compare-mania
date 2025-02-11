
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status
import boto3
from botocore.exceptions import ClientError
from django.conf import settings
from .serializers import UserSerializer
from .models import User

cognito_client = boto3.client('cognito-idp', 
    region_name=settings.AWS_REGION,
    aws_access_key_id=settings.AWS_ACCESS_KEY_ID,
    aws_secret_access_key=settings.AWS_SECRET_ACCESS_KEY
)

@api_view(['POST'])
@permission_classes([AllowAny])
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
@permission_classes([AllowAny])
def verify_otp(request):
    try:
        response = cognito_client.confirm_sign_up(
            ClientId=settings.COGNITO_APP_CLIENT_ID,
            Username=request.data['email'],
            ConfirmationCode=request.data['otp']
        )
        
        # Create user in Django database
        user = User.objects.create(
            email=request.data['email'],
            phone_number=request.data['phone_number'],
            username=request.data['email'],
            is_verified=True
        )
        user.set_password(request.data['password'])
        user.save()
        
        return Response({
            'message': 'Email verified successfully'
        })
    except ClientError as e:
        return Response({
            'error': str(e)
        }, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
@permission_classes([AllowAny])
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
