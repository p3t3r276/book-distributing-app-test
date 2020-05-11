import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export const BookList = () => (
  <View style={styles.container}>
    <Text>Book List</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
