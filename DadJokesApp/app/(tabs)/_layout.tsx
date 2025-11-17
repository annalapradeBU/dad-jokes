// File: _layout.tsx
// Author: Anna LaPrade (alaprade@bu.edu), 11/11/2025
// Description: layout for shared UI accross tabs

import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { View, ImageBackground, StyleSheet } from 'react-native';
// grab my stylesheet from my_styles
import { styles } from '../../assets/my_styles';
import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

// run those tab icons
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

// tab layoout function 
export default function TabLayout() {
  const colorScheme = useColorScheme();

  // subtle white overlay for the popcorn 
  const overlayStyle = {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255,255,255,0.6)', 
  };

  return (
    <Tabs
      screenOptions={{
        // selected icon/label
        tabBarActiveTintColor: 'red',
        // unselected icon + label
        tabBarInactiveTintColor: 'black',
        // get tab bar styles from my_styles
        tabBarLabelStyle: styles.tabLabel,
        headerTitleStyle: styles.headerTitle,
        headerShown: useClientOnlyValue(false, true),

        // top header popcorn texture
        headerBackground: () => (
          <ImageBackground
            source={{ uri: 'https://img.freepik.com/free-photo/top-view-fresh-popcorn-movie-night_140725-84583.jpg?semt=ais_hybrid&w=740&q=80' }}
            style={{ flex: 1 }}
            resizeMode="repeat"
          >
            <View style={overlayStyle} />
          </ImageBackground>
        ),

        // bottom tab bar popcorn texture
        tabBarBackground: () => (
          <ImageBackground
            source={{ uri: 'https://img.freepik.com/free-photo/top-view-fresh-popcorn-movie-night_140725-84583.jpg?semt=ais_hybrid&w=740&q=80' }}
            style={{ flex: 1 }}
            resizeMode="repeat"
          >
            <View style={overlayStyle} />
          </ImageBackground>
        ),
      }}
    >
      {/* index tab */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Random',
          tabBarIcon: ({ color }) => <TabBarIcon name="smile-o" color={color} />,
        }}
      />

      {/* list of all jokes tab */}
      <Tabs.Screen
        name="joke_list"
        options={{
          title: 'All Jokes',
          tabBarIcon: ({ color }) => <TabBarIcon name="list" color={color} />,
        }}
      />

      {/* add jokes tab */}
      <Tabs.Screen
        name="add_joke"
        options={{
          title: 'Add Joke',
          tabBarIcon: ({ color }) => <TabBarIcon name="plus-square" color={color} />,
        }}
      />
    </Tabs>
  );
}
