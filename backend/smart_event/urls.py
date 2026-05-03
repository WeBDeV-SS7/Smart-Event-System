from django.contrib import admin
from django.urls import path, include
from api.views import home # Only import the home function here
from api import views  # 🔥 ADD THIS LINE (Make sure 'api' matches your app folder name)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')), 
    path('', home, name='home'),
    path('registrations/<int:pk>/', views.cancel_registration, name='cancel-registration'),
    
]