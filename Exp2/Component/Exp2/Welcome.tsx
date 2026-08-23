import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

function Welcome() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome To React Native</Text>
      <Text style={styles.text2}>Sneha Patil</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor:'yellow'
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  text2: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default Welcome;
