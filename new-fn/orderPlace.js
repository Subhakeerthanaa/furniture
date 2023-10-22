import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const OrderPlacementPage = ({ navigation }) => {
  const [estimatedDeliveryTime, setEstimatedDeliveryTime] = useState('');

  useEffect(() => {
    // Simulate a delay to get estimated delivery time.
    setTimeout(() => {
      setEstimatedDeliveryTime('3-4 days');
    }, 2000);
  }, []);

  const navigateToOrderTrackPage = () => {
    navigation.navigate('orderTrack', { deliveryTime: estimatedDeliveryTime });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order Confirmation</Text>
      <Text>Your order has been placed.</Text>
      <Text>Estimated delivery time: {estimatedDeliveryTime}</Text>
      <Button title="Track Order" onPress={navigateToOrderTrackPage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default OrderPlacementPage;
