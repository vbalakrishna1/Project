import React from 'react';
import { StyleSheet, View } from 'react-native';
import Products from "./App/Products";
export default function App() {
  return (
    <View style={styles.container}>
      <Products />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
