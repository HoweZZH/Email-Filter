from django.shortcuts import render
from django.http import HttpResponse

from .models import User

def index(request):
    context = {
        'none': "none",
    }
    return render(request, 'myapp/index.html', context)

    

