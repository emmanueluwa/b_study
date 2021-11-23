from django.urls import path, include
from .views import NotepadView

urlpatterns = [
    path('notepad', NotepadView.as_view())

]
