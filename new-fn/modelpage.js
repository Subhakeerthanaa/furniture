// import React from 'react';
// import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

// const MenuPage = ({ navigation, addToCart }) => {
//   const menuItems = [
//     { id: 1, name: 'Burger', price: 5.99 },
//     { id: 2, name: 'Pizza', price: 9.99 },
//     // Add more menu items here
//   ];

//   const addToCartHandler = (item) => {
//     addToCart(item)
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Menu</Text>
//       <FlatList
//         data={menuItems}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => (
//           <View style={styles.menuItem}>
//             <Text>{item.name}</Text>
//             <Text>${item.price.toFixed(2)}</Text>
//             <Button title="Add to Cart" onPress={() => addToCartHandler(item)} />
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 16,
//   },
//   menuItem: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 16,
//   },
// });

// export default MenuPage;
