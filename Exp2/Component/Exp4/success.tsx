import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

interface SuccessProps {
  onLogout: () => void;
}

const Success = ({ onLogout }: SuccessProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Successful!</Text>

      <Text style={styles.message}>Welcome to the app.</Text>

      <Button title="Logout" onPress={onLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  message: {
    marginBottom: 20,
  },
});

export default Success;
