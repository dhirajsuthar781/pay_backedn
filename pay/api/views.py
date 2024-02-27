from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
import json
from datetime import datetime
from django.views.decorators.csrf import csrf_exempt,csrf_protect
from django.contrib.auth.models import User
from django.http import HttpResponse
from django.contrib import messages
from .models import *
# Create your views here.

@csrf_exempt
def signup(request):
    if request.method == "POST":
        username = request.POST.get('username')
        fname = request.POST.get('fname')
        email = request.POST.get('email')
        pass1 = request.POST.get('pass1')
        pass2 = request.POST.get('pass2')
        phone = request.POST.get('phone')

        if User.objects.filter(username=username):
            messages.error(request, "Username already exist! Please try some other username.")
        
        if User.objects.filter(email=email).exists():
            messages.error(request, "Email Already Registered!!")
        
        
        
       
        
        myuser = User.objects.create_user(username, email, pass1)
        myuser.first_name = fname
        myuser.phone = phone
        myuser.last_name = "None"
        # myuser.is_active = False
        myuser.is_active = True
        myuser.save()
        messages.success(request, "Your Account has been created succesfully!! Please check mail for confirmation")
        
        
  
        return HttpResponse(json.dumps({"msg": " your details updated successfully."}),content_type="application/json",)
        
        
    return HttpResponse(json.dumps({"msg": " your details updated successfully."}),content_type="application/json",)


@csrf_exempt
def signin(request):
      if request.method == 'POST':
        username = request.POST.get('username')
        pass1 = request.POST.get('pass1')
        phone = request.POST.get('phone')
        
        user = authenticate(username=username, password=pass1, phone=phone)
        
        if user is not None:
            login(request, user)
            fname = user.first_name
            return HttpResponse(json.dumps({"msg": " your details updated successfully."}),content_type="application/json",)
            
        else:
            HttpResponse(json.dumps({"msg": " Bad Credentials!! "}),content_type="application/json",)

      return HttpResponse(json.dumps({"msg": " not expected method."}),content_type="application/json",)

@csrf_exempt
def upload_inquiry(request):
    if request.method == "POST":
        loan = LoanAmout()
        loan.fname = request.POST.get('fname')
        loan.lname = request.POST.get('lname')
        loan.appartment = request.POST.get('appartment')
        loan.postalCode = request.POST.get('postalCode')
        loan.city = request.POST.get('city')
        loan.email = request.POST.get('email')
        loan.yearsAtAddress = request.POST.get('yearsAtAddress')
        loan.monthsAtAddress = request.POST.get('monthsAtAddress')
        loan.cellPhone = request.POST.get('cellPhone')
        loan.alternate = request.POST.get('alternate')
        loan.sin = request.POST.get('sin')
        loan.title = request.POST.get('title')
        month = int(request.POST.get('month'))
        day = int(request.POST.get('day'))
        year = int(request.POST.get('year'))
        loan.date = datetime(year, month, day)
        loan.martialStatus = request.POST.get('martialStatus')
        loan.amount = request.POST.get('amount')
        loan.address = request.POST.get('address')

        loan.save()

        return HttpResponse(json.dumps({"msg": " not expected method."}),content_type="application/json",)