
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate
from django.core.mail import send_mail
from .serializers import RegisterSerializer, OTPSerializer, LoginSerializer
from .models import OTP
import random

def generate_otp():
    return str(random.randint(100000, 999999))

@api_view(['POST'])
@permission_classes([AllowAny])
def initiate_signup(request):
    email = request.data.get('email')
    phone = request.data.get('phone')
    
    if not email or not phone:
        return Response({'error': 'Email and phone are required'}, status=status.HTTP_400_BAD_REQUEST)
    
    # Generate OTPs
    email_otp = generate_otp()
    phone_otp = generate_otp()
    
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
            'Verify your email',
            f'Your OTP is: {email_otp}',
            'noreply@yourdomain.com',
            [email],
            fail_silently=False,
        )
    except Exception as e:
        return Response({'error': 'Failed to send email'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
    return Response({'message': 'OTPs sent successfully'})

@api_view(['POST'])
@permission_classes([AllowAny])
def verify_otp(request):
    email = request.data.get('email')
    phone = request.data.get('phone')
    email_otp = request.data.get('email_otp')
    phone_otp = request.data.get('phone_otp')
    
    try:
        otp_obj = OTP.objects.get(email=email, phone=phone)
    except OTP.DoesNotExist:
        return Response({'error': 'Invalid verification attempt'}, status=status.HTTP_400_BAD_REQUEST)
    
    if otp_obj.email_otp != email_otp or otp_obj.phone_otp != phone_otp:
        return Response({'error': 'Invalid OTPs'}, status=status.HTTP_400_BAD_REQUEST)
    
    otp_obj.is_email_verified = True
    otp_obj.is_phone_verified = True
    otp_obj.save()
    
    return Response({'message': 'Verification successful'})

@api_view(['POST'])
@permission_classes([AllowAny])
def login_view(request):
    serializer = LoginSerializer(data=request.data)
    if not serializer.is_valid():
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    login = serializer.validated_data['login']
    password = serializer.validated_data['password']
    
    # Try to authenticate with email
    user = authenticate(username=login, password=password)
    if not user:
        # Try to authenticate with phone
        try:
            user = User.objects.get(phone=login)
            if user.check_password(password):
                user = authenticate(username=user.username, password=password)
        except User.DoesNotExist:
            pass
    
    if not user:
        return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
    
    refresh = RefreshToken.for_user(user)
    return Response({
        'token': str(refresh.access_token),
        'refresh': str(refresh),
        'user': {
            'id': user.id,
            'email': user.email,
            'name': user.first_name
        }
    })

