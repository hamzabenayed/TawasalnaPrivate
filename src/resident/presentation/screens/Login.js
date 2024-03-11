import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ToastAndroid,
} from "react-native";
import Colors from "../Utils/Colors";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import axios from "axios";
import { base_Url } from "../../../BaseUrl";

const Login = () => {
  const navigation = useNavigation();
  const [isChecked, setIsChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  ///////////////////////////////////////////////////////////
  const handleSignUp = () => {
    navigation.navigate("SIGNUP");
  };
  //////////////////////////////////////////////////////////
  const handleForgotPassword = () => {
    navigation.navigate("Forgot Password");
  };
  /////////////////////////////////////////////////////////
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  /////////////////////////////////////////////////////////
  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };
  /////////////////////////////////////////////////////////
  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };
  ////////////////////////////////////////////////////////
  const handleLogin = async () => {
     if (!email.trim()) {
       ToastAndroid.show("email is empty!", ToastAndroid.SHORT);
       return;
     } else if (!isValidEmail(email)) {
       ToastAndroid.show("Invalid email address!", ToastAndroid.SHORT);
       return;
     } else if (!password.trim()){
       ToastAndroid.show("password is empty!", ToastAndroid.SHORT);
       return;
     }
    try {
      const response = await axios.post(
        `${base_Url}/tawasalna-user/auth/signin`,
        {
          email,
          password,
        }
      );
      console.log("Sign-In successful:", response.data);
      navigation.navigate("TABBAR");
    } catch (error) {
      console.error("Error SignIn:", error);
    }
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
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <Text style={{ marginLeft: "4%" }}>Password</Text>
        <View
          style={{
            flexDirection: "row",
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
            secureTextEntry={!showPassword}
            autoCapitalize="none"
            autoCompleteType="password"
            autoCorrect={false}
            value={password}
            onChangeText={setPassword}
            style={{ flex: 1 }}
          />
          <TouchableOpacity onPress={toggleShowPassword}>
            <MaterialCommunityIcons
              name={showPassword ? "eye-off" : "eye"}
              size={24}
              color="black"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <TouchableOpacity
          onPress={handleLogin}
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
        <TouchableOpacity onPress={handleForgotPassword}>
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
        style={{ flexDirection: "row", marginLeft: "21%", marginTop: "8%" }}
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
