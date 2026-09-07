
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

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
    backgroundColor: '#2196F3',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },

  side: {
    width: 40,
    alignItems: 'center',
  },

  title: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default CustomHeader;
