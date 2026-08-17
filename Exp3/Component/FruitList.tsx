import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';

function FruitList() {

  const fruits = [
    'Apple',
    'Banana',
    'Mango',
    'Orange',
    'Grapes',
    'Watermelon',
    'Pineapple',
    'Papaya',
  ];

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Fruit List
      </Text>

      <FlatList
        data={fruits}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.fruit}>
              {item}
            </Text>
          </View>
        )}
        keyExtractor={(item) => item}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  item: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: 'lightyellow',
    borderRadius: 10,
  },

  fruit: {
    fontSize: 20,
  },
});

export default FruitList;