# File: serializer.py -->
# Author: Anna LaPrade (alaprade@bu.edu), 11/10/2025 -->
# Description: serializers for the dadjokes app -->

from rest_framework import serializers
from .models import Joke, Picture

class JokeSerializer(serializers.ModelSerializer):
    '''serializes the jokes'''
    class Meta:
        '''associated data'''
        model = Joke
        fields = ['id', 'text', 'contributor', 'created_at']

class PictureSerializer(serializers.ModelSerializer):
    '''serializes the pictures'''
    class Meta:
        model = Picture
        '''associated data'''
        fields = ['id', 'image_url', 'contributor', 'created_at']
