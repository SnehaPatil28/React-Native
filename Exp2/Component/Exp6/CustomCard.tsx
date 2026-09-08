
import React from 'react';
import {
  View,
  StyleSheet,
  ViewStyle,
  StyleProp,
} from 'react-native';

import {
  COLORS,
  SPACING,
  RADIUS,
} from './theme';

type CustomCardProps = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

const CustomCard = ({
  children,
  style,
}: CustomCardProps) => {
  return (
    <View style={[styles.card, style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    padding: SPACING.large,
    backgroundColor: COLORS.card,
    borderRadius: RADIUS.large,
    elevation: 5,
    marginBottom: SPACING.large,
  },
});

export default CustomCard;
