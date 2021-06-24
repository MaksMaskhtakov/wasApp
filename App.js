import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import { NavBar } from './rrr/NavBar';
import { VPC } from './rrr/butt';

export default function App() {

  return (
    <View style={styles.container}>
      <NavBar title='Вывод простых чисел' />
      <View style={styles.rrr}>
        <VPC />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aaa'
  },
  rrr: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
