#https://www.django-rest-framework.org/tutorial/2-requests-and-responses/ 

from rest_framework.response import Response 
from .models import Notepad
from .serializers import NotepadSerializer

def getJournalList():
    journals = Notepad.objects.all().order_by('-updated')
    serializer = NotepadSerializer(journals, many=True)
    return Response(serializer.data)

def getJournalDetail(pk):
    journal = Notepad.objects.all(id=pk)
    serializer = NotepadSerializer(journal, many=False)
    return Response(serializer.data)

# request.data  # Handles arbitrary data.  Works for 'POST', 'PUT' and 'PATCH' methods.
def createJournal(request):
    journalData = request.data
    createdJournal = Notepad.objects.create(
      body=journalData['body']
    )
    serializer = NotepadSerializer(createdJournal, many=False)
    return Response(serializer.journalData)
  
def updateJournal(request, pk):
    updatedData = request.data
    updatedJournal = Notepad.objects.get(id=pk)
    serializer = NotepadSerializer(instance=updatedJournal, updatedData=updatedData)

    if serializer.is_valid():
        serializer.save()

    return serializer.data

def deleteJournal(pk):
    deletedJournal = Notepad.objects.get(id=pk)
    deletedJournal.delete()
    return Response('Journal deleted')
