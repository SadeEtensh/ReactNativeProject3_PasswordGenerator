import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PassTest from './comps/PassTest';

//Form Validation
import * as Yup from 'yup';

const passwordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, 'should be min of 4 charcter')
    .max(12, 'should be max of 12 charcter')
    .required('Length is required'),
});

export default function App() {
  return (
    <View>
      {/* <Text>Password Generator</Text> */}
      <PassTest />
    </View>
  );
}

const styles = StyleSheet.create({});
