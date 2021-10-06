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
      "Q: What is this app for? A: With this app you will be able to snap some unique Photos!", 
      "Q: Can I send those Photos A: You can send them via Instagram DM", 
      "Q: Why is this special? A: Because you wont be able to see the Photo before you send it out!"]
  },
  {
    title: "Photo",
    data: [
      "Q: A: ", 
      "Q: A: ", 
      "Q: A: "]
  },
  {
    title: "Share",
    data: [
      "Q: A: ", 
      "Q: A: ", 
      "Q: A: "]
  },
  {
    title: "Camera Roll",
    data: ["Q: Can I access my recent taken Photos? A: The Camera Roll will be available in the next version"]
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
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 24
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