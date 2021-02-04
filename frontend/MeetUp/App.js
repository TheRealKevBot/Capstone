import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import Main from './pages/Main'

export default function App() {
  return (
    <SafeAreaView style={styles.app}>
    <View style={styles.app}>
      <View style={styles.headerContainer}>
      <Text style={styles.headertext}>MeetUp</Text>
      </View>
      <Main />    
      <StatusBar style="auto" />
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: 'black',
  },
  headerContainer: {
    alignItems: 'center',
  },
  headertext: {
    color: 'white',
    fontSize: 50,
    paddingTop: 44,
    paddingBottom: 22,
  },
});
