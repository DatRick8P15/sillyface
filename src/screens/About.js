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
      "Q: What is this idea behind it? \n\ A: I was just tired of all the filter shitty photo apps!", 
      "Q: When can we expect new features? \n\ A: Within the 2021!", 
      "Q: Why is this special? \n\ A: Everybody is special!"]
  },
  {
    title: "Personal data",
    data: [
      "Q: Can we offer you a job? \n\ A: Sure! It´s 100k€ as per year", 
      "Q: Do you take photos on a regular basis? \n\ A: Not really...but when I do, it´s mostly from my dog!"]
  },
  {
    title: "Code",
    data: [
      "Q: What code base did you used? \n\ A: Sheesh! What codebase I haven´t used is easier to ask. Mostly it was Expo and React Native", 
      "Q: Can I steal your code? \n\ A: Feel free to take whatever you need my friend!"]
  },
  {
    title: "Future",
    data: ["Q: What can we expect in the future? \n\ A: A lot!"]
  },
];


const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default function About({navigation}) {

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
    backgroundColor: "#F29F05",
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