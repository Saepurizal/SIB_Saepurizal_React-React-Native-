import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import React from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      <Image 
      style={styles.img}
      source = {{
        uri : 'https://pluspng.com/png-180028.html'
      }}
      />
      <Text style={styles.txt}>
        Mari kita belajar React Native
      </Text>
      <Text style={styles.txt}>
        RCTN-KS05-011 Saepurizal
      </Text>
      <Button title="Click Me" color="blue" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    fontSize: 30
  },
  img: {
    height : 100,
    width : 100
  }
});
