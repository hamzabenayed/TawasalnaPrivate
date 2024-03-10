import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import {  SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Colors from '../Utils/Colors';
import {
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";

const Login = () => {
      const navigation = useNavigation();
      const handleLogin = () => {
  };
const handleSignUp = () => {
    navigation.navigate('SIGNUP');
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
    <SafeAreaView style={{ backgroundColor: Colors.WHITE, height: 760 }}>
      <View style={{ marginTop: "30%" }}>
        <Text style={{ marginLeft: "4%" }}>Email</Text>

        <View
          style={{
            borderColor: "gray",
            borderWidth: 1,
            borderRadius: 8,
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
            borderRadius: 8,
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
            borderRadius: 8,
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
        <TouchableOpacity style={{ marginLeft: "2%" }} onPress={toggleCheckbox}>
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
            marginLeft: "5%",
          }}
        />
        <Text style={{ marginLeft: "2%" }}>Or</Text>
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
      <View style={{ flexDirection: "row" }}>
        <MaterialCommunityIcons
          name="gmail"
          size={60}
          color={Colors.PURPLE}
          style={{ marginLeft: "24%" }}
        />
        <FontAwesome5
          name="facebook"
          size={50}
          color="#3b5998"
          style={{ marginLeft: "17%" }}
        />
      </View>
      <View
        style={{ flexDirection: "row", marginLeft: "19%", marginTop: "8%" }}
      >
        <Text>Not a member yet?</Text>
        <TouchableOpacity onPress={handleSignUp}>
          <Text style={{ color: Colors.PURPLE, marginLeft: "5%" }}>
            Register here
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: "70%", marginLeft: "17%" }}>
        <Text style={{ color: Colors.GRAY }}>
          {" "}
          2024 - Tawasalna - All Rights Reserved.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Login;