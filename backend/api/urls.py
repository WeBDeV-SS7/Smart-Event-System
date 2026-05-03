from django.urls import path
from . import views

urlpatterns = [
    path('register/', views.register, name='register'),
    path('login/', views.login, name='login'),
    path('events/', views.event_list, name='event_list'),
    path('register-event/', views.register_event, name='register_event'),
    path('my-registrations/', views.get_my_registrations, name='my-registrations'),
path('registrations/<int:pk>/', views.cancel_registration, name='cancel-registration')]