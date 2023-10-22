import React from 'react';
import { StyleSheet, ImageBackground, View } from 'react-native';

const BackgroundImage = ({ children }) => {
  return (
    <ImageBackground
      source={require('../image/img1.jpg')} // Put your background image in the project directory
      style={styles.background}
    >
      <View style={styles.overlay}>{children}</View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width:400
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)', // Adjust the opacity as needed
  },
});

export default BackgroundImage;
