from django.urls import path
from . import views

urlpatterns = [
    path('signup/', views.signup, name='signup'),
    path('login/', views.signin, name='login'),
    path('addinquiry/', views.upload_inquiry, name='upload_inquiry')
]
