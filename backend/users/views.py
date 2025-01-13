from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken
from .serializers import UserSerializer, RegisterSerializer
from .models import OTP
from django.core.mail import send_mail
from django.conf import settings
import os
from twilio.rest import Client

@api_view(['POST'])
@permission_classes([AllowAny])
def login_view(request):
    # ... keep existing code

@api_view(['POST'])
@permission_classes([AllowAny])
def initiate_signup(request):
    email = request.data.get('email')
    phone = request.data.get('phone')
    
    # Generate OTPs
    email_otp = OTP.generate_otp()
    phone_otp = OTP.generate_otp()
    
    # Save OTPs
    otp_obj = OTP.objects.create(
        email=email,
        phone=phone,
        email_otp=email_otp,
        phone_otp=phone_otp
    )
    
    # Send email OTP
    try:
        send_mail(
            'Your OTP for SavvyZi Registration',
            f'Your email verification OTP is: {email_otp}',
            'noreply@savvyzi.com',
            [email],
            fail_silently=False,
        )
    except Exception as e:
        print(f"Email sending failed: {str(e)}")
    
    # Send SMS OTP using Twilio
    try:
        client = Client(settings.TWILIO_ACCOUNT_SID, settings.TWILIO_AUTH_TOKEN)
        message = client.messages.create(
            body=f'Your phone verification OTP for SavvyZi is: {phone_otp}',
            from_=settings.TWILIO_PHONE_NUMBER,
            to=phone
        )
    except Exception as e:
        print(f"SMS sending failed: {str(e)}")
    
    return Response({'message': 'OTPs sent successfully'})

@api_view(['POST'])
@permission_classes([AllowAny])
def verify_otp(request):
    email = request.data.get('email')
    phone = request.data.get('phone')
    email_otp = request.data.get('email_otp')
    phone_otp = request.data.get('phone_otp')
    password = request.data.get('password')
    
    try:
        otp_obj = OTP.objects.filter(email=email, phone=phone).latest('created_at')
        
        if otp_obj.email_otp == email_otp:
            otp_obj.is_email_verified = True
        if otp_obj.phone_otp == phone_otp:
            otp_obj.is_phone_verified = True
        
        otp_obj.save()
        
        if otp_obj.is_email_verified and otp_obj.is_phone_verified:
            # Create user account
            serializer = RegisterSerializer(data={
                'username': email.split('@')[0],  # Using email prefix as username
                'email': email,
                'password': password,
                'password2': password
            })
            
            if serializer.is_valid():
                user = serializer.save()
                refresh = RefreshToken.for_user(user)
                return Response({
                    'token': str(refresh.access_token),
                    'refresh': str(refresh),
                    'user': UserSerializer(user).data
                })
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
        return Response({
            'is_email_verified': otp_obj.is_email_verified,
            'is_phone_verified': otp_obj.is_phone_verified,
            'message': 'OTP verification incomplete'
        }, status=status.HTTP_400_BAD_REQUEST)
        
    except OTP.DoesNotExist:
        return Response({'error': 'Invalid OTP request'}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def user_profile(request):
    # ... keep existing code