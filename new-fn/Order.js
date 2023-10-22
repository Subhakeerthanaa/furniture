import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const OrderPage = ({ route, navigation }) => {
  const { cart } = route.params;
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneno, setPhoneno] = useState('');

  const handlePlaceOrder = () => {
    // You can implement the logic to place the order here
    // For simplicity, this example just shows an alert
    
    alert(`Order placed by ${name} for delivery at ${address}.`);
    navigation.navigate('Payment');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order Details</Text>
      <Text style={styles.subtitle}>Contact Information</Text>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Address"
        value={address}
        onChangeText={(text) => setAddress(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Phone no"
        value={phoneno}
        onChangeText={(text) => setPhoneno(text)}
        style={styles.input}
      />
      <Button title="Place Order" onPress={handlePlaceOrder} />
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
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});

export default OrderPage;
