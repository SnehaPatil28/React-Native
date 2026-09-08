
import React from 'react';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import {
  COLORS,
  SPACING,
  FONT_SIZES,
} from './theme';

type CustomHeaderProps = {
  title: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

const CustomHeader = ({
  title,
  leftIcon,
  rightIcon,
}: CustomHeaderProps) => {
  return (
    <View style={styles.header}>

      <View style={styles.side}>
        {leftIcon}
      </View>

      <Text style={styles.title}>
        {title}
      </Text>

      <View style={styles.side}>
        {rightIcon}
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: COLORS.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SPACING.medium,
  },

  side: {
    width: 40,
    alignItems: 'center',
  },

  title: {
    color: COLORS.white,
    fontSize: FONT_SIZES.large,
    fontWeight: 'bold',
  },
});

export default CustomHeader;
