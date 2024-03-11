import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";
const ForgotPassword = () => {
const navigation = useNavigation();
const handleEnterCode = () => {
  navigation.navigate("Enter Your Code ");
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
            //value={email}
            //onChangeText={setEmail}
          />
        </View>
        <View>
          <TouchableOpacity
          onPress={handleEnterCode}
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
