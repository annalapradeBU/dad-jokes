// File: add_joke.tsx
// Author: Anna LaPrade (alaprade@bu.edu), 11/11/2025
// Description: tab to allow users to create new jokes and submit them 

import React, { useState } from 'react';
import { View, TextInput, Button, Alert, ActivityIndicator, Text } from 'react-native';
import { styles } from '../../assets/my_styles';

// the adding joke screen
export default function AddJokeScreen() {
  const [text, setText] = useState('');
  const [contributor, setContributor] = useState('');
  const [loading, setLoading] = useState(false);

  // throw an error if one field is left blank
  const handleSubmit = async () => {
    if (!text || !contributor) {
      Alert.alert('Error', 'Please enter both a joke and your name.');
      return;
    }

    // load while we await other things
    setLoading(true);

    // try to post the joke to the API
    try {
      const res = await fetch('https://cs-webapps.bu.edu/alaprade/dadjokes/api/jokes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text, contributor }),
      });

      // gat that response
      const data = await res.json();
      console.log('POST response:', data);

      // if it's not ok, through an error
      if (!res.ok) {
        Alert.alert('Error', 'Failed to submit joke');
        return;
      }

      // if successful, show "Joke submitted!" to user
      Alert.alert('Success', 'Joke submitted!');
      setText('');
      setContributor('');

    //f some sort of error, cathc it and say so to user
    } catch (err) {
      console.error(err);
      Alert.alert('Error', 'Network request failed');

    // no more loading 
    } finally {
      setLoading(false);
    }
  };

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

      {/* form card */}
      <View style={styles.contentContainer}>
        <View style={styles.card}>
          {/* show joke input area to user */}
          <TextInput
            style={styles.input}
            placeholder="Enter joke"
            value={text}
            onChangeText={setText}
            editable={!loading}
            multiline={true}   
            numberOfLines={12}
          />
          {/* show name input (contributor) area to user */}
          <TextInput
            style={styles.inputContributor}
            placeholder="Your name"
            value={contributor}
            onChangeText={setContributor}
            editable={!loading}
          />

          {/* loading spinner */}
          {loading ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color="#f57c00" />
              <Text style={styles.loadingText}>Submitting joke...</Text>
            </View>

          // submit that joke! 
          ) : (
            <Button title="Submit Joke" onPress={handleSubmit} />
          )}
        </View>
      </View>
    </View>
  );
}
