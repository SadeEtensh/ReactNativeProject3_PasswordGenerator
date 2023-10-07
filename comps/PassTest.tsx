import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function PassTest() {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Password Generator</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  headingText: {
    // flex: 1,
    fontSize: 24,
    fontWeight: 'bold',
    margin: 20,
    paddingVertical: 50,
  },
});
