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
   Image,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import { NavigationContainer,useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import { useFonts } from '@expo-google-fonts/inter';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import LinearGradient from 'expo-linear-gradient';




export default function Home({navigation}) {
    
    const [name, setName] = useState('Patrick');
    return (
    <SafeAreaView style={styles.container}>
    <View style={styles.body}>
      <Image
        source={require('../images/silly.png')}
        style={{ width: 200, height: 200 }}
        PlaceholderContent={<ActivityIndicator />}
      />
      <View style={styles.greeting}>
        <Text style={styles.text}>Hello {name}!</Text>
      </View>
      <View style={styles.snapbutton}>
        <Button
          touchSoundDisabled={true}
          title={'Click'}
          onPress={() => { navigation.navigate('Camera') }}
        />
      </View>
      <View>
          <Text style={styles.text}>Snap your silly Face!</Text>
      </View>
    </View>
    <View style={styles.helpbutton}>
        <Feather
          name="help-circle"
          touchSoundDisabled={true}
          size={24}
          color="black"
          onPress={() => { navigation.navigate('Help')}}
        />
        <AntDesign
          name="exclamation"
          touchSoundDisabled={true}
          size={24}
          color="black"
          onPress={() => { navigation.navigate('About')}}
        />
      </View>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: { 
    flex: 1, 
    flexDirection: 'column', 
    backgroundColor: 'white',
    alignItems: 'stretch', 
    justifyContent: 'flex-start', 
    padding: 10,
  },
    body: { 
    flex: 2,
    flexDirection: 'column',
    maxHeight: '90%',
    backgroundColor: '#97A6A4',
    alignItems: 'center', 
    justifyContent: 'flex-start',
    margin:0,
    elevation: 10,
  },
  text: {
    color: 'black',
    fontSize: 24,
    margin: 10,
    textAlign: 'center',
  },
  greeting: {
    color: 'black',
    fontSize: 24,
    margin: 10,
    textAlign: 'center',
    textShadowColor: '#F23005',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  helpbutton: {
    width: 150,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  snapbutton: {
    
    width: 60,
    height: 60,
    borderRadius: 90,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
})