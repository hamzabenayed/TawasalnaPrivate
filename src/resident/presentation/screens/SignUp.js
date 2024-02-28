import React, { useState } from 'react';
import { Container, Input, Button, ButtonText } from '../src/resident/presentation/components/styles';
import { useNavigation } from '@react-navigation/native';
import { Text } from 'react-native'; 

const SignUp = () => {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSignUp = () => {
    if (!firstName) {
      setFirstNameError('Please enter your first name');
      return;
    }

    if (!lastName) {
      setLastNameError('Please enter your last name');
      return;
    }

    if (!phoneNumber) {
      setPhoneNumberError('Please enter your phone number');
      return;
    }

    if (!email) {
      setEmailError('Please enter your email');
      return;
    }

    if (!password) {
      setPasswordError('Please enter your password');
      return;
    }

    navigation.navigate('Login');
  };

  return (
    <Container>
      <Input
        placeholder="FirstName"
        autoCapitalize="none"
        autoCompleteType="name"
        autoCorrect={false}
        onChangeText={(text) => {
          setFirstName(text);
          setFirstNameError('');
        }}
      />
      {firstNameError ? <Text style={{ color: 'red' }}>{firstNameError}</Text> : null}
      <Input
        placeholder="LastName"
        autoCapitalize="none"
        autoCompleteType="name"
        autoCorrect={false}
        onChangeText={(text) => {
          setLastName(text);
          setLastNameError('');
        }}
      />
      {lastNameError ? <Text style={{ color: 'red' }}>{lastNameError}</Text> : null}
      <Input
        placeholder="Phone Number"
        keyboardType="phone-pad"
        autoCompleteType="tel"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(text) => {
          setPhoneNumber(text);
          setPhoneNumberError('');
        }}
      />
      {phoneNumberError ? <Text style={{ color: 'red' }}>{phoneNumberError}</Text> : null}
      <Input
        placeholder=" E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCompleteType="email"
        autoCorrect={false}
        onChangeText={(text) => {
          setEmail(text);
          setEmailError('');
        }}
      />
      {emailError ? <Text style={{ color: 'red' }}>{emailError}</Text> : null}
      <Input
        placeholder="Password"
        secureTextEntry
        autoCapitalize="none"
        autoCompleteType="password"
        autoCorrect={false}
        onChangeText={(text) => {
          setPassword(text);
          setPasswordError('');
        }}
      />
      {passwordError ? <Text style={{ color: 'red' }}>{passwordError}</Text> : null}
      <Button onPress={handleSignUp}>
        <ButtonText>SignUp</ButtonText>
      </Button>
    </Container>
  );
};

export default SignUp;
