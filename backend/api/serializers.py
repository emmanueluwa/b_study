from rest_framework.serializers import ModelSerializer
from .models import Notepad

class NotepadSerializer(ModelSerializer):
    class Meta:
        model = Notepad
        fields = '__all__'
