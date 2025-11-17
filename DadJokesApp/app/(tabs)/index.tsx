// File: index.tsx
// Author: Anna LaPrade (alaprade@bu.edu), 11/11/2025
// Description: tab to show a random image and joke

import React, { useState, useCallback } from 'react';
import { ScrollView, View, Text, Image, RefreshControl, ActivityIndicator } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { styles } from '../../assets/my_styles';

// home screen
export default function IndexScreen() {
  const [joke, setJoke] = useState(null);
  const [picture, setPicture] = useState(null);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  // function to get the random joke and picture
  const fetchRandom = async () => {
    setLoading(true);

    // grab joke from the API
    try {
      const jokeRes = await fetch('https://cs-webapps.bu.edu/alaprade/dadjokes/api/random');
      const jokeData = await jokeRes.json();
      setJoke(jokeData);

      // grab picture from the API
      const picRes = await fetch('https://cs-webapps.bu.edu/alaprade/dadjokes/api/random_picture');
      const picData = await picRes.json();
      setPicture(picData);

      // catch error if needed
    } catch (error) {
      console.error(error);

      // done loading
    } finally {
      setLoading(false);
    }
  };

  // facilitates pulldown refresh
  const handleRefresh = async () => {
    setRefreshing(true);
    await fetchRandom();
    setRefreshing(false);
  };

  useFocusEffect(
    useCallback(() => {
      fetchRandom();
    }, [])
  );

  return (
    <View style={styles.background}>
      {/* vertical stripes */}
      <View style={styles.verticalStripes}>
        {Array.from({ length: 15 }).map((_, i) => (
          <View
            key={i}
            style={{
              flex: 1,
              backgroundColor: i % 2 === 0 ? '#ff0000' : '#ffffff',
            }}
          />
        ))}
      </View>

      {/* scrollable content on top */}
      <ScrollView
        style={styles.contentContainer}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
      >
        {/* loading screen if needed */}
        {loading && (
          <View >
            <ActivityIndicator size="large" color="#03bafc" />
            <Text style={styles.loadingText}>Loading joke and picture...</Text>
          </View>
        )}

        {/* display joke + joke attributes */}
        {joke && (
          <View style={styles.card}>
            <Text style={styles.titleText}>Joke of the Moment</Text>
            <Text style={styles.bodyText}>{joke.text}</Text>
            <Text style={styles.contributorText}>— {joke.contributor}</Text>
          </View>
        )}

        {/* display image + image attibutes */}
        {picture && (
          <View style={styles.card}>
            <Image source={{ uri: picture.image_url }} style={styles.image} />
            <Text style={styles.contributorText}>— {picture.contributor}</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}
