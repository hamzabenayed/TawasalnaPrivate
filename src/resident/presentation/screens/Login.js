import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Images from '../Utils/Images';
const Login = () => {
      const navigation = useNavigation();
      const handleLogin = () => {
  };
const handleSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View>
      <Image
        resizeMode="cover"
        source={Images.LOGOS.TAWASALNA}
      />
      <TextInput
        placeholder="email"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCompleteType="email"
        autoCorrect={false}
      />
      <TextInput
        placeholder="password"
        secureTextEntry
        autoCapitalize="none"
        autoCompleteType="password"
        autoCorrect={false}
      />
      <TouchableOpacity onPress={handleLogin}>
        <Text>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSignUp}>
        <Text>SignUp</Text>
      </TouchableOpacity>
      <Text>---------------------or--------------------</Text>
      <Text>Social Media Login</Text>
    
    </View>
  );
};

export default Login;