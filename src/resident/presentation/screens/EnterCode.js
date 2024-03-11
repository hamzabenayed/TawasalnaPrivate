import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useState, useRef } from "react";
import Colors from "../Utils/Colors";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import axios from "axios";
import { base_Url } from "../../../BaseUrl";

const EnterCode = () => {

  const codeInputRefs = useRef([]);
  const navigation = useNavigation();
  const route = useRoute();
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [email, setEmail] = useState(route.params.email);
/////////////////////////////////////////////////////////////
  const handleCodeChange = (text, index) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);
    if (index < code.length - 1 && text !== "") {
      codeInputRefs.current[index + 1].focus();
    }
  };
  //////////////////////////////////////////////////////////////
  const handleEnterCodeForgotPassword = async () => {
    const enteredCode = code.join("");
    const isAnyCodeEmpty = code.some((item) => item === "");
    if (isAnyCodeEmpty) {
      ToastAndroid.show("Please enter all 6 digits", ToastAndroid.SHORT);
      return;
    } else if (enteredCode.length < 6) {
      ToastAndroid.show("Please enter a 6-digit code", ToastAndroid.SHORT);
      return;
    }
    try {
      const response = await axios.post(
        `${base_Url}/tawasalna-user/auth/verifyCode`,
        {
          email,
          code: enteredCode,
        }
      );
      console.log(" Code Verified:", response.data,code);
      navigation.navigate("Reset your password",{ email, code });
    } catch (error) {
      console.error("Error while verifying Code :", error);
    }
  };
  return (
    <SafeAreaView style={{ backgroundColor: Colors.WHITE, height: 760 }}>
      <View style={{ marginTop: "40%" }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "-25%",
          }}
        >
          {code.map((code, index) => (
            <TextInput
              key={index}
              ref={(ref) => (codeInputRefs.current[index] = ref)}
              style={{
                borderColor: "gray",
                borderWidth: 1,
                borderRadius: 8,
                padding: 10,
                margin: 5,
                width: 40,
                textAlign: "center",
              }}
              keyboardType="numeric"
              maxLength={1}
              value={code}
              onChangeText={(text) => handleCodeChange(text, index)}
            />
          ))}
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "-3%",
          marginRight: 10,
        }}
      >
        <Text>Did not receive a code?</Text>
        <TouchableOpacity>
          <Text style={{ color: Colors.PURPLE, marginLeft: 5 }}>Resend</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: "5%" }}>
        <TouchableOpacity
          onPress={handleEnterCodeForgotPassword}
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
          <Text style={{ color: Colors.WHITE, marginLeft: 5 }}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default EnterCode;
