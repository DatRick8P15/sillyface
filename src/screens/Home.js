import React, {useState} from "react"

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Linking,
  ActivityIndicator,
   Button, 
   Image
} from 'react-native';
import { NavigationContainer,useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LinearGradient from 'expo-linear-gradient';




export default function Home({navigation}) {
    
    const [name, setName] = useState('Patrick');
    return (
    <SafeAreaView style={styles.container}>
    <View style={styles.body}>
      <Image
        source={require('../images/1.png')}
        style={{ width: 200, height: 200 }}
        PlaceholderContent={<ActivityIndicator />}
      />

      <View style={styles.greeting}>
        <Text style={styles.text}>Welcome to Silly Faces</Text>
        <Text style={styles.text}>Hello {name}!</Text>
      </View>
    
      <View style={styles.helpbutton}>
        <Button
          ViewComponent={LinearGradient}
          linearGradientProps={{
            colors:['red', 'grey'],
            start:{x:0,y:0.5},
            end:{x:1,y:0.5},
          }}
          touchSoundDisabled={true}
          title={'Go to Help'}
          onPress={() => { navigation.navigate('Help')}}
        />
      </View>

      <View style={styles.snapbutton}>
        <Button
          ViewComponent={LinearGradient}
          linearGradientProps={{
            colors:['blue', 'grey'],
            start:{x:0,y:0.5},
            end:{x:1,y:0.5},
          }}
          touchSoundDisabled={true}
          title={'Snap your silly Face!'}
          onPress={() => { navigation.navigate('Camera') }}
        />
      </View>
    </View>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: { 
    flex: 1, 
    backgroundColor: 'white',
    alignItems: 'stretch', 
    justifyContent: 'flex-start', 
     
    
    borderColor: '#777',
    borderRadius: 20,
    padding: 10,
  },
    body: { 
    flex: 2,
    flexDirection: 'column',
    maxHeight: '90%',
    backgroundColor: 'blue',
    alignItems: 'center', 
    justifyContent: 'flex-start',
    margin:0,
    elevation: 10,
  },
  text: {
    color: 'black',
    fontFamily: 'Helvetica',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10,
    textAlign: 'center',
    textShadowColor: 'grey',
  },
  helpbutton: {
    width: 150,
    height: 60,
    borderWidth: 10,
    borderColor: 'yellow',
    borderRadius: 20,
  },
  snapbutton: {
    width: 200,
    height: 60,
    borderWidth: 10,
    borderColor: 'yellow',
    borderRadius: 20,
  },
})