from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken
from .serializers import UserSerializer, RegisterSerializer
from .models import OTP
from django.contrib.auth.models import User

# In-memory storage for demo
user_store = {}

@api_view(['POST'])
@permission_classes([AllowAny])
def login_view(request):
    email = request.data.get('email')
    password = request.data.get('password')
    
    # For demo, accept any credentials
    try:
        user = User.objects.get(email=email)
        refresh = RefreshToken.for_user(user)
        return Response({
            'token': str(refresh.access_token),
            'refresh': str(refresh),
            'user': UserSerializer(user).data
        })
    except User.DoesNotExist:
        return Response({'error': 'Invalid credentials'}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
@permission_classes([AllowAny])
def initiate_signup(request):
    email = request.data.get('email')
    phone = request.data.get('phone')
    
    # Generate dummy OTPs
    email_otp = "123456"  # Dummy OTP
    phone_otp = "123456"  # Dummy OTP
    
    # Save OTPs
    otp_obj = OTP.objects.create(
        email=email,
        phone=phone,
        email_otp=email_otp,
        phone_otp=phone_otp
    )
    
    # Print OTPs instead of sending
    print(f"Email OTP for {email}: {email_otp}")
    print(f"Phone OTP for {phone}: {phone_otp}")
    
    return Response({'message': 'OTPs generated successfully (check console)'})

@api_view(['POST'])
@permission_classes([AllowAny])
def verify_otp(request):
    email = request.data.get('email')
    get('phone')
    email_otp = request.data.get('email_otp')
    phone_otp = request.data.get('phone_otp')
    password = request.data.get('password')
    
    try:
        otp_obj = OTP.objects.filter(email=email, phone=phone).latest('created_at')
        
        # For demo, accept any OTP
        otp_obj.is_email_verified = True
        otp_obj.is_phone_verified = True
        otp_obj.save()
        
        # Create user account
        serializer = RegisterSerializer(data={
            'username': email.split('@')[0],
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
        
    except OTP.DoesNotExist:
        return Response({'error': 'Invalid OTP request'}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def user_profile(request):
    serializer = UserSerializer(request.user)
    return Response(serializer.data)