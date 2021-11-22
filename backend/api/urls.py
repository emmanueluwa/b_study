from django.urls import path, include
from .views import NotepadView

urlpatterns = [
    path('home', NotepadView.as_view())

]
