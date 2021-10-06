import React from 'react';
import { View, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
//import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';

const Button = ({ backgroundImage, mainImage, onPress }) => (
  <View style={styles.container}>
    <Image
       style={styles.bgImage}
       source={backgroundImage}
       resizeMode={'contain'}
    />
    <TouchableWithoutFeedback 
      onPress={onPress}
      style={styles.button}
    >
     <Image
        style={styles.image}
        source={mainImage}
        resizeMode={'contain'}
     />
    </TouchableWithoutFeedback>
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: 250,
    width: 250,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
  },
  button: {
    height: 200,
    width: 200
  },
  bgImage: {
    alignSelf: 'center',
    justifyContent: 'center',
    position: 'absolute',
    height: 250,
    width: 250,
  },
  image: {
   alignSelf: 'center',
    justifyContent: 'center',
    position: 'absolute',
    height: 200,
    width: 200
  },
});

export default Button;