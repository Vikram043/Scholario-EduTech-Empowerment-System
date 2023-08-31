
from django.contrib import admin
from django.urls import path
from django.contrib.auth.views import LoginView,LogoutView
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',views.home_view,name=''),  


    path('teacherclick', views.teacherclick_view),
    path('studentclick', views.studentclick_view),     


    path('studentsignup', views.student_signup_view,name='studentsignup'),
    path('teachersignup', views.teacher_signup_view),
]