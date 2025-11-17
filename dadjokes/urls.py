# File: urls.py -->
# Author: Anna LaPrade (alaprade@bu.edu), 11/10/2025 -->
# Description: urls for the dadjokes app -->

from django.urls import path
from . import views

urlpatterns = [
    path('', views.RandomView.as_view(), name='index'),
    path('random', views.RandomView.as_view(), name='random'),
    path('jokes', views.JokesListView.as_view(), name='jokes_list'),
    path('joke/<int:pk>', views.JokeDetailView.as_view(), name='joke_detail'),
    path('pictures', views.PicturesListView.as_view(), name='pictures_list'),
    path('picture/<int:pk>', views.PictureDetailView.as_view(), name='picture_detail'),

    # api URLS
    path('api/', views.RandomJokeAPIView.as_view()),
    path('api/random', views.RandomJokeAPIView.as_view()),
    path('api/jokes', views.JokeListCreateAPIView.as_view()),
    path('api/joke/<int:pk>', views.JokeDetailAPIView.as_view()),
    path('api/pictures', views.PictureListAPIView.as_view()),
    path('api/picture/<int:pk>', views.PictureDetailAPIView.as_view()),
    path('api/random_picture', views.RandomPictureAPIView.as_view()),

]
