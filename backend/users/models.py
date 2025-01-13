from django.db import models
from django.contrib.auth.models import User
import random

class OTP(models.Model):
    email = models.EmailField()
    phone = models.CharField(max_length=15)
    email_otp = models.CharField(max_length=6)
    phone_otp = models.CharField(max_length=6)
    is_email_verified = models.BooleanField(default=False)
    is_phone_verified = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    
    @staticmethod
    def generate_otp():
        return str(random.randint(100000, 999999))