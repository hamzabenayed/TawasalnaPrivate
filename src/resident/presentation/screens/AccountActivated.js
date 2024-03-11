import { View, Text, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import {
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import Colors from '../Utils/Colors';
import { useNavigation } from '@react-navigation/native';
const AccountActivated = () => {
    const navigation = useNavigation();
    const HandleLoginNavigation = () => {
  navigation.navigate("LOGIN");
    }
  return (
    <SafeAreaView style={{ backgroundColor: Colors.WHITE, height: 760 }}>
      <View style={{marginTop:"5%"}}>
        <View style={{ marginTop: "5%", marginLeft: "23%" }}>
          <Image source={require("../../../../assets/AccountActivated.jpg")} />
        </View>
        <View style={{ marginTop: "5%", marginLeft: "10%" }}>
          <Text>You account have been successfully activated!</Text>
        </View>
        <View style={{ marginTop: "5%", marginLeft: "1%" }}>
          <TouchableOpacity
            onPress={HandleLoginNavigation}
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
            <MaterialIcons
              name="arrow-forward"
              size={24}
              color={Colors.LIGHT_WHITE}
            />

            <Text style={{ color: Colors.WHITE, marginLeft: 5 }}>
              Proceed with login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default AccountActivated