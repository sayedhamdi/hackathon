from django.contrib.auth import authenticate,login,logout
from django.contrib.auth.models import User
from django.shortcuts import render,reverse
from django.http import HttpResponse,HttpResponseRedirect
from .models import employee
# Create your views here.
def index(request):
    if not request.user.is_authenticated:
        return render(request,"authenticate/login.html",{"message":None})
    employees =employee.objects.all()
    context ={
        "user":request.user,
        "condidates":employees
    }
    return render(request,"authenticate/employer.html",context)

def login_view(request):
    username = request.POST.get('username')
    password = request.POST.get('password')
    user = authenticate(request,username=username,password=password)
    if user is not None:
        login(request,user)
        return HttpResponseRedirect(reverse("index"))
    else:
        return render(request,"authenticate/login.html",{"message":"invalid credentials"})
def logout_view(request):
    logout(request)
    return render(request,"authenticate/login.html",{"message":"logged out!"})

def home(request):
    return render(request,"authenticate/home.html")

def signup(request):
    if request.method=="POST":
        username = request.POST.get("username")
        email=request.POST.get("email")
        password=request.POST.get("password")
        user = User.objects.create_user(username,email,password)
        user.save()
        return HttpResponseRedirect(reverse("index"))
    return render(request,"authenticate/signup.html")


def employeur(request):
    employees =employee.objects.all()
    context = {"condidates":employees}
    return render(request,"authenticate/employer.html",context)
