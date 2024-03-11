import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  ToastAndroid,
} from "react-native";
import React , {useState}from 'react'
import {
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import axios from "axios";
import { base_Url } from "../../../BaseUrl";

const ResetPassword = () => {

 const navigation = useNavigation();
 const route = useRoute();
 const [email, setEmail] = useState(route.params.email);
 const [code, setCode] = useState(route.params.code);
 const [showPassword, setShowPassword] = useState(false);
 const [newPassword, setNewPassword] = useState("");
 const [confirmPassword, setConfirmPassword] = useState("");
 //////////////////////////////////////////////////////////////////
    const toggleShowPassword = () => {
      setShowPassword(!showPassword);
    };
///////////////////////////////////////////////////////////////////
const isValidPassword = (newPassword) => {
  const errors = {
    minLength: newPassword.length >= 8,
    uppercase: /[A-Z]/.test(newPassword),
    lowercase: /[a-z]/.test(newPassword),
    symbol: /[!@#$%^&*(),.?":{}|<>]/.test(newPassword),
    number: /\d/.test(newPassword),
  };

  const isValid = Object.values(errors).every((valid) => valid);

  return { isValid, errors };
};
//////////////////////////////////////////////////////////////////////
const handleResetPassword = async () => {
        const enteredCode = code.join("");
        const passwordValidation = isValidPassword(newPassword);
    if (!newPassword.trim()) {
      ToastAndroid.show("password is empty!", ToastAndroid.SHORT);

      return;
    } else if (!passwordValidation.isValid) {
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
    } else if (newPassword !== confirmPassword) {
      ToastAndroid.show("Passwords do not match!", ToastAndroid.SHORT);
      return;
    }
  
  try {
    const response = await axios.patch(
      `${base_Url}/tawasalna-user/auth/resetPassword`,
      {
        email,
        newPassword,
        code: enteredCode,
      }
    );
    console.log(" Password Reset Success :", response.data);
    navigation.navigate("LOGIN");
  } catch (error) {
    console.error("Error while Reset Password :", error);
  }
};
  return (
    <SafeAreaView style={{ backgroundColor: Colors.WHITE, height: 760 }}>
      <View style={{ marginTop: "10%" }}>
        <Text style={{ marginLeft: "4%" }}>New Password</Text>

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
            value={newPassword}
            onChangeText={setNewPassword}
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
        <Text style={{ marginLeft: "4%" }}>Confirm New Password</Text>
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
      </View>
      <View style={{ marginTop: "5%" }}>
        <TouchableOpacity
        onPress={handleResetPassword}
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
            marginLeft: "4%",
          }}
        >
          <MaterialIcons name="send" size={24} color={Colors.LIGHT_WHITE} />
          <Text style={{ color: Colors.WHITE, marginLeft: 5 }}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default ResetPassword