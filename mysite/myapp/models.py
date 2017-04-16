from django.db import models
from django.utils.encoding import python_2_unicode_compatible

@python_2_unicode_compatible 
class User(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    user_name = models.CharField(max_length=50)
    email_address = models.EmailField(max_length=254)
    def __str__(self):
        return self.user_name




