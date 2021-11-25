from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('journals/', views.getJournals, name="journals"),
    path('journals/<str:pk>/', views.editJournals, name="journal"),
]
