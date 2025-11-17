# dad-jokes
A playful web app that lets users explore, contribute, and browse a collection of dad jokes and funny images. Includes random joke/picture generation, detailed views, and filtering functionality.

---

**Author:** Anna LaPrade (alaprade@bu.edu)  
**Date:** November 2025  

> **Note:** This repository includes models, views, serializers, and React Native components to demonstrate the app’s functionality. Project-level configuration and sensitive backend code are not included.

---

## Overview

The Dad Jokes App provides a fun platform to:

- View random jokes and pictures.
- Browse all jokes or pictures with details about the contributor.
- Submit new jokes via a web form or mobile app.
- Access a REST API for programmatic retrieval of jokes and pictures.

The backend uses Django with Django REST Framework (DRF), while the frontend is implemented in React Native with Expo and `expo-router`.

---

## Features

### Django Web Backend

**Views**
- `RandomView` – displays a random joke and picture.
- `JokesListView` / `PicturesListView` – paginated lists of jokes/pictures.
- `JokeDetailView` / `PictureDetailView` – details for a single joke or picture.

**API Views**
- `JokeListCreateAPIView` / `PictureListAPIView` – list and create jokes/pictures.
- `JokeDetailAPIView` / `PictureDetailAPIView` – retrieve a single joke or picture.
- `RandomJokeAPIView` / `RandomPictureAPIView` – fetch a random joke or picture.

**Templates**
- `random.html` – shows a random joke and picture.
- `jokes_list.html` / `pictures_list.html` – lists all jokes or pictures.
- `joke_detail.html` / `picture_detail.html` – details for a single joke/picture.
- `base.html` – common layout and navigation.

**Serializers**
- `JokeSerializer` and `PictureSerializer` for DRF API endpoints.

---

### React Native Mobile Frontend

**Tab Layout**
- **Random Tab (`index.tsx`)** – fetches and displays a random joke and picture from the API.
- **All Jokes Tab (`jokes_list.tsx`)** – displays all jokes from the API in a scrollable list.
- **Add Joke Tab (`add_joke.tsx`)** – allows users to submit a new joke with a contributor name.

**Styling**
- Shared styling in `my_styles.ts`.
- Vertical stripe backgrounds and card layouts for visual appeal.
- Popcorn-themed tab bar and header backgrounds.

**Features**
- Pull-to-refresh for random jokes and all jokes list.
- Loading indicators while fetching data.
- Form validation and alerts for submitting jokes.

---

## Usage (Visitor)

### Web
- Visit `/random/` to see a random joke and picture.
- Visit `/jokes/` or `/pictures/` to browse all jokes or pictures.
- Click on a joke or picture to see details including the contributor.
- (Developers can also interact with API endpoints at `/api/jokes/`, `/api/pictures/`, `/api/random/`, `/api/random_picture/`.)

### Mobile App
- **Random Tab** – shows a random joke and picture on app load; pull down to refresh.
- **All Jokes Tab** – scroll through all jokes retrieved from the backend.
- **Add Joke Tab** – submit a new joke with your name; errors shown if fields are empty or network fails.

---

## Dependencies

### Backend
- Django
- Django REST Framework
- Python 3.10+

### Frontend
- React Native
- Expo
- `expo-router`
- `@expo/vector-icons`

---

## Notes
- This repository is intended for demonstration; sensitive API endpoints and backend configuration are not included.
- The mobile app connects to a live API (`https://cs-webapps.bu.edu/alaprade/dadjokes/api/`) for demo purposes.
