import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Colors from "../Utils/Colors";
import { useNavigation } from "@react-navigation/native";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";
const EnterCode = () => {
  const [code, setCode] = useState(["", "", "", "", "", ""]); // Array to store each digit of the code
  const navigation = useNavigation();

  const handleCodeChange = (text, index) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);
  };
//////////////////////////////////////////////////////////////
const handleResetPassword = () => {
 navigation.navigate("Reset your password ");
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
          {code.map((value, index) => (
            <TextInput
              key={index}
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
              value={value}
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
