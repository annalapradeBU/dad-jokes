# File: mdodels.py -->
# Author: Anna LaPrade (alaprade@bu.edu), 11/10/2025 -->
# Description: models for dadjokes app -->

from django.db import models

# Create your models here.


from django.db import models

class Joke(models.Model):
    '''Encapsulate the data of a joke'''

    text = models.TextField()
    contributor = models.CharField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        '''string representation of the joke'''
        snippet = (self.text[:50] + '...') if len(self.text) > 50 else self.text
        return f'"{snippet}" — {self.contributor}'


class Picture(models.Model):
    '''Encapsulate the data of a picture'''

    image_url = models.URLField()
    contributor = models.CharField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        '''string representation of the image'''
        short_url = self.image_url if len(self.image_url) <= 50 else self.image_url[:47] + '...'
        return f'{self.contributor} | {short_url}'
