from django.urls import path, include
from notepad.views import w_count
from .views import main

urlpatterns = [
    path('', main)

]
