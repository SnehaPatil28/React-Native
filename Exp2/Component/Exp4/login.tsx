import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

interface LoginProps {
  registeredEmail: string;
  registeredPassword: string;
  onLoginSuccess: () => void;
  onCreateAccount: () => void;
}

const Login = ({
  registeredEmail,
  registeredPassword,
  onLoginSuccess,
  onCreateAccount,
}: LoginProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (email === '' || password === '') {
      setError('Enter email and password');
      return;
    }

    if (email !== registeredEmail || password !== registeredPassword) {
      setError('Invalid email or password');
      return;
    }

    setError('');
    onLoginSuccess();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

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

      {error !== '' && <Text style={styles.error}>{error}</Text>}

      <Button title="Login" onPress={handleLogin} />

      <Text style={styles.link} onPress={onCreateAccount}>
        Don't have an account? Register
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

export default Login;
