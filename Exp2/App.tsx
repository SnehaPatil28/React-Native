
import React, {useState} from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import ProfileScreen from './Component/Exp6/ProfileScreen';
import SettingsScreen from './Component/Exp6/SettingsScreen';

import {
  COLORS,
  SPACING,
  FONT_SIZES,
} from './Component/Exp6/theme';

const App = () => {

  const [screen, setScreen] = useState<
    'profile' | 'settings'
  >('profile');

  return (
    <View style={styles.container}>

      {screen === 'profile' ? (
        <ProfileScreen />
      ) : (
        <SettingsScreen />
      )}

      {/* Bottom Navigation */}

      <View style={styles.navigation}>

        <TouchableOpacity
          onPress={() => setScreen('profile')}
        >
          <Text
            style={[
              styles.navText,
              screen === 'profile'
                ? styles.active
                : null,
            ]}
          >
            Profile
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setScreen('settings')}
        >
          <Text
            style={[
              styles.navText,
              screen === 'settings'
                ? styles.active
                : null,
            ]}
          >
            Settings
          </Text>
        </TouchableOpacity>

      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  navigation: {
    height: 60,
    backgroundColor: COLORS.card,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },

  navText: {
    fontSize: FONT_SIZES.medium,
    fontWeight: 'bold',
    color: COLORS.secondaryText,
    padding: SPACING.small,
  },

  active: {
    color: COLORS.primary,
  },
});

export default App;
