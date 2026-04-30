from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def home(request):
    return Response({"message": "Backend is running 🚀"})

@api_view(['GET'])
def get_events(request):
    events = [
        {"title": "Hackathon", "date": "2026-05-01"},
        {"title": "Workshop", "date": "2026-06-10"}
    ]
    return Response(events)