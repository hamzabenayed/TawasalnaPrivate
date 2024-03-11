import { View, Text, TouchableOpacity, TextInput, SafeAreaView } from 'react-native'
import React , {useState}from 'react'
import {
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";

const ResetPassword = () => {

 const [showPassword, setShowPassword] = useState(false);
 const [newpassword, setNewPassword] = useState("");
 const [confirmnewPassword, setConfirmNewPassword] = useState("");
    const toggleShowPassword = () => {
      setShowPassword(!showPassword);
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
            value={newpassword}
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
            value={confirmnewPassword}
            onChangeText={setConfirmNewPassword}
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