import * as ImagePicker from "expo-image-picker";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import { TextInput as PaperTextInput } from "react-native-paper";
const { width, height } = Dimensions.get("window");
import { EvilIcons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Colors from "../Utils/Colors";
import axiosInstance from "../../../core/config/Axios";
import { decode, encode } from "base64-arraybuffer";

const EditProfile = ({ navigation }) => {
  const navigateToProfile = () => {
    navigation.navigate("PROFILE");
  };
  //////////////////////////////////////////////////////////////////////
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState("US");
  

  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNumber, setPhonenumber] = useState("");
  const [residentId, setResidentId] = useState("");
  const [address, setAddress] = useState("");
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(true);
  //////////////////////////////////////////////////////////////////
  const countryCodes = {
    US: "+1", // United States
    CA: "+1", // Canada
    TN:"+216"
  };
  ///////////////////////////////////////////////////////////////////////
  const handleCountryChange = (country) => {
    setSelectedCountry(country);
    const countryCode = countryCodes[country];
    if (phoneNumber && phoneNumber.startsWith(countryCode)) {
      return;
    }
    setPhonenumber(countryCode + phoneNumber);
  };

  const handlePhoneNumberChange = (number) => {
    setPhonenumber(number);
  };
  //////////////////////////////////////////////////////////////////
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

  
  //////////////////////////////////////////////////////////////////////////
  const setCountriesPhonenumber = (text) => {
    const numericText = text.replace(/\D/g, "");

    if (numericText.trim() === "") {
      setPhonenumber("");
    } else {
      setPhonenumber(numericText);
    }
  };
////////////////////////////////////////////////////////////////////////////////
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const userId = await AsyncStorage.getItem("userId");
        console.log("userId from Edit Profile:", userId);

        const response = await axiosInstance.get(
          `tawasalna-user/residentprofile/getresidentprofile/${userId}`
        );
        setData(response.data);
        console.log(data);
        const residentProfile = response.data;
        console.log(residentProfile);
        setFullName(residentProfile.fullName);
        setAge(residentProfile.age.toString());
        setGender(residentProfile.gender);
        setPhonenumber(residentProfile.phoneNumber);
        setResidentId(residentProfile.residentId);
        setAddress(residentProfile.address);
      } catch (error) {
        console.error("Error getting resident profile:", error);
        throw new Error(error);
      }
    };
    fetchProfile();
  }, [refresh]);
  ///////////////////////////////////////////////////////////////////////
  const UpdateProfile = async () => {
    try {
      const userId = await AsyncStorage.getItem("userId");
      console.log("userId from Edit Profile:", userId);

      const response = await axiosInstance.put(
        `tawasalna-user/residentprofile/updateresidenprofile/${userId}`,
        {
          residentId,
          fullName,
          phoneNumber,
          address,
          age,
          gender,
        }
      );
      console.log("Update successful");
      //setRefresh(!refresh);
    } catch (error) {
      console.error("Error getting resident profile:", error);
      throw new Error(error);
    }
  };
  /////////////////////////////////////////////////////////////////////////
  const UpdateProfilePicture = async () => {
    try {
      const userId = await AsyncStorage.getItem("userId");
      console.log("userId from Edit Profile:", userId);

      const response = await fetch(selectedImage);
      const blob = await response.blob();

      const formData = new FormData();
      formData.append("profilePhoto", {
        uri: selectedImage,
        name: "profile_photo.jpg",
        type: "image/jpeg",
      });

      await axiosInstance.put(
        `tawasalna-user/residentprofile/updateprofilepictures/${userId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Update Image successful");
      setRefresh(!refresh);
    } catch (error) {
      console.error("Error Update Image:", error);
      throw new Error(error);
    }
  };
  ////////////////////////////////////////////////////////////////////////////
useEffect(() => {
  const fetchProfilePhoto = async () => {
    try {
      const userId = await AsyncStorage.getItem("userId");
      const response = await axiosInstance.get(
        `tawasalna-user/residentprofile/getprofilephoto/${userId}`,
        {
          // Add responseType: 'arraybuffer' to indicate that you expect binary data in the response
          responseType: "arraybuffer",
        }
      );

      // Convert the binary image data to a base64 string
      const base64Image = encode(response.data);

      // Construct the data URL with the base64 string
      const imageUrl = `data:image/jpeg;base64,${base64Image}`;

      // Set the selectedImage state with the data URL
      setSelectedImage(imageUrl);
    } catch (error) {
      console.error("Error getting profile photo:", error);
    }
  };

  fetchProfilePhoto();
}, []);

 
  return (
    <View>
      <ScrollView>
        <View style={styles.bigContainer}>
          <View style={styles.containerPhoto}>
            <Image style={styles.image} source={{ uri: selectedImage }} />
            <TouchableOpacity
              style={styles.picker}
              onPress={() => handleImageSelection()}
            >
              <View style={styles.iconContainer}>
                <EvilIcons name="camera" size={20} color="white" />
              </View>
            </TouchableOpacity>
            <View style={styles.containerText}>
              <Text style={styles.textOne}>{fullName}</Text>
              <Text style={styles.textTwo}>ID: {residentId}</Text>
            </View>
          </View>
          <View style={styles.ligne}></View>
          <View style={styles.containerInput}>
            <PaperTextInput
              mode="outlined"
              label="Full name"
              value={fullName}
              onChangeText={setFullName}
              style={styles.input}
            />
            <View style={styles.containerNested}>
              <PaperTextInput
                mode="outlined"
                label="Age"
                value={age === "" || age === 0 ? "" : age.toString()}
                onChangeText={(text) => {
                  const parsedValue =
                    text.trim() !== "" ? parseFloat(text) : "";
                  setAge(parsedValue);
                }}
                keyboardType="numeric"
                style={styles.nestedInputesTwo}
              />
              <View style={styles.containerPicker}>
                <Picker
                  selectedValue={gender}
                  onValueChange={(itemValue) => setGender(itemValue)}
                  style={styles.nestedInputesTwo}
                >
                  <Picker.Item label={gender} value="" />
                  <Picker.Item label="Male" value="Male" />
                  <Picker.Item label="Female" value="Female" />
                </Picker>
              </View>
            </View>

            <View style={styles.containerNested}>
              <Picker
                selectedValue={selectedCountry}
                onValueChange={(itemValue) => handleCountryChange(itemValue)}
                style={styles.nestedInputesOne}
              >
                <Picker.Item label="USA" value="US" />
                <Picker.Item label="Canada" value="CA" />
                <Picker.Item label="Tunisia" value="TN" />
              </Picker>
              <PaperTextInput
                mode="outlined"
                label="Phone"
                keyboardType="numeric"
                value={phoneNumber}
                onChangeText={setPhonenumber}
                style={styles.nestedInputesTwo}
              />
            </View>

            <PaperTextInput
              mode="outlined"
              label="Address"
              value={address}
              onChangeText={setAddress}
              style={styles.input}
            />
            <PaperTextInput
              mode="outlined"
              label="Resident ID"
              value={
                residentId === "" || residentId === 0
                  ? ""
                  : residentId.toString()
              }
              onChangeText={(text) => {
                const parsedValue = text.trim() !== "" ? parseFloat(text) : "";
                setResidentId(parsedValue);
              }}
              keyboardType="numeric"
              style={styles.input}
            />
          </View>

          <TouchableOpacity
            onPress={() => {
              UpdateProfile();
              UpdateProfilePicture();
            }}
            style={styles.button}
          >
            <Text style={styles.textBtn}>Save</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  bigContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  containerPhoto: {
    justifyContent: "center",
    alignItems: "center",
    height: height * 0.3,
    width: width * 0.9,
    flexDirection: "column",
    gap: 15,
  },
  image: {
    borderRadius: 100,
    height: height * 0.15,
    width: width * 0.3,
    padding: 1,
    borderWidth: 4,
    borderColor: "#BA479B",
  },
  picker: {
    borderRadius: 100,
    backgroundColor: "#BA479B",
    height: height * 0.03,
    width: width * 0.06,
    justifyContent: "center",
    alignContent: "center",
    position: "absolute",
    top: 110,
    right: 125,
  },
  iconContainer: {
    justifyContent: "center",
    alignContent: "center",
    paddingLeft: 1.5,
  },
  ligne: {
    width: width * 0.9,
    height: height * 0.001,
    backgroundColor: "#5a5959",
  },
  containerText: {
    justifyContent: "center",
    alignItems: "center",
  },
  textOne: {
    fontWeight: "bold",
    fontSize: 22,
  },
  textTwo: {
    color: "#5a5959",
    fontSize: 18,
  },
  containerInput: {
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  input: {
    width: width * 0.9,
  },
  containerNested: {
    width: width * 0.9,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  nestedInputesOne: {
    width: width * 0.45,
  },
  nestedInputesTwo: {
    width: width * 0.4,
  },
  btnContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 5,
  },
  button: {
    width: width * 0.8,
    height: height * 0.07,
    backgroundColor: Colors.PURPLE,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  textBtn: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
  containerPicker: {
    width: width * 0.4,
    height: height * 0.07,
    backgroundColor: "white",
    borderBlockColor: "black",
    borderWidth: 1,
    borderRadius: 4,
  },
});
