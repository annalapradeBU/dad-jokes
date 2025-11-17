// File: jokes_list.tsx
// Author: Anna LaPrade (alaprade@bu.edu), 11/11/2025
// Description: tab to show all of the jokes

import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet, Dimensions } from 'react-native';
import { styles } from '../../assets/my_styles';

export default function JokeListScreen() {
  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const screenWidth = Dimensions.get('window').width;
  const numStripes = 15;
  const stripeWidth = screenWidth / numStripes;

  // fetch all jokes from the API
  const fetchJokes = async () => {
    try {
      setLoading(true);
      const res = await fetch('https://cs-webapps.bu.edu/alaprade/dadjokes/api/jokes');
      console.log('HTTP status:', res.status);

      const data = await res.json();
      console.log('Received jokes:', data);
      setJokes(data);
    } catch (error) {
      console.error('Error fetching jokes:', error);
    } finally {
      setLoading(false);
    }
  };

  // pull-to-refresh
  const handleRefresh = async () => {
    setRefreshing(true);
    await fetchJokes();
    setRefreshing(false);
  };

  useEffect(() => {
    fetchJokes();
  }, []);

  // render each individual joke card
  const renderJoke = useCallback(
    ({ item }) => (
      <View style={styles.cardAllJokes}>
        <Text style={styles.bodyText}>{item.text}</Text>
        <Text style={styles.contributorText}>— {item.contributor}</Text>
      </View>
    ),
    []
  );

  return (
    <View style={[styles.background, { flex: 1 }]}>
      {/* vertical stripes behind everything, had to do differently with flatlist */}
      <View style={[StyleSheet.absoluteFill, { flexDirection: 'row', zIndex: -1}]}>
        {Array.from({ length: numStripes }).map((_, i) => (
          <View
            key={i}
            style={{
              width: stripeWidth,
              height: '100%',
              backgroundColor: i % 2 === 0 ? '#ff0000' : '#ffffff',
            }}
          />
        ))}
      </View>

      {/* centering wrapper */}
      <View>
        {loading && jokes.length === 0 ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#ffffff" />
            <Text style={styles.loadingText}>Loading jokes...</Text>
          </View>
        ) : (

          // get the jokes on screen
          <FlatList
            data={jokes}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderJoke}

            // facilitate refreshing
            refreshing={refreshing}
            onRefresh={handleRefresh}

            // little extra styling for this (cards were finicky for whatever reason)

            // show no jokes found if no jokes
            ListEmptyComponent={() =>
              !loading && (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={styles.loadingText}>No jokes found :/</Text>
                </View>
              )
            }
          />
        )}
      </View>
    </View>
  );
}
