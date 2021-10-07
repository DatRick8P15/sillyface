import React, {useState} from "react"
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Button, 
  Image,
  TouchableOpacity,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';





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
          <TouchableOpacity
          touchSoundDisabled={true}
          style={{width: 130,
              borderRadius: 50,
              backgroundColor: '#049DD9',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              height: 40,}}
          title={'Click'}
          onPress={() => { navigation.navigate('Camera') }}
          >
          <Text style={{
                color: '#fff',
                fontWeight: '900',
                textAlign: 'center',
              }}>Click</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.text}>Snap your silly Face!</Text>
        </View>
        <View>
        <View style={styles.bottom}>
          <Feather
            name="help-circle"
            touchSoundDisabled={true}
            size={30}
            color="black"
            style={styles.helpbutton}
            onPress={() => { navigation.navigate('Help')}}
          />
          <AntDesign
            name="team"
            touchSoundDisabled={true}
            size={30}
            color="black"
            style={styles.aboutbutton}
            onPress={() => { navigation.navigate('About')}}
          />
          </View>
        </View>
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
    
    padding: 10,
    display: 'flex',
  },
    body: { 
    flex: 2,
    flexDirection: 'column',
    maxHeight: '90%',
    backgroundColor: '#97A6A4',
    alignItems: 'center', 
    justifyContent: 'center',
    margin:0,
    elevation: 20,
  },
  text: {
    color: 'black',
    fontSize: 32,
    margin: 10,
    textAlign: 'center',
    textShadowColor: '#F23005',
    elevation: 20,
    fontWeight: 'bold',
  },
  greeting: {
    color: 'black',
    fontSize: 24,
    margin: 10,
    textAlign: 'center',
    textShadowColor: '#F23005',
    elevation: 20,
    fontWeight: 'bold',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: 20,
  },
  helpbutton: {
    width: 150,
    height: 60,
    fontWeight: 'bold',
  },
  aboutbutton: {
    width: 150,
    height: 60,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  snapbutton: {
    width: 70,
    height: 70,
    borderRadius: 90,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 20,
    fontWeight: 'bold',
  },
})