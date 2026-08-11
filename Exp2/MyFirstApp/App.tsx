import React from 'react';

import {
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Text,
  Image,
} from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  return (
    <View style={styles.container}>
      <StudentCard />
    </View>
  );
}

function StudentCard() {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>STUDENT CARD</Text>

      <Image source={require('./assets/Rakhi.jpeg')} style={styles.image} />

      <Text style={styles.info}>Name: Rakhi Patil</Text>

      <Text style={styles.info}>PRN: 23UAM098</Text>

      <Text style={styles.info}>Department: AI & ML</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightyellow',
  },

  card: {
    width: 320,
    padding: 20,
    borderRadius: 15,
    backgroundColor: 'white',
    elevation: 5,
    alignItems: 'center',
  },

  cardTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },

  info: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default App;
