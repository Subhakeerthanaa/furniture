import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CartPage = ({ route }) => {
  const { cart, setCart } = route.params;
  const navigation = useNavigation();

  // Function to remove an item from the cart
  const handleRemoveItem = (itemId) => {
    const updatedCart = cart.filter(item => item.id !== itemId);
    setCart(updatedCart);
  };

 
  // Calculate the total item price
  const totalItemPrice = cart.reduce((total, item) => total + item.price, 0);

  // Function to handle Buy Now button click
  const handleBuyNow = () => {
    // Navigate to the order page
    navigation.navigate('Order', { cart });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cart</Text>
      <FlatList
        data={cart}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Text style={styles.cartItemName}>{item.name}</Text>
            <Text style={styles.cartItemPrice}>${item.price.toFixed(2)}</Text>
            <TouchableOpacity
              style={styles.removeItemButton}
              onPress={() => handleRemoveItem(item.id)}
            >
              <Text style={styles.removeItemButtonText}>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <View style={styles.totalItemsContainer}>
        <Text style={styles.totalItemsText}>
          Total Items in Cart: {cart.length}
        </Text>
        <Text style={styles.totalPriceText}>
          Total Price: ${totalItemPrice.toFixed(2)}
        </Text>
        <TouchableOpacity
          style={styles.buyNowButton}
          onPress={handleBuyNow}
        >
          <Text style={styles.buyNowButtonText}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // (your styles)
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    paddingHorizontal: 8,
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 8,
    elevation: 2,
  },
  cartItemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cartItemPrice: {
    fontSize: 16,
  },
  removeItemButton: {
    backgroundColor: 'red',
    padding: 8,
    borderRadius: 4,
  },
  removeItemButtonText: {
    color: 'white',
  },
  totalItemsContainer: {
    alignItems: 'center',
    marginTop: 16,
  },
  totalItemsText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalPriceText: {
    fontSize: 18,
  },
  buyNowButton: {
    backgroundColor: 'green',
    padding: 8,
    borderRadius: 4,
    marginTop: 16,
  },
  buyNowButtonText: {
    color: 'white',
    textAlign: 'center',
  },

});

export default CartPage;
