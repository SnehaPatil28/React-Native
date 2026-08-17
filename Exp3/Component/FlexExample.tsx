import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function FlexExample() {
  return (
    <View style={styles.container}>

      <View style={styles.box1}>
        <Text>Box 1</Text>
      </View>

      <View style={styles.box2}>
        <Text>Box 2</Text>
      </View>

      <View style={styles.box3}>
        <Text>Box 3</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  box1: {
    width: 80,
    height: 80,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
  },

  box2: {
    width: 80,
    height: 80,
    backgroundColor: 'lightgreen',
    justifyContent: 'center',
    alignItems: 'center',
  },

  box3: {
    width: 80,
    height: 80,
    backgroundColor: 'lightpink',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FlexExample;