import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect, useCallback} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppLoading from 'expo-app-loading';
import { SplashScreen } from 'expo-splash-screen';
//import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';


import HomeScreen from './src/screens/Home';
import HelpScreen from './src/screens/Help';
import CameraScreen from './src/screens/Camera';
import AboutScreen from './src/screens/About';


const Stack = createNativeStackNavigator();


export default function App() {
  

  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Photo Box' }} />
        <Stack.Screen name="Help" component={HelpScreen} />
        <Stack.Screen name="Camera" component={CameraScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
