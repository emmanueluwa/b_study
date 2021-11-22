from rest_framework import serializers
from .models import Notepad

class NotepadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notepad
        fields = ('id', 'body', 'updated', 'created')
