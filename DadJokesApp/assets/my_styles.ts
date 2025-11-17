// File: my_styles.ts
// Author: Anna LaPrade (alaprade@bu.edu), 11/11/2025
// Description: styles for the DadJokes app

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  // general container
  container: { 
    flex: 1, 
  },
  // card for images and jokes
  card: { 
    backgroundColor: '#ffe0b2',
    padding: 20, 
    borderRadius: 15, 
    marginBottom: 15,
    shadowColor: '#ff69b4',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
    borderWidth: 2,
    borderColor: '#ffb6c1', 
    
  },
  // card for jokes on jok_list (flatlist was being odd)
  cardAllJokes: { 
    backgroundColor: '#ffe0b2',
    padding: 20, 
    borderRadius: 15, 
    marginTop: 15,
    marginBottom: 5,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
    borderWidth: 2,
    borderColor: '#ffb6c1',
    width: '90%', 
    alignSelf: 'center',
  },
  // text stuff 
  titleText: { 
    fontSize: 22, 
    fontWeight: '900', 
    marginBottom: 8,
    color: '#d1495b',
    fontFamily: 'sans-serif-medium',
  },
  bodyText: { 
    fontSize: 18,
    color: '#333',
    fontFamily: 'sans-serif',
  },
  contributorText: { 
    fontStyle: 'italic', 
    marginTop: 8,
    textAlign: 'right',
    color: '#6a4c93',
  },
  // input stuff
  input: { 
    borderWidth: 2, 
    borderColor: '#ff69b4', 
    padding: 12, 
    marginBottom: 12, 
    borderRadius: 10,
    backgroundColor: '#fff0f8',
    fontSize: 16,
    minHeight: 250,
  },
  inputContributor: { 
    borderWidth: 2, 
    borderColor: '#ff69b4', 
    padding: 12, 
    marginBottom: 12, 
    borderRadius: 10,
    backgroundColor: '#fff0f8',
    fontSize: 16,

  },
  image: { 
    width: '100%', 
    height: 200, 
    borderRadius: 15, 
    borderWidth: 2,
    borderColor: '#ffb6c1',
  },
  // loading stuff
  loadingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255,255,240,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#03bafc',
  },

  loadingContainer: {
    marginTop: 20, 
    alignItems: 'center'

  },

  background: {
    flex: 1,
    position: 'relative',
  },
  
  // some of the strip stuff 
  verticalStripes: {
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  
  // Make content scroll on top of stripes
  contentContainer: {
    ...StyleSheet.absoluteFillObject,
    padding: 22,
    paddingBottom: 0,
    zIndex: 1,
  },


  tabLabel: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  
  
});
