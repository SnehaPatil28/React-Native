
import React, {useState} from 'react';

import {
  View,
  Text,
  StyleSheet,
  Alert,
  ScrollView,
} from 'react-native';

import CustomHeader from './CustomHeader';
import CustomCard from './CustomCard';
import CustomInput from './CustomInput';
import CustomButton from './CustomButton';

import {
  COLORS,
  SPACING,
  FONT_SIZES,
} from './theme';

const SettingsScreen = () => {

  const [username, setUsername] = useState('Sneha');
  const [language, setLanguage] = useState('English');

  const handleSave = () => {
    Alert.alert(
      'Success',
      'Settings saved successfully!',
    );
  };

  const handleReset = () => {
    setUsername('');
    setLanguage('');

    Alert.alert(
      'Reset',
      'Settings have been reset.',
    );
  };

  return (
    <View style={styles.container}>

      <CustomHeader
        title="Settings"
        leftIcon={
          <Text style={styles.icon}>☰</Text>
        }
        rightIcon={
          <Text style={styles.icon}>⚙</Text>
        }
      />

      <ScrollView contentContainerStyle={styles.content}>

        <CustomCard>

          <Text style={styles.heading}>
            Account Settings
          </Text>

          <Text style={styles.description}>
            Manage your account preferences
          </Text>

          <CustomInput
            label="Username"
            value={username}
            onChangeText={setUsername}
            placeholder="Enter username"
          />

          <CustomInput
            label="Language"
            value={language}
            onChangeText={setLanguage}
            placeholder="Enter language"
          />

          <CustomButton
            title="Save Settings"
            onPress={handleSave}
          />

        </CustomCard>

        <CustomCard>

          <Text style={styles.heading}>
            Application Settings
          </Text>

          <Text style={styles.description}>
            Customize your application.
          </Text>

          <CustomButton
            title="Reset Settings"
            onPress={handleReset}
            color={COLORS.danger}
          />

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
});

export default SettingsScreen;
