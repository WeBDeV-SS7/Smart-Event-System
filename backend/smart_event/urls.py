from django.contrib import admin
from django.urls import path, include
from api.views import home # Only import the home function here

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')), 
    path('', home, name='home'),
    
]