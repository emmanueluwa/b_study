from django.urls import path, include
from . import views

urlpatterns = [
    path('journals/', views.getJournals, name="journals"),
    path('journals/<str:pk>/', views.editJournals, name="journals"),
]
