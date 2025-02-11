
from django.urls import path
from . import views

urlpatterns = [
    path('signup/', views.signup, name='signup'),
    path('verify-otp/', views.verify_otp, name='verify-otp'),
    path('login/', views.login, name='login'),
]
