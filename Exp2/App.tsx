
import React, {useState} from 'react';

import {
  View,
  Text,
  StyleSheet,
  Alert,
} from 'react-native';

import CustomHeader from './Component/Exp5/CustomHeader';
import CustomInput from './Component/Exp5/CustomInput';
import CustomCard from './Component/Exp5/CustomCard';
import CustomButton from './Component/Exp5/CustomButton';

const App = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    if (name.trim() === '' || email.trim() === '') {
      Alert.alert(
        'Error',
        'Please fill all fields',
      );
      return;
    }

    Alert.alert(
      'Success',
      `Welcome ${name}!`,
    );
  };

  return (
    <View style={styles.container}>

      {/* Custom Header */}
      <CustomHeader
        title="Registration"
        leftIcon={
          <Text style={styles.icon}>☰</Text>
        }
        rightIcon={
          <Text style={styles.icon}>⋮</Text>
        }
      />

      <View style={styles.content}>

        {/* First Card */}
        <CustomCard>

          <Text style={styles.cardTitle}>
            Create Account
          </Text>

          <Text style={styles.description}>
            Enter your details below
          </Text>

          {/* Name Input */}
          <CustomInput
            label="Name"
            value={name}
            onChangeText={setName}
            placeholder="Enter your name"
          />

          {/* Email Input */}
          <CustomInput
            label="Email"
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email"
          />

          {/* Register Button */}
          <CustomButton
            title="Register"
            onPress={handleSubmit}
            color="#2196F3"
          />

          {/* Cancel Button */}
          <CustomButton
            title="Cancel"
            onPress={() => {
              setName('');
              setEmail('');
              Alert.alert('Cancelled');
            }}
            color="#F44336"
          />

        </CustomCard>

        {/* Second Card */}
        <CustomCard style={styles.secondCard}>

          <Text style={styles.cardTitle}>
            Reusable Components
          </Text>

          <Text style={styles.description}>
            This card uses the same CustomCard
            component with different content.
          </Text>

          <CustomButton
            title="Learn More"
            onPress={() =>
              Alert.alert(
                'Reusable Components',
                'Components can be reused with different props.',
              )
            }
            color="#4CAF50"
          />

        </CustomCard>

      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },

  content: {
    padding: 15,
  },

  icon: {
    color: '#FFFFFF',
    fontSize: 24,
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  description: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 15,
  },

  secondCard: {
    marginTop: 5,
  },
});

export default App;
