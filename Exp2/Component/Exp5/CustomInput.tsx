
import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';

type CustomInputProps = {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  error?: string;
};

const CustomInput = ({
  label,
  value,
  onChangeText,
  placeholder,
  error,
}: CustomInputProps) => {
  return (
    <View style={styles.container}>

      <Text style={styles.label}>
        {label}
      </Text>

      <TextInput
        style={[
          styles.input,
          error ? styles.errorInput : null,
        ]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
      />

      {error ? (
        <Text style={styles.errorText}>
          {error}
        </Text>
      ) : null}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },

  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6,
  },

  input: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
  },

  errorInput: {
    borderColor: 'red',
  },

  errorText: {
    color: 'red',
    fontSize: 13,
    marginTop: 4,
  },
});

export default CustomInput;
