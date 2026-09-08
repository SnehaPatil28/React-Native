
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

import {
  COLORS,
  SPACING,
  FONT_SIZES,
  RADIUS,
} from './theme';

type CustomButtonProps = {
  title: string;
  onPress: () => void;
  color?: string;
};

const CustomButton = ({
  title,
  onPress,
  color = COLORS.primary,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {backgroundColor: color},
      ]}
      onPress={onPress}
    >
      <Text style={styles.text}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 140,
    height: 50,
    borderRadius: RADIUS.medium,
    marginVertical: SPACING.small,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: COLORS.white,
    fontSize: FONT_SIZES.medium,
    fontWeight: 'bold',
  },
});

export default CustomButton;