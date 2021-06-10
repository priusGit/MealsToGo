import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <>
    <SafeAreaView style={styles.safV}>
      <View style={styles.container}>
      <Text>Out native canvas</Text>
    </View>
    <View style={styles.container2}>
      <Text>txt</Text>
    </View>
    </SafeAreaView>
    <StatusBar/>
    </>
  );
}

const styles = StyleSheet.create({
  safV:{
    flex:1
  },
  container:{
    padding:16,
    alignItems:"center"
  },
  container2:{
    flex:1,
    textAlign:"left",
    padding:16,
    backgroundColor:"red"
  }
  
});
