import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import React, { useState, useRef } from "react";
import Colors from "../Utils/Colors";
import { useNavigation, useRoute } from "@react-navigation/native";
import axios from "axios";
import { base_Url } from "../../../BaseUrl";

const EnterCode = () => {

  const codeInputRefs = useRef([]);
  const navigation = useNavigation();
  const route = useRoute();
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [email, setEmail] = useState(route.params.email);
/////////////////////////////////////////////////////////////
  const handleCodeChange = async (text, index) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (index === 5 && newCode.every((item) => item !== "")) {
      const enteredCode = newCode.join("");

      try {
        const response = await axios.post(
          `${base_Url}/tawasalna-user/auth/verifyCode`,
          {
            email,
            code: enteredCode,
          }
        );
        console.log("Code Verified:", response.data);
        navigation.navigate("Reset your password", { email, code });
      } catch (error) {
        console.error("Error while verifying Code :", error);
         ToastAndroid.show(
           "Failed to verify code. Please try again.",
           ToastAndroid.SHORT
         );

      }
    } else if (text !== "") {
      codeInputRefs.current[index + 1].focus();
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
            marginTop: "-20%",
          }}
        >
          {code.map((code, index) => (
            <TextInput
              key={index}
              ref={(ref) => (codeInputRefs.current[index] = ref)}
              style={{
                borderColor: Colors.PURPLE,
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
          marginTop: "2%",
          marginRight: 10,
        }}
      >
        <Text>Did not receive a code?</Text>
        <TouchableOpacity>
          <Text style={{ color: Colors.PURPLE, marginLeft: 5 }}>Resend</Text>
        </TouchableOpacity>
      </View>
    
    </SafeAreaView>
  );
};

export default EnterCode;
