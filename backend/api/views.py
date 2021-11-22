from django.shortcuts import render
from rest_framework import generics
from .serializers import NotepadSerializer
from .models import Notepad

#allows us to view and create notes
class NotepadView(generics.CreateAPIView):
    queryset = Notepad.objects.all()
    serializer_class = NotepadSerializer

