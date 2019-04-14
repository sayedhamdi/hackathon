from django.urls import include , path
from . import views
urlpatterns = [
    path('', views.index,name='index'),
    path('login',views.login_view,name="login"),
    path('logout',views.logout_view,name="logout"),
    path('home',views.home,name='home'),
    path('signup',views.signup,name='signup'),
    path('employeur',views.employeur,name="employeur"),
]
