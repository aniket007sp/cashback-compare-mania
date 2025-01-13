from django.urls import path
from . import views
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path('login/', views.login_view, name='login'),
    path('initiate-signup/', views.initiate_signup, name='initiate-signup'),
    path('verify-otp/', views.verify_otp, name='verify-otp'),
    path('profile/', views.user_profile, name='profile'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]