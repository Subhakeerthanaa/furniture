import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import the useNavigation hook
import { ImageBackground } from 'react-native';

const LoginScreen = () => {
  const navigation = useNavigation(); // Use the useNavigation hook to get the navigation object

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    navigation.navigate('Home'); // Now, navigation is defined and you can navigate to the "Home" screen.
    
    if (email === 'user@example.com' && password === 'password123') {
      // Successful login; you can implement navigation logic here
      Alert.alert('Success', 'Login successful');
    } else {
      Alert.alert('Error', 'Invalid email or password. Please try again.');
    }
  };

  return (
    <ImageBackground
    source={require('./image/bgs1.jpg')}
    style={styles.backgroundImage}
  >
    <View style={styles.container}>
      <Text style={styles.title}>Furniture shop</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: 300,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
  },
});

export default LoginScreen;
