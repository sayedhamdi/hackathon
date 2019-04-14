from django.db import models

class employee(models.Model):
    
    profil = models.CharField(max_length=64)
    diploma = models.CharField(max_length=64)
    city = models.CharField(max_length=64)
    experience = models.IntegerField()
    skills=models.CharField(max_length=64)
