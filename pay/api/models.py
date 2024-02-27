from datetime import datetime
from django.db import models
from phonenumber_field.modelfields import PhoneNumberField

# Create your models here.

class LoanAmout(models.Model):
    USER_CHOICES = [
        ('Married', 'Married'),
        ('UnMarried', 'UnMarried'),
        ('Single', 'Single'),
    ]
    fname = models.CharField(max_length=30, default="")
    lname = models.CharField(max_length=30, default="")
    appartment = models.CharField(max_length=100, default="")
    postalCode = models.CharField(max_length=6, default="")
    city = models.CharField(max_length=30, default="")
    email = models.EmailField(max_length=30)
    yearsAtAddress = models.IntegerField(),
    monthsAtAddress = models.IntegerField(),
    cellPhone = PhoneNumberField(null=False, blank=False, unique=True),
    alternate = PhoneNumberField(null=True, blank=True)
    sin = models.CharField(max_length=6)
    title = models.CharField(max_length=30, default="")
    date = models.DateField(null=True, blank=True, default= datetime.now)
    martialStatus = models.CharField(max_length=10, default="", choices=USER_CHOICES)
    amount = models.IntegerField()
    address = models.TextField(blank=True)

    def __str__(self):
        return self.title