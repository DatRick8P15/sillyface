import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Linking,
  FlatList,
  SectionList,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const DATA = [
  {
    title: "Silly Faces - Photobox",
    data: [
      "Q: What is this app for? \n\ A: With this app you will be able to snap some unique photos!", 
      "Q: Can I send those photos? \n\ A: You can send them via several Apps!", 
      "Q: Why is this special? \n\ A: Because you are only able to see photos when you send it out!"]
  },
  {
    title: "Photo",
    data: [
      "Q: Can I send multiple photos at a time? \n\ A: Unfortunately not, you have to send one photo at a time!", 
      "Q: How many photos can I take? \n\ A: Best thing is to try it!"]
  },
  {
    title: "Share",
    data: [
      "Q: Is the share asynch? \n\ A: Yes, please send one photo only as the function works like that!", 
      "Q: Which apps can I share to? \n\ A: The most common app´s to share are WhatsApp or Discord!"]
  },
  {
    title: "Camera Roll",
    data: ["Q: Can I access my recent taken Photos? \n\ A: The Camera Roll will be available in the next version"]
  },
];


const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default function Help({navigation}) {

  return (

  <SafeAreaView style={styles.container}>
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Item title={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16
  },
  item: {
    //backgroundColor: "#F23005",
    padding: 20,
    marginVertical: 8
  },
  header: {
    fontSize: 32,
    backgroundColor: "#F23005",
    textAlign: "center",
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#97A6A4',
    borderRadius: 6,
  },
  title: {
    fontSize: 24,
    textAlign: "center"
  }
});


/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
*/