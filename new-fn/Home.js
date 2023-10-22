import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ImageBackground } from 'react-native';


const HomePage = ({ navigation }) => {
  const navigateToModel = () => {
    navigation.navigate('Model');
  };

  const categories = [
    {
      id: 1,
      name: 'chair',
      popularDemo: 'rolling chairs',
      image: require('./image/img1.jpg'),
    },
    {
      id: 2,
      name: 'rack',
      popularDemo: 'multi row racks',
      image: require('./image/img2.jpg'),
    },
    {
      id: 3,
      name: 'doors',
      popularDemo: 'multi door',
      image: require('./image/img4.jpg'),
    },
    
  ];

  return (
    <ImageBackground
    source={require('./image/bgs1.jpg')}
    style={styles.backgroundImage}
  ><Text style={styles.title}> Have a great and happy shopping..!</Text>

    <ScrollView contentContainerStyle={styles.container}>
      

      <Button title="View Model" onPress={navigateToModel} />

      <Text style={styles.categoriesTitle}>Categories</Text>
      <View style={styles.categoryContainer}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={styles.categoryItem}
            onPress={() => {
              // You can add navigation logic here to navigate to a category-specific screen
            }}
          >
            <Image source={category.image} style={styles.categoryImage} />
            <Text style={styles.categoryName}>{category.name}</Text>
            <Text style={styles.popularDish}>Popular Demo: {category.popularDemo}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'contain' for different scaling options
    width: '100%', // or a specific width if needed
    height: '100%', // or a specific height if needed
    position: 'absolute',
    top: 0,
    left: 0,
  },
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  categoriesTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  categoryItem: {
    width: '30%',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 8,
    alignItems: 'center',
  },
  categoryImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  categoryName: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
  popularDemo: {
    fontSize: 14,
  },
});

export default HomePage;
