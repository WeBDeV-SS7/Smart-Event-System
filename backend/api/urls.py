from django.urls import path
from .views import home, register, login, events_list, event_detail, register_event

urlpatterns = [
    path('', home),  # <-- this handles "/api/"
    path('register/', register),
    path('login/', login),
    path('events/', events_list),
    path('events/<int:id>/', event_detail),
    path('register-event/', register_event),
]