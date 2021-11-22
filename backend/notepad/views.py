from django.shortcuts import render
from django.http import JsonResponse


def w_count(request):
    text = request.GET.get("text", "")

    return JsonResponse({"w count": len(text)})
