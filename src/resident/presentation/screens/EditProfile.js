import * as ImagePicker from "expo-image-picker";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
  Dimensions
} from "react-native";
import { imagesDataURL } from "../Utils/Images";
import axios from "axios";
import { base_Url } from "../../../BaseUrl";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { TextInput as PaperTextInput } from 'react-native-paper';
const { width, height } = Dimensions.get('window');
import { EvilIcons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import Colors from "../Utils/Colors";

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
    <View>
      <ScrollView>
        <View style={styles.bigContainer}>
          <View style={styles.containerPhoto}>
            <Image style={styles.image} source={{ uri: selectedImage }} />
           <TouchableOpacity style={styles.picker} onPress={()=>handleImageSelection()}>
          <View style={styles.iconContainer}>
            <EvilIcons name="camera" size={20} color="white" />
            </View>
            </TouchableOpacity>
            <View style={styles.containerText}>
              <Text style={styles.textOne}>Parves Ahamad</Text>
              <Text style={styles.textTwo}>@parvesahmed</Text>
            </View>
          </View>
          <View style={styles.ligne}></View>
          <View style={styles.containerInput}>
            <PaperTextInput
              mode="outlined"
              label="Full name"
              value={fullname}
              onChangeText={setFullName}
              style={styles.input}
            />
            <View style={styles.containerNested}>
            <PaperTextInput
              mode="outlined"
              label="Age"
              value={age === '' || age === 0 ? '' : age.toString()}
              onChangeText={(text) => {
                const parsedValue = text.trim() !== '' ? parseFloat(text) : ''
                setAge(parsedValue)
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
        <Picker.Item label="Gender" value="" />
        <Picker.Item label="Male" value="male" />
        <Picker.Item label="Female" value="female" />
      </Picker>
      </View>
            </View>

            <PaperTextInput
              mode="outlined"
              label="Phone Number"
              value={
                phonenumber === '' || phonenumber === 0
                  ? ''
                  : phonenumber.toString()
              }
              onChangeText={(text) => {
                const parsedValue = text.trim() !== '' ? parseFloat(text) : '';
                setPhonenumber(parsedValue);
              }}
              keyboardType="numeric"
              style={styles.input}
            />
          
            <PaperTextInput
              mode="outlined"
              label="Adress"
              value={address}
              onChangeText={setAddress}
              style={styles.input}
            />
            <PaperTextInput
              mode="outlined"
              label="Resident ID"
              value={residentid === '' || residentid === 0 ? '' : residentid.toString()}
              onChangeText={(text) => {
                const parsedValue = text.trim() !== '' ? parseFloat(text) : ''
                setResidentId(parsedValue)
              }}
              keyboardType="numeric"
              style={styles.input}
            />
           
          </View>

          <TouchableOpacity style={styles.button}>
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
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  containerPhoto: {
    justifyContent: 'center',
    alignItems: 'center',
    height: height * 0.3,
    width: width * 0.9,
    flexDirection: 'column',
    gap: 15,
  },
  image: {
    borderRadius: 100,
    height: height * 0.15,
    width: width * 0.3,
    padding:1,
    borderWidth: 4,
    borderColor: "#BA479B",
  },
  picker:{
    borderRadius: 100,
    backgroundColor:"#BA479B",
    height: height * 0.03,
    width: width * 0.06,
    justifyContent: 'center',
    alignContent: 'center',
    position: 'absolute',
    top: 110,
    right:125
  },
  iconContainer:{
    justifyContent:"center",
    alignContent:"center",
    paddingLeft:1.5
  },
  ligne: {
    width: width * 0.9,
    height: height * 0.001,
    backgroundColor: '#5a5959',
  },
  containerText: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textOne: {
    fontWeight: 'bold',
    fontSize: 22,
  },
  textTwo: {
    color: '#5a5959',
    fontSize: 18,
  },
  containerInput: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  input: {
    width: width * 0.9,
  },
  containerNested: {
    width: width * 0.9,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nestedInputesOne: {
    width: width * 0.45,
  },
  nestedInputesTwo: {
    width: width * 0.4,
  },
  btnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 5,
  },
  button: {
    width: width * 0.8,
    height: height * 0.07,
    backgroundColor: "#BA479B",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  textBtn: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  containerPicker:{
    width: width * 0.4,
    height: height * 0.07,
    backgroundColor:"white",
    borderBlockColor:"black",
    borderWidth: 1,
    borderRadius: 4
  }
});
