import { MaterialIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../Utils/Colors";
import { imagesDataURL } from "../Utils/Images";
import axios from "axios";
import { base_Url } from "../../../BaseUrl";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const EditProfile =  async () => {
  const navigation = useNavigation();
  const navigateToProfile = () => {
    navigation.navigate("PROFILE");
  };
  ///////////////////////////////////////////////////////////////////////////
     
  const [selectedImage, setSelectedImage] = useState(imagesDataURL[0]);
  const [fullname, setFullName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [residentid, setResidentId] = useState("");
  const [address, setAddress] = useState("");
  //////////////////////////////////////////////////////////////////////////
  const handleImageSelection = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  ///////////////////////////////////////////////////////////////////////////
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const userId = await AsyncStorage.getItem("userId");
        if (userId) {
          const response = await axios.get(
            `${base_Url}/tawasalna-user/residentprofile/getresidentprofile/${userId}`
          );
          const residentProfile = response.data;
          setFullName(residentProfile.fullName);
          setAge(residentProfile.age.toString());
          setGender(residentProfile.gender);
          setPhonenumber(residentProfile.phoneNumber);
          setResidentId(residentProfile.residentId);
          setAddress(residentProfile.address);
        } else {
          console.log("User ID not found in AsyncStorage");
        }
      } catch (error) {
        console.error("Error getting resident profile:", error);
      }
    };

    fetchProfile();
  }, []);
  
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.WHITE,
        paddingHorizontal: 22,
      }}
    >
      <ScrollView>
        <View
          style={{
            alignItems: "center",
            marginVertical: 10,
          }}
        >
          <TouchableOpacity onPress={handleImageSelection}>
            <Image
              source={{ uri: selectedImage }}
              style={{
                height: 150,
                width: 150,
                borderRadius: 85,
                borderWidth: 2,
                borderColor: Colors.PRIMARY,
              }}
            />

            <View
              style={{
                position: "absolute",
                bottom: 0,
                right: 10,
                zIndex: 9999,
              }}
            >
              <MaterialIcons
                name="photo-camera"
                size={34}
                color={Colors.PRIMARY}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View>
          <View
            style={{
              flexDirection: "column",
              marginBottom: 6,
              borderRadius: 7,
            }}
          >
            <Text style={{ color: Colors.PURPLE, fontWeight: "bold" }}>
              ResidentID
            </Text>
            <View
              style={{
                height: 44,
                width: "100%",
                borderColor: Colors.secondaryGray,
                borderWidth: 1,
                borderRadius: 10,
                marginVertical: 6,
                justifyContent: "center",
                paddingLeft: 8,
              }}
            >
              <TextInput
                value={residentid}
                onChangeText={(value) => setResidentId(value)}
                editable
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: "column",
              marginBottom: 6,
              borderRadius: 7,
            }}
          >
            <Text style={{ color: Colors.PURPLE, fontWeight: "bold" }}>
              FullName
            </Text>
            <View
              style={{
                height: 44,
                width: "100%",
                borderColor: Colors.secondaryGray,
                borderWidth: 1,
                borderRadius: 10,
                marginVertical: 6,
                justifyContent: "center",
                paddingLeft: 8,
              }}
            >
              <TextInput
                value={fullname}
                onChangeText={(value) => setFullName(value)}
                editable
              />
            </View>
          </View>

          <View
            style={{
              flexDirection: "column",
              marginBottom: 6,
              borderRadius: 7,
            }}
          >
            <Text style={{ color: Colors.PURPLE, fontWeight: "bold" }}>
              PhoneNumber
            </Text>
            <View
              style={{
                height: 44,
                width: "100%",
                borderColor: Colors.secondaryGray,
                borderWidth: 1,
                borderRadius: 10,
                marginVertical: 6,
                justifyContent: "center",
                paddingLeft: 8,
              }}
            >
              <TextInput
                value={phonenumber}
                onChangeText={(value) => setPhonenumber(value)}
                editable
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: "column",
              marginBottom: 6,
              borderRadius: 7,
            }}
          >
            <Text style={{ color: Colors.PURPLE, fontWeight: "bold" }}>
              {" "}
              Address
            </Text>
            <View
              style={{
                height: 44,
                width: "100%",
                borderColor: Colors.secondaryGray,
                borderWidth: 1,
                borderRadius: 10,
                marginVertical: 6,
                justifyContent: "center",
                paddingLeft: 8,
              }}
            >
              <TextInput
                value={address}
                onChangeText={(value) => setAddress(value)}
                editable
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: "column",
              marginBottom: 6,
            }}
          >
            <Text style={{ color: Colors.PURPLE, fontWeight: "bold" }}>
              Age
            </Text>
            <View
              style={{
                height: 44,
                width: "100%",
                borderColor: Colors.secondaryGray,
                borderWidth: 1,
                borderRadius: 10,
                marginVertical: 6,
                justifyContent: "center",
                paddingLeft: 8,
              }}
            >
              <TextInput
                value={age}
                onChangeText={(value) => setAge(value)}
                editable
              />
            </View>
          </View>

          <View
            style={{
              flexDirection: "column",
              marginBottom: 6,
            }}
          >
            <Text style={{ color: Colors.PURPLE, fontWeight: "bold" }}>
              Gender
            </Text>
            <View
              style={{
                height: 44,
                width: "100%",
                borderColor: Colors.secondaryGray,
                borderWidth: 1,
                borderRadius: 10,
                marginVertical: 6,
                justifyContent: "center",
                paddingLeft: 8,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <TextInput
                value={gender}
                onChangeText={(value) => setGender(value)}
                editable
                style={{ flex: 1 }}
              />
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: Colors.PURPLE,
            height: 44,
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 8,
            marginBottom: 10,
          }}
          onPress={navigateToProfile}
        >
          <Text
            style={{
              color: Colors.WHITE,
            }}
          >
            Save Change
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditProfile;
