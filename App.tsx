import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
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
  const [password, setPassword] = useState('');
  const [isPassGenerated, setIsPassGenerated] = useState(false);

  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setupperCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const generatePassword = (passwordLength: number) => {};
  const createPassword = (characters: string, passwordLength: number) => {
    let result = '';
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characters.length);
      result += characters.charAt(characterIndex);
    }
    return result;
  };
  const resetPasswordState = () => {};

  return (
    <View>
      {/* <Text>Password Generator</Text> */}
      <PassTest />
    </View>
  );
}

const styles = StyleSheet.create({});
