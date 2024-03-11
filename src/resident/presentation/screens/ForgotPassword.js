import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import axios from "axios";
import { base_Url } from "../../../BaseUrl";

const ForgotPassword = () => {

const navigation = useNavigation();
const [email, setEmail] = useState("");
/////////////////////////////////////////
const isValidEmail = (email) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
};
/////////////////////////////////////////
const handleForgotPassword = async () => {
  if (!email.trim()) {
    ToastAndroid.show("email is empty!", ToastAndroid.SHORT);
    return;
  } else if (!isValidEmail(email)) {
    ToastAndroid.show("Invalid email address!", ToastAndroid.SHORT);
    return;
  }
  try {
    const response = await axios.post(
      `${base_Url}/tawasalna-user/auth/forgotPassword`,
      {
        email
      }
    );
    console.log("Forgot Password successful:", response.data);
    navigation.navigate("Enter Your Code" , {email});
  } catch (error) {
    console.error("Error Forgot Paswword:", error);
  }
};
  return (
    <SafeAreaView style={{ backgroundColor: Colors.WHITE, height: 760 }}>
      <View style={{ marginTop: "8%" }}>
        <Text style={{ fontSize: 12, marginLeft: "3%" }}>
          Enter your email to proceed with resetting your password.
        </Text>
        <View
          style={{
            borderColor: "gray",
            borderWidth: 1,
            borderRadius: 10,
            padding: 8,
            marginBottom: 10,
            width: 340,
            marginLeft: "2%",
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
        <View>
          <TouchableOpacity
            onPress={handleForgotPassword}
            style={{
              flexDirection: "row",
              borderColor: "gray",
              borderWidth: 1,
              borderRadius: 10,
              padding: 13,
              marginBottom: 10,
              width: 340,
              marginLeft: "2%",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: Colors.PURPLE,
            }}
          >
            <MaterialIcons name="send" size={24} color={Colors.LIGHT_WHITE} />
            <Text style={{ color: Colors.WHITE, marginLeft: 5 }}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword;
