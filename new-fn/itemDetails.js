// ItemDetailsPage.js
import React from 'react';
import { View, Text, Image, StyleSheet,Button } from 'react-native';

const ItemDetailsPage = ({ route }) => {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.itemImage} />
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
      <Button
              title="Buy now"
              onPress={() => navigation.navigate('cart')}
            />
      {/* Add 'Add to Cart' button */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
  },
  itemImage: {
    width: 200,
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  itemName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  itemPrice: {
    fontSize: 20,
  },
});

export default ItemDetailsPage;
