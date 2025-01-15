from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.models import User
from .serializers import UserSerializer, RegisterSerializer
from .models import OTP
from datetime import datetime, timedelta

# In-memory storage for testing
otp_store = {}

# Initiate Signup - Generates OTPs for email and phone
@api_view(['POST'])
@permission_classes([AllowAny])
def initiate_signup(request):
    email = request.data.get('email')
    phone = request.data.get('phone')

    if not email or not phone:
        return Response({'error': 'Email and phone number are required'}, status=status.HTTP_400_BAD_REQUEST)

    # Generate dummy OTPs
    email_otp = "123456"  # Replace with actual OTP generation logic in production
    phone_otp = "654321"

    # Save OTPs in in-memory storage
    otp_store[email] = {
        'email': email,
        'phone': phone,
        'email_otp': email_otp,
        'phone_otp': phone_otp,
        'created_at': datetime.now(),
    }

    # Simulate sending OTPs (print to console)
    print(f"Email OTP for {email}: {email_otp}")
    print(f"Phone OTP for {phone}: {phone_otp}")

    return Response({'message': 'OTPs sent successfully. Check your email and phone.'})

# Verify OTP and Create Account
@api_view(['POST'])
@permission_classes([AllowAny])
def verify_otp(request):
    email = request.data.get('email')
    phone = request.data.get('phone')
    email_otp = request.data.get('email_otp')
    phone_otp = request.data.get('phone_otp')
    password = request.data.get('password')

    # Validate request data
    if not all([email, phone, email_otp, phone_otp, password]):
        return Response({'error': 'All fields are required'}, status=status.HTTP_400_BAD_REQUEST)

    # Check OTPs in memory
    otp_data = otp_store.get(email)
    if not otp_data:
        return Response({'error': 'No OTPs found for the provided email'}, status=status.HTTP_400_BAD_REQUEST)

    if otp_data.get('phone') != phone:
        return Response({'error': 'Phone number does not match'}, status=status.HTTP_400_BAD_REQUEST)

    if otp_data.get('email_otp') != email_otp or otp_data.get('phone_otp') != phone_otp:
        return Response({'error': 'Invalid OTPs provided'}, status=status.HTTP_400_BAD_REQUEST)

    # Simulate user creation
    username = email.split('@')[0]
    if User.objects.filter(email=email).exists():
        return Response({'error': 'User with this email already exists'}, status=status.HTTP_400_BAD_REQUEST)

    user = User.objects.create_user(username=username, email=email, password=password)

    # Generate token
    refresh = RefreshToken.for_user(user)
    return Response({
        'token': str(refresh.access_token),
        'refresh': str(refresh),
        'user': UserSerializer(user).data
    })

# Get User Profile
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def user_profile(request):
    serializer = UserSerializer(request.user)
    return Response(serializer.data)
