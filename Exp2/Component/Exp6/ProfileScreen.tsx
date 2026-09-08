import React, { useState } from 'react';

import { View, Text, StyleSheet, Alert, ScrollView, Image } from 'react-native';

import CustomHeader from './CustomHeader';
import CustomCard from './CustomCard';
import CustomInput from './CustomInput';
import CustomButton from './CustomButton';

import { COLORS, SPACING, FONT_SIZES } from './theme';

const ProfileScreen = () => {
  const [name, setName] = useState('Sneha Patil');
  const [email, setEmail] = useState('sneha@gmail.com');
  const [department, setDepartment] = useState('AIML');

  const handleSave = () => {
    Alert.alert('Success', 'Profile updated successfully!');
  };

  return (
    <View style={styles.container}>
      <CustomHeader
        title="Profile"
        leftIcon={<Text style={styles.icon}>☰</Text>}
        rightIcon={<Text style={styles.icon}>⋮</Text>}
      />

      <ScrollView contentContainerStyle={styles.content}>
        <CustomCard>
          <Text style={styles.heading}>Profile Details</Text>

          <Text style={styles.description}>
            Update your personal information
          </Text>

          <CustomInput
            label="Name"
            value={name}
            onChangeText={setName}
            placeholder="Enter your name"
          />

          <CustomInput
            label="Email"
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email"
          />

          <CustomInput
            label="Department"
            value={department}
            onChangeText={setDepartment}
            placeholder="Enter department"
          />

          <CustomButton title="Save Changes" onPress={handleSave} />
        </CustomCard>

        {/* Component Composition */}
        <CustomCard>
          <Text style={styles.heading}>Student Profile</Text>

          <Image
            source={require('../../assets/Sneha_Photo.jpg')}
            style={styles.image}
          />

          <Text style={styles.name}>{name}</Text>

          <Text style={styles.description}>{department} Student</Text>
        </CustomCard>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  content: {
    padding: SPACING.medium,
  },

  icon: {
    color: COLORS.white,
    fontSize: 24,
  },

  heading: {
    fontSize: FONT_SIZES.large,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: SPACING.small,
  },

  description: {
    fontSize: FONT_SIZES.small,
    color: COLORS.secondaryText,
    marginBottom: SPACING.medium,
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },

  name: {
    fontSize: FONT_SIZES.large,
    fontWeight: 'bold',
    color: COLORS.text,
    textAlign: 'center',
  },
});

export default ProfileScreen;
