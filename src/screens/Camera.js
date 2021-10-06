import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import { shareAsync } from 'expo-sharing';

export default function CameraScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [pictures, setPictures] = useState([]);
  const [shared, setShared] = useState('');
  const cameraRef = useRef();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handlePicture = async () => {
      const picture = await cameraRef.current.takePictureAsync();
      setPictures([...pictures, picture]);
  };

  const sharePicture = async () => {
    const options = {
        mimeType: 'text/x-vcard',
        dialogTitle: 'Share vcard',
        UTI: 'text/vcard',
      };

      try {
          for (let i = 0; i < pictures.length; i++) {
            await shareAsync(pictures[i].uri, options);
          }
          setPictures([]);
      } catch (error) {
          console.log('error', error);
      }

  }

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
      <Camera ref={cameraRef} style={styles.camera} type={type} >
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
              autoFocus: true;
            }}>
            <Text style={styles.text}> Flip </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={handlePicture}>
            <Text style={styles.text}> Take a picture </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={sharePicture}>
            <Text style={styles.text}> Share a picture </Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',   
    },
    text: { 
      fontSize: 20,
    },
    camera: {
        flex: 1,
        width: "100%",
    },
    buttonContainer: {
        position: 'absolute',
        width: "100%",
        padding: 20,
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        //flex: 0.1,
        width: 120,
        height: 40,
        bottom: 0,
        borderRadius: 50,
        backgroundColor: 'blue',
        flexDirection: 'row',
        alignSelf: 'flex-end',
        alignItems: 'center',
    }
});
