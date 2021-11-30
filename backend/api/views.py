from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .utils import *

@api_view(['GET'])
def getRoutes(request):

    routes = [
        {
            'Endpoint': '/journals/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of notes'
        },
        {
            'Endpoint': '/journals/id',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single note object'
        },
        {
            'Endpoint': '/journals/create/',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Creates new note with data sent in post request'
        },
        {
            'Endpoint': '/journals/id/update/',
            'method': 'PUT',
            'body': {'body': ""},
            'description': 'Creates an existing note with data sent in post request'
        },
        {
            'Endpoint': '/journals/id/delete/',
            'method': 'DELETE',
            'body': None,
            'description': 'Deletes and exiting note'
        },
    ]
    return Response(routes)


# using decorater on function based view, putting individual views in functions 
@api_view(['GET', 'PUT'])
def getJournals(request):

    if request.method == 'GET':
        return getJournalList()

    if request.method == 'PUT':
        return updateJournal(request)


@api_view(['GET', 'DELETE', 'POST'])
def editJournals(request, pk):

    if request.method == 'GET':
        return getJournalDetail(pk)

    if request.method == 'POST':
        return createJournal(pk)

    if request.method == 'DELETE':
        return deleteJournal(pk)

    

