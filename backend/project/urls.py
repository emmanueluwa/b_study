"""project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
"""

from django.contrib import admin
from django.urls import path, include
from notepad.views import w_count

urlpatterns = [
    path('admin/', admin.site.urls),
    path('w_count', w_count, name='w_count'),
    path('', include('api.urls'))
]
