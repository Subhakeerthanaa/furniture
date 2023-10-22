
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

const ModelPage = ({ navigation }) => {
  const [modelItems, setModelItems] = useState([
    { id: '1', name: 'chair', price: 5000, image: require('./image/img1.jpg') },
    { id: '2', name: 'rack', price: 7000, image: require('./image/img2.jpg') },
    { id: '3', name: 'cup board', price: 6000, image: require('./image/img3.jpg') },
    { id: '4', name: 'door', price: 4000, image: require('./image/img4.jpg') },
    // Add more model items with images
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Model</Text>
      <ScrollView>
        {modelItems.map((item) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => navigation.navigate('ItemDetails', { item })}
          >
            <View style={styles.modelItem}>
              <Image source={item.image} style={styles.modelItemImage} />
              <Text style={styles.modelItemName}>{item.name}</Text>
              <Text style={styles.modelItemPrice}>${item.price.toFixed(2)}</Text>
              <TouchableOpacity
                style={styles.addToCartButton}
                onPress={() => addToCart(item)}
              >
                <Text style={styles.addToCartButtonText}>Add to Cart</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <TouchableOpacity
        style={styles.viewCartButton}
        onPress={() => navigation.navigate('cart', { cart, setCart })}
      >
        <Text style={styles.viewCartButtonText}>View Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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
  modelItem: {
    backgroundColor: 'white',
    marginBottom: 16,
    borderRadius: 8,
    elevation: 2,
  },
  modelItemImage: {
    width: '100%', // Use 100% to fill the container horizontally
    height: 200, // Adjust the height as needed
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  modelItemName: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 16,
  },
  modelItemPrice: {
    fontSize: 16,
    margin: 16,
  },
  addToCartButton: {
    backgroundColor: 'blue',
    padding: 8,
    borderRadius: 4,
    margin: 16,
  },
  addToCartButtonText: {
    color: 'white',
  },
  viewCartButton: {
    backgroundColor: 'green',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  viewCartButtonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default ModelPage;

