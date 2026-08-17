import React, { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

function LogIn() {
  const [username, setUser] = useState('');
  const [password, setpass] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.text}>LOGIN PAGE</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter UserName"
        value={username}
        onChangeText={setUser}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Password"
        value={password}
        onChangeText={setpass}
      />
      <View style={styles.button}>
        <Button
          title="LOGIN"
          onPress={() => {
            Alert.alert('success', 'LogIn successful');
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 35,
    fontWeight: 'bold',
  },
  input: {
    height: 50,
    width: 300,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
    margin: 10,
  },
  button: {
    marginTop: 10,
    color: 'red',
  },
});
export default LogIn;
