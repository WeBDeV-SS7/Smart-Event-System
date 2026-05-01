from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth import authenticate
from django.http import HttpResponse

from .models import Event, EventRegistration
from .serializers import UserSerializer, EventSerializer, EventRegistrationSerializer


# HOME
def home(request):
    return HttpResponse("API is running 🚀")


# REGISTER
@api_view(['POST'])
def register(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "User created"})
    return Response(serializer.errors)


# LOGIN
@api_view(['POST'])
def login(request):
    username = request.data.get('username')
    password = request.data.get('password')

    user = authenticate(username=username, password=password)

    if user:
        return Response({"message": "Login successful"})
    return Response({"error": "Invalid credentials"})


# EVENTS LIST (GET + POST)
@api_view(['GET', 'POST'])
def events_list(request):
    if request.method == 'GET':
        events = Event.objects.all()
        serializer = EventSerializer(events, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = EventSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)


# SINGLE EVENT (GET, PUT, DELETE)
@api_view(['GET', 'PUT', 'DELETE'])
def event_detail(request, id):
    try:
        event = Event.objects.get(id=id)
    except Event.DoesNotExist:
        return Response({"error": "Not found"})

    if request.method == 'GET':
        serializer = EventSerializer(event)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = EventSerializer(event, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    elif request.method == 'DELETE':
        event.delete()
        return Response({"message": "Deleted"})


# REGISTER FOR EVENT
@api_view(['POST'])
def register_event(request):
    serializer = EventRegistrationSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors)