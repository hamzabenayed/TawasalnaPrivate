import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import {  SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Colors from '../Utils/Colors';
import { MaterialIcons } from "@expo/vector-icons";
const Login = () => {
      const navigation = useNavigation();
      const handleLogin = () => {
  };
const handleSignUp = () => {
    navigation.navigate('SignUp');
  };
const [showPassword, setShowPassword] = useState(false);

const togglePasswordVisibility = () => {
  setShowPassword(!showPassword);
};

const [isChecked, setIsChecked] = useState(false);

const toggleCheckbox = () => {
  setIsChecked(!isChecked);
};
  return (
    <SafeAreaView style={{ backgroundColor: Colors.WHITE, height: 756 }}>
      <View style={{ marginTop: "30%" }}>
        <Text style={{ marginLeft: "4%" }}>Email</Text>

        <View
          style={{
            borderColor: "gray",
            borderWidth: 1,
            borderRadius: 5,
            padding: 8,
            marginBottom: 10,
            width: 340,
            marginLeft: "4%",
          }}
        >
          <TextInput
            placeholder="You email"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCompleteType="email"
            autoCorrect={false}
          />
        </View>
        <Text style={{ marginLeft: "4%" }}>Password</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            borderColor: "gray",
            borderWidth: 1,
            borderRadius: 5,
            padding: 8,
            marginBottom: 10,
            width: 340,
            marginLeft: "4%",
          }}
        >
          <TextInput
            placeholder="*********"
            secureTextEntry
            autoCapitalize="none"
            autoCompleteType="password"
            autoCorrect={false}
          />
          <TouchableOpacity
            onPress={togglePasswordVisibility}
            style={{ marginLeft: 10 }}
          >
            <MaterialIcons
              name={showPassword ? "visibility-off" : "visibility"}
              size={24}
              color="black"
              style={{ marginLeft: 240 }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <TouchableOpacity
          style={{
            borderColor: "gray",
            borderWidth: 1,
            borderRadius: 5,
            padding: 10,
            marginBottom: 10,
            width: 340,
            marginLeft: "4%",
            alignItems: "center",
            backgroundColor: Colors.PURPLE,
          }}
        >
          <Text style={{ color: Colors.LIGHT_WHITE }}>Continue</Text>
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: "center", flexDirection: "row" }}>
        <TouchableOpacity style={{ marginLeft: "2%" }}>
          <MaterialIcons
            name={isChecked ? "check-box" : "check-box-outline-blank"}
            size={20}
            color={isChecked ? "green" : "black"}
          />
        </TouchableOpacity>
        <Text>Remember me?</Text>
        <TouchableOpacity>
          <Text style={{ color: Colors.PURPLE, marginLeft: "45%" }}>
            Forgot Password
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{ marginTop: "5%", alignItems: "center", flexDirection: "row" }}
      >
        <View
          style={{
            borderBottomColor: "grey",
            borderBottomWidth: 1,
            width: "40%",
            marginVertical: 5,
            marginLeft: "3%",
          }}
        />
        <Text style={{marginLeft:"2%"}}>Or</Text>
        <View
          style={{
            borderBottomColor: "grey",
            borderBottomWidth: 1,
            width: "40%",
            marginVertical: 5,
            marginLeft: "3%",
          }}
        />
      </View>
      <View></View>
      <View></View>
      <View></View>
    </SafeAreaView>
  );
};

export default Login;