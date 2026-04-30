from django.urls import path
from . import views   # ✅ correct import

urlpatterns = [
    path('', views.home),          # http://127.0.0.1:8000/api/
    path('events/', views.get_events),   # http://127.0.0.1:8000/api/events/
]