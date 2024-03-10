import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Colors from "../Utils/Colors";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";

const SignUp = () => {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };
  const navigateToLogin = () => {
    navigation.navigate("LOGIN");
  };
  const handleSignUp = () => {
    if (!firstName) {
      setFirstNameError("Please enter your first name");
      return;
    }

    if (!lastName) {
      setLastNameError("Please enter your last name");
      return;
    }

    if (!phoneNumber) {
      setPhoneNumberError("Please enter your phone number");
      return;
    }

    if (!email) {
      setEmailError("Please enter your email");
      return;
    }

    if (!password) {
      setPasswordError("Please enter your password");
      return;
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
          onPress={navigateToLogin}
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
