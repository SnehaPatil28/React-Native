import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

type StudentCardProps = {
  name: string;
  prn: string;
  department: string;
};

function StudentCard({ name, prn, department }: StudentCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>STUDENT CARD</Text>

      <Image
        source={require('../assets/Sneha_Photo.jpg')}
        style={styles.image}
      />

      <Text style={styles.info}>Name: {name}</Text>

      <Text style={styles.info}>Roll No: {prn}</Text>

      <Text style={styles.info}>Department: {department}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 320,
    padding: 20,
    borderRadius: 15,
    backgroundColor: 'white',
    elevation: 10,
    alignItems: 'center',
  },

  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },

  info: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default StudentCard;
