import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

function Counter() {
  const [count, setcount] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Counter App</Text>
      <Text style={styles.text}>{count}</Text>
      <View style={styles.button}>
        <Button
          title="Increment"
          onPress={() => {
            setcount(count + 1);
          }}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Decrement"
          onPress={() => {
            setcount(count - 1);
          }}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Reset"
          onPress={() => {
            setcount(0);
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  button: {
    margin: 10,
  },
});

export default Counter;
