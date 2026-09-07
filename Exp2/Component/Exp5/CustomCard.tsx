
import React from 'react';
import {
  View,
  StyleSheet,
  ViewStyle,
  StyleProp,
} from 'react-native';

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
    padding: 20,
    borderRadius: 15,
    backgroundColor: 'white',
    elevation: 10,
    marginBottom: 15,
  },
});

export default CustomCard;
