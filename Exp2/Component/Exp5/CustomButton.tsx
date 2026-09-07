
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

type CustomButtonProps = {
  title: string;
  onPress: () => void;
  color?: string;
};

const CustomButton = ({
  title,
  onPress,
  color = '#2196F3',
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: color}]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 120,
    height: 50,
    borderRadius: 10,
    margin: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default CustomButton;
