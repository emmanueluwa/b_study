from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Notepad
from .serializers import Notepad
from .utils import *

# using decorater on function based view, putting individual views in functions 
@api_view(['GET', 'PUT'])
def getJournals(request, pk):

    if request.method == 'GET':
        return getJournalList(request)

    if request.method == 'PUT':
        return updateJournal(request)


@api_view(['GET', 'DELETE', 'POST'])
def editJournals(request, pk):

    if request.method == 'GET':
        return getJournalDetail(request, pk)

    if request.method == 'POST':
        return createJournal(request, pk)

    if request.method == 'DELETE':
        return deleteJournal(request, pk)

    

