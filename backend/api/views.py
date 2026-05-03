from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate
from django.http import HttpResponse

# Import your models exactly as named in models.py
from .models import Event, EventRegistration

# Ensure these names match your serializers.py
from .serializers import UserSerializer, EventSerializer, EventRegistrationSerializer

def home(request):
    return HttpResponse("<h1>Smart Event Management System API is running 🚀</h1>")

@api_view(['POST'])
def register(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.save()
        token, _ = Token.objects.get_or_create(user=user)
        return Response({"message": "User created", "token": token.key, "user_id": user.id}, status=201)
    return Response(serializer.errors, status=400)

@api_view(['POST'])
def login(request):
    username = request.data.get('username')
    password = request.data.get('password')
    user = authenticate(username=username, password=password)
    
    if user:
        token, _ = Token.objects.get_or_create(user=user)
        return Response({
            "token": token.key,
            "user_id": user.id,
            "username": user.username
        }, status=200)
    return Response({"error": "Invalid credentials"}, status=401)

# 🔥 FIXED: Added missing event_list for Browse Events
@api_view(['GET'])
def event_list(request):
    """Fetches all events for the browse events page"""
    events = Event.objects.all()
    serializer = EventSerializer(events, many=True)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def my_registrations(request):
    """Fetches registrations for the logged-in user"""
    registrations = EventRegistration.objects.filter(user=request.user)
    serializer = EventRegistrationSerializer(registrations, many=True) 
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def register_event(request):
    event_id = request.data.get('event_id')
    try:
        event = Event.objects.get(id=event_id)
        # Match the model name: EventRegistration
        obj, created = EventRegistration.objects.get_or_create(user=request.user, event=event)
        
        if not created:
            return Response({"message": "Already registered for this event"}, status=200)
            
        return Response({"message": f"Successfully registered for {event.title}"}, status=201)
    except Event.DoesNotExist:
        return Response({"error": "Event not found"}, status=404)

@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def cancel_registration(request, registration_id):
    try:
        # Ensure the user can only delete their own registration
        registration = EventRegistration.objects.get(id=registration_id, user=request.user)
        registration.delete()
        return Response({"message": "Registration cancelled successfully"}, status=200)
    except EventRegistration.DoesNotExist:
        return Response({"error": "Registration not found"}, status=404)