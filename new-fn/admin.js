import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';

const AdminPage = () => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');

  const handleAddProduct = () => {
    if (productName.trim() === '' || productPrice.trim() === '') {
      Alert.alert('Error', 'Please fill out all fields');
      return;
    }

    // Here you can add logic to save the product to your database
    // e.g., make an API call to a backend server

    Alert.alert('Success', 'Product added successfully');
    setProductName('');
    setProductPrice('');
  };

  return (
    <View style={{ padding: 16 }}>
      <TextInput
        placeholder="Product Name"
        value={productName}
        onChangeText={text => setProductName(text)}
        style={{ marginBottom: 10, borderWidth: 1, padding: 8 }}
      />
      <TextInput
        placeholder="Product Price"
        value={productPrice}
        onChangeText={text => setProductPrice(text)}
        keyboardType="numeric"
        style={{ marginBottom: 10, borderWidth: 1, padding: 8 }}
      />
      <Button title="Add Product" onPress={handleAddProduct} />
    </View>
  );
};

export default AdminPage;
