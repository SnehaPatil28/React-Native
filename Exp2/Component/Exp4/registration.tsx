import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

interface RegistrationProps {
  onRegister: (email: string, password: string) => void;
  onLoginPress: () => void;
}

const Registration = ({ onRegister, onLoginPress }: RegistrationProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = () => {
    if (name === '') {
      setError('Enter your name');
      return;
    }

    if (email === '') {
      setError('Enter your email');
      return;
    }

    if (password.length < 6) {
      setError('Password must have 6 characters');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setError('');
    onRegister(email, password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registration</Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />

      {error !== '' && <Text style={styles.error}>{error}</Text>}

      <Button title="Register" onPress={handleRegister} />

      <Text style={styles.link} onPress={onLoginPress}>
        Already have an account? Login
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 25,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 25,
  },

  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 12,
    marginBottom: 15,
  },

  error: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
  },

  link: {
    textAlign: 'center',
    color: 'blue',
    marginTop: 20,
  },
});

export default Registration;
