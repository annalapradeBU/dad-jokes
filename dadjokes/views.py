# File: views.py -->
# Author: Anna LaPrade (alaprade@bu.edu), 11/10/2025 -->
# Description: views for the dadjokes app -->

from django.shortcuts import render, get_object_or_404
from django.views import View
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Joke, Picture
from .serializers import JokeSerializer, PictureSerializer
import random
from django.views.generic import ListView, DetailView, CreateView, TemplateView



# Regular HTML views
class RandomView(TemplateView):
    '''Facilitates showing of a random joke and image'''
    template_name = 'dadjokes/random.html'

    def get_context_data(self):
        '''get random joke and image, add to context '''
        joke = random.choice(Joke.objects.all())
        picture = random.choice(Picture.objects.all())

        context = {
        'joke': joke,
        'picture': picture,
        }

        return context



class JokesListView(ListView):
    '''facillitates list of jokes'''
    template_name = 'dadjokes/jokes_list.html'
    contenxt_object_name = 'joke'
    model = Joke

    def get_context_data(self):
        '''get list of jokes, add it to context'''
        jokes = Joke.objects.all()

        context = {
        'jokes': jokes,
        'count': jokes.count(),
        'page_title': 'All Jokes',
        }

        return context


class JokeDetailView(DetailView):
    '''get and display the details of a single joke'''
    template_name = 'dadjokes/joke_detail.html'
    contenxt_object_name = 'joke'
    model = Joke



class PicturesListView(ListView):
    '''facillitates list of pictures'''
    template_name = 'dadjokes/pictures_list.html'
    contenxt_object_name = 'picture'
    model = Picture

    def get_context_data(self):
        '''get list of all the pictures'''
        pictures = Picture.objects.all()

        context = {
        'pictures': pictures,
        'count': pictures.count(),
        'page_title': 'All Pictures',
        }

        return context


class PictureDetailView(DetailView):
    '''shows details for a single picture'''
    template_name = 'dadjokes/picture_detail.html'
    contenxt_object_name = 'picture'
    model = Picture

    




# API Views
class JokeListCreateAPIView(APIView):
    '''API view for list of jokes'''

    def get(self, request):
        '''get jokes, serialize them, and return the response'''
        jokes = Joke.objects.all()
        serializer = JokeSerializer(jokes, many=True)

        return Response(serializer.data)

    def post(self, request):
        '''post a created joke to the database'''
        serializer = JokeSerializer(data=request.data)

        if serializer.is_valid():
            #f it's valid, save that joke
            serializer.save()
            return Response(serializer.data)
        
        # otherwise, throw error
        return Response(serializer.errors)


class JokeDetailAPIView(APIView):
    '''API access for single joke'''

    def get(self, request, pk):
        '''get the joke (if it exists), serialize it, return as reponse'''
        joke = get_object_or_404(Joke, pk=pk)
        serializer = JokeSerializer(joke)
        return Response(serializer.data)


class PictureListAPIView(APIView):
    '''API view for list of pictures'''

    def get(self, request):
        '''get pcitures, serialize them, and return the response'''
        pictures = Picture.objects.all()
        serializer = PictureSerializer(pictures, many=True)
        return Response(serializer.data)


class PictureDetailAPIView(APIView):
    '''API access for single picture'''

    def get(self, request, pk):
        '''get the picture (if it exists), serialize it, return as reponse'''
        picture = get_object_or_404(Picture, pk=pk)
        serializer = PictureSerializer(picture)
        return Response(serializer.data)


class RandomJokeAPIView(APIView):
    '''API access for random joke'''

    def get(self, request):
        '''get the joke, serialize it, return it '''
        joke = random.choice(Joke.objects.all())
        serializer = JokeSerializer(joke)
        return Response(serializer.data)


class RandomPictureAPIView(APIView):
    '''API access for random picture'''

    def get(self, request):
        '''get the picture, serialize it, return it '''
        picture = random.choice(list(Picture.objects.all()))
        serializer = PictureSerializer(picture)
        return Response(serializer.data)