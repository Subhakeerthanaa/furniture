import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';

const FurnitureDeliveryHome = () => {
  const renderFurnitureItem = (item) => (
    <TouchableOpacity style={styles.furnitureItemContainer} key={item.id}>
      <Image source={item.image} style={styles.furnitureItemImage} />
      <View style={styles.furnitureItemInfo}>
        <Text style={styles.furnitureItemName}>{item.name}</Text>
        <Text style={styles.furnitureItemCategory}>{item.category}</Text>
        <Text style={styles.furnitureItemPrice}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>furniture shop app and Delivery</Text>

      {/* First furniture item */}
      {renderFurnitureItem({
        id: '1',
        name: 'chair',
        category: 'rolling chair',
        price: '$4000',
        image: require('./image/img1.jpg'), // Provide the correct image path
      })}

      {/* Second furniutre item */}
      {renderFurnitureItem({
        id: '2',
        name: 'rack',
        category: 'multi row rack',
        price: '$7000',
        image: require('./image/img2.jpg'), // Provide the correct image path
      })}

      {/* Add more furniture items here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  furnitureItemContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  furnitureItemImage: {
    width: 80,
    height: 80,
    marginRight: 12,
    borderRadius: 8,
  },
  furnitureItemInfo: {
    flex: 1,
  },
  furnitureItemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  furnitureItemCategory: {
    fontSize: 14,
    color: '#777',
  },
  furnitureItemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
});

export default FurnitureDeliveryHome;
