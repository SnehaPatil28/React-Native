import React, {
  useContext,
  useEffect,
  useState,
} from 'react';

import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import {
  CartContext,
  Product,
} from './CartContext';

const CartScreen = () => {

  const context = useContext(CartContext);

  if (!context) {
    throw new Error('CartContext must be used inside CartProvider');
  }

  const { cartItems, removeItem } = context;

  const [total, setTotal] = useState(0);

  useEffect(() => {

    const calculatedTotal = cartItems.reduce(
      (sum, item) => sum + item.price,
      0
    );

    setTotal(calculatedTotal);

    console.log(
      'Cart updated. Total:',
      calculatedTotal
    );

  }, [cartItems]);

  const renderCartItem = ({
    item,
  }: {
    item: Product;
  }) => (
    <View style={styles.item}>

      <View>
        <Text style={styles.name}>
          {item.name}
        </Text>

        <Text>
          ₹{item.price}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.removeButton}
        onPress={() => removeItem(item.id)}
      >
        <Text style={styles.removeText}>
          Remove
        </Text>
      </TouchableOpacity>

    </View>
  );

  return (
    <View style={styles.container}>

      <Text style={styles.heading}>
        Shopping Cart
      </Text>

      {cartItems.length === 0 ? (
        <Text style={styles.empty}>
          Your cart is empty.
        </Text>
      ) : (
        <FlatList
          data={cartItems}
          keyExtractor={(item, index) =>
            `${item.id}-${index}`
          }
          renderItem={renderCartItem}
        />
      )}

      <View style={styles.totalContainer}>
        <Text style={styles.total}>
          Total: ₹{total}
        </Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  empty: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 30,
  },

  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#eeeeee',
    borderRadius: 8,
  },

  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  removeButton: {
    backgroundColor: '#f44336',
    padding: 8,
    borderRadius: 5,
  },

  removeText: {
    color: 'white',
    fontWeight: 'bold',
  },

  totalContainer: {
    borderTopWidth: 1,
    borderTopColor: '#cccccc',
    paddingTop: 15,
    marginTop: 10,
  },

  total: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default CartScreen;