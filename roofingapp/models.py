import email
from django.db import models

# Create your models here.

class RoofingLead(models.Model):
    category_selected= models.CharField(max_length=200)
    zip_code= models.IntegerField(default=0)
    first_name=models.CharField(max_length=100)
    last_name= models.CharField(max_length=100)
    phone_number= models.IntegerField()
    email= models.EmailField(max_length=300)
    insurance_company= models.CharField(max_length=15)
    home_size= models.CharField(max_length=100)
    severe_damage_leaks= models.CharField(max_length=15)
    slope= models.CharField(max_length=15)
    stories= models.CharField(max_length=30)
    material_quality= models.CharField(max_length=50)
    starting_time=models.CharField(max_length=30)
    conversation_finance= models.CharField(max_length=10)
    appointment_date= models.CharField(max_length=50, null=True, blank=True)
    appointment_time=models.CharField(max_length=50, null=True, blank=True)
    def __str__(self):
            return self.first_name
