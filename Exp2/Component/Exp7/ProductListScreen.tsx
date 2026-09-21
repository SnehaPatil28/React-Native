import React, { useContext, useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

import {
  CartContext,
  Product,
} from './CartContext';

const ProductListScreen = ({ navigation }: any) => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('CartContext must be used inside CartProvider');
  }

  const { addItem, cartItems } = context;

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      const productData: Product[] = [
        {
          id: 1,
          name: 'Laptop',
          price: 50000,
        },
        {
          id: 2,
          name: 'Mobile Phone',
          price: 25000,
        },
        {
          id: 3,
          name: 'Headphones',
          price: 2000,
        },
        {
          id: 4,
          name: 'Keyboard',
          price: 1500,
        },
      ];

      setProducts(productData);
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const renderProduct = ({ item }: { item: Product }) => (
    <View style={styles.product}>
      <Text style={styles.productName}>
        {item.name}
      </Text>

      <Text style={styles.price}>
        ₹{item.price}
      </Text>

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => addItem(item)}
      >
        <Text style={styles.buttonText}>
          Add to Cart
        </Text>
      </TouchableOpacity>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />

        <Text style={styles.loadingText}>
          Loading products...
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>

      <Text style={styles.heading}>
        Product List
      </Text>

      <Text style={styles.cartCount}>
        Items in Cart: {cartItems.length}
      </Text>

      <FlatList
        data={products}
        keyExtractor={item => item.id.toString()}
        renderItem={renderProduct}
      />

      <TouchableOpacity
        style={styles.cartButton}
        onPress={() => navigation.navigate('Cart')}
      >
        <Text style={styles.buttonText}>
          View Cart ({cartItems.length})
        </Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  loadingText: {
    marginTop: 10,
    fontSize: 16,
  },

  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  cartCount: {
    fontSize: 16,
    marginBottom: 15,
  },

  product: {
    padding: 15,
    marginBottom: 12,
    backgroundColor: '#eeeeee',
    borderRadius: 8,
  },

  productName: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  price: {
    fontSize: 17,
    marginVertical: 8,
  },

  addButton: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 6,
    alignItems: 'center',
  },

  cartButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ProductListScreen;