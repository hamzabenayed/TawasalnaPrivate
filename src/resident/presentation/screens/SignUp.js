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
import { Toast } from "react-native-toast-message";

const SignUp = () => {
  const navigation = useNavigation();
  const [isChecked, setIsChecked] = useState(false);
  const [role, setRole] = useState("65d6717f31baa16064d291dc");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [id, setId] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  //////////////////////////////////////////////////////////////////
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  //////////////////////////////////////////////////////////////////
  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };
  const navigateToLogin = () => {
    navigation.navigate("LOGIN");
  };
  /////////////////////////////////////////////////////////////////
  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };
  //////////////////////////////////////////////////////////////////
  const isValidPassword = (password) => {
    const errors = {
      minLength: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      symbol: /[!@#$%^&*(),.?":{}|<>]/.test(password),
      number: /\d/.test(password),
    };

    const isValid = Object.values(errors).every((valid) => valid);

    return { isValid, errors };
  };
  /////////////////////////////////////////////////////////////////////
  const handleSignUp = async () => {
      const passwordValidation = isValidPassword(password);

    if (!email.trim()){
         ToastAndroid.show("email is empty!", ToastAndroid.SHORT);
      return;
    }
      else if (!isValidEmail(email)){
        ToastAndroid.show("Invalid email address!", ToastAndroid.SHORT);
      return;
      }

     else if ( !address.trim() ){
         ToastAndroid.show("address is empty!", ToastAndroid.SHORT);
      return;

    } else if ( !password.trim()) {
         ToastAndroid.show("password is empty!", ToastAndroid.SHORT);

      return;
    }  
      else if (!passwordValidation.isValid) {
        let errorMessage = "";

        if (!passwordValidation.errors.minLength) {
          errorMessage += "Password must be at least 8 characters long.\n";
        }
        if (!passwordValidation.errors.uppercase) {
          errorMessage +=
            "Password must contain at least one uppercase letter.\n";
        }
        if (!passwordValidation.errors.lowercase) {
          errorMessage +=
            "Password must contain at least one lowercase letter.\n";
        }
        if (!passwordValidation.errors.symbol) {
          errorMessage += "Password must contain at least one symbol.\n";
        }
        if (!passwordValidation.errors.number) {
          errorMessage += "Password must contain at least one number.\n";
        }

        ToastAndroid.show(errorMessage, ToastAndroid.LONG);
        return;
      } else if (password !== confirmPassword) {
        ToastAndroid.show("Passwords do not match!", ToastAndroid.SHORT);
        return;
      }
      else if (!isChecked) {
        ToastAndroid.show(
          "Please accept the Terms of Services and Privacy Policy!",
          ToastAndroid.SHORT
        );
        return;
      }

    try {
      const response = await axios.post(
        `${base_Url}/tawasalna-user/auth/signup`,
        {
          email,
          password,
          role,
          address,
        }
      );
      console.log("Sign-up successful:", response.data);
      navigation.navigate("LOGIN");
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  return (
    <SafeAreaView style={{ backgroundColor: Colors.WHITE, height: 760 }}>
      <View style={{ marginTop: "40%" }}>
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
            placeholder="Enter your email address..."
            keyboardType="email-address"
            autoCapitalize="none"
            autoCompleteType="email"
            autoCorrect={false}
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <Text style={{ marginLeft: "4%" }}>Address</Text>
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
            placeholder="Enter your address..."
            autoCapitalize="none"
            autoCorrect={false}
            value={address}
            onChangeText={setAddress}
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
        <Text style={{ marginLeft: "4%" }}>Confirm your password</Text>
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
            secureTextEntry={!showPassword}
            autoCapitalize="none"
            autoCompleteType="password"
            autoCorrect={false}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
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
        <Text style={{ marginLeft: "4%" }}>Your ID(Optional)</Text>

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
            placeholder="Enter your ID number..."
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>
      </View>
      <View
        style={{ alignItems: "center", flexDirection: "row", marginLeft: "2%" }}
      >
        <TouchableOpacity style={{ marginLeft: "2%" }} onPress={toggleCheckbox}>
          <MaterialIcons
            name={isChecked ? "check-box" : "check-box-outline-blank"}
            size={20}
            color={isChecked ? "green" : "black"}
          />
        </TouchableOpacity>
        <Text>I accept the </Text>
        <Text style={{ color: Colors.PURPLE, textDecorationLine: "underline" }}>
          Terms of Services{" "}
        </Text>
        <Text>and </Text>
        <Text style={{ color: Colors.PURPLE, textDecorationLine: "underline" }}>
          Privacy Policy.{" "}
        </Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={handleSignUp}
          style={{
            borderColor: "gray",
            borderWidth: 1,
            borderRadius: 8,
            padding: 11,
            marginBottom: 10,
            width: 340,
            marginLeft: "4%",
            alignItems: "center",
            backgroundColor: Colors.PURPLE,
            marginTop: "5%",
          }}
        >
          <Text style={{ color: Colors.LIGHT_WHITE }}>Submit</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{ flexDirection: "row", marginLeft: "19%", marginTop: "8%" }}
      >
        <Text>Already have an account?</Text>
        <TouchableOpacity onPress={navigateToLogin}>
          <Text style={{ color: Colors.PURPLE, marginLeft: "5%" }}>
            Login now!
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: "70%", marginLeft: "17%" }}></View>
    </SafeAreaView>
  );
};

export default SignUp;
