import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

import * as ProfileData from "../../data/Profile";
import Colors from "../Utils/Colors";
import Images from "../Utils/Images";
import { launchImageLibrary } from "react-native-image-picker";

const Profile2 = () => {
  const DATA = ProfileData.default;
  const navigation = useNavigation();
  
////////////////////////////////////////////////////////////////////////
  const NavigateToEditProfile = () => {
    navigation.navigate("EDITPROFILE");
  };
///////////////////////////////////////////////////////////////////////

  return (
    <ScrollView showsVerticalScrollIndicator style={{ marginTop: "7%" }}>
      <View style={{ backgroundColor: Colors.WHITE, marginBottom: 10 }}>
        <View
          style={{
            alignItems: "center",
            justifyContent: "space-evenly",
            marginVertical: 16,
            marginTop: -67,
            left: 9,
          }}
        >
          <Image
            source={DATA.INFO.banner}
            style={{
              width: "100%",
              height: 150,
              marginTop: "20%",
              marginRight: "5%",
            }}
          />

          <Image
            source={DATA.INFO.profile_picture}
            style={{
              borderRadius: 100,
              height: 130,
              width: 130,
              borderColor: Colors.WHITE,
              borderWidth: 3,
              bottom: 70,
              left: "-2%",
              marginBottom:-60
            }}
          />
          <Text
            style={{ color: Colors.BLACK, fontSize: 27, fontWeight: "bold"  }}
          >
            Hamza Ben Ayed
          </Text>
          <Text style={{ color: Colors.BLACK, fontSize: 19 }}>
            2,1 K Friends
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            marginVertical: 16,
            marginTop: -2,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: Colors.PURPLE,
              borderRadius: 10,
              width: 160,
              paddingVertical: 5,
              alignItems: "center",
            }}
            onPress={() => {}}
          >
            <Text
              style={{ fontSize: 19, color: Colors.WHITE, fontWeight: "bold" }}
            >
              Add To Story
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: Colors.GRAY,
              borderRadius: 10,
              width: 160,
              paddingVertical: 5,
              alignItems: "center",
              flexDirection: "row",
              backgroundColor: Colors.LIGHT_WHITE,
            }}
            onPress={NavigateToEditProfile}
          >
            <Icon name="pencil" size={20} style={{ marginLeft: 3 }} />
            <Text
              style={{ fontSize: 18, color: Colors.BLACK, fontWeight: "bold" }}
            >
              Update Profile
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: 2,
            backgroundColor: Colors.BLACK,
            width: "90%",
            alignSelf: "center",
            marginTop: 10,
          }}
        />

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            marginVertical: 16,
            marginTop: 15,
          }}
        >
          <TouchableOpacity>
            <Text style={{ fontSize: 18 }}>Publications</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{ fontSize: 18 }}>About</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ alignItems: "center", flexDirection: "row" }}
            onPress={() => {}}
          >
            <Text style={{ fontSize: 18 }}>More</Text>
            <FontAwesome5
              name="caret-down"
              size={24}
              color="black"
              style={{ marginLeft: 2 }}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <MaterialIcons name="more-horiz" size={24} />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          backgroundColor: Colors.WHITE,
          marginTop: 5,
          alignItems: "center",
          marginLeft: 10,
          marginRight: 10,
          borderRadius: 7,
        }}
      >
        <Text style={{ marginLeft: -280, fontSize: 25, fontWeight: "bold" }}>
          Intro
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: Colors.PURPLE,
            width: 200,
            height: 30,
            alignItems: "center",
            borderRadius: 10,
          }}
        >
          <Text
            style={{ fontSize: 20, color: Colors.WHITE, fontWeight: "bold" }}
          >
            Add a bio
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: Colors.PURPLE,
            width: 200,
            height: 30,
            alignItems: "center",
            borderRadius: 10,
            marginTop: 12,
          }}
        >
          <Text
            style={{ fontSize: 20, color: Colors.WHITE, fontWeight: "bold" }}
          >
            Edit Information
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: Colors.PURPLE,
            width: 200,
            height: 30,
            alignItems: "center",
            borderRadius: 10,
            marginTop: 12,
            marginBottom: 17,
          }}
        >
          <Text
            style={{ fontSize: 20, color: Colors.WHITE, fontWeight: "bold" }}
          >
            Add featured content
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          backgroundColor: Colors.WHITE,
          marginTop: 10,
          marginLeft: 10,
          marginRight: 10,
          borderRadius: 7,
        }}
      >
        <View style={{ marginLeft: 5, flexDirection: "row" }}>
          <TouchableOpacity>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Pictures</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            backgroundColor: Colors.WHITE,
            marginTop: 10,
          }}
        >
          <Image
            source={Images.PROFILE_PICTURE}
            style={{
              width: 100,
              height: 100,
              borderRadius: 10,
              marginBottom: 10,
            }}
          />
          <Image
            source={Images.PROFILE_PICTURE}
            style={{
              width: 100,
              height: 100,
              borderRadius: 10,
              marginBottom: 10,
            }}
          />
          <Image
            source={Images.PROFILE_PICTURE}
            style={{
              width: 100,
              height: 100,
              borderRadius: 10,
              marginBottom: 10,
            }}
          />
          <Image
            source={Images.PROFILE_PICTURE}
            style={{
              width: 100,
              height: 100,
              borderRadius: 10,
              marginBottom: 10,
            }}
          />
          <Image
            source={Images.PROFILE_PICTURE}
            style={{
              width: 100,
              height: 100,
              borderRadius: 10,
              marginBottom: 10,
            }}
          />
          <Image
            source={Images.PROFILE_PICTURE}
            style={{
              width: 100,
              height: 100,
              borderRadius: 10,
              marginBottom: 10,
            }}
          />
          <Image
            source={Images.PROFILE_PICTURE}
            style={{
              width: 100,
              height: 100,
              borderRadius: 10,
              marginBottom: 10,
            }}
          />
          <Image
            source={Images.PROFILE_PICTURE}
            style={{
              width: 100,
              height: 100,
              borderRadius: 10,
              marginBottom: 10,
            }}
          />
          <Image
            source={Images.PROFILE_PICTURE}
            style={{
              width: 100,
              height: 100,
              borderRadius: 10,
              marginBottom: 10,
            }}
          />
        </View>
      </View>
      <View
        style={{
          backgroundColor: Colors.WHITE,
          marginTop: 10,
          marginLeft: 10,
          marginRight: 10,
          borderRadius: 7,
        }}
      >
        <View style={{ marginLeft: 5, flexWrap: "wrap" }}>
          <TouchableOpacity />
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Friends</Text>

          <Text style={{ fontSize: 20, marginTop: 5 }}>2129 Friends</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            backgroundColor: Colors.WHITE,
            marginTop: 10,
          }}
        />
      </View>
      <View
        style={{
          backgroundColor: Colors.WHITE,
          marginTop: 10,
          marginLeft: 10,
          marginRight: 10,
          borderRadius: 7,
        }}
      >
        <View style={{ marginTop: 5, alignItems: "center" }}>
          <TouchableOpacity
            style={{
              backgroundColor: Colors.PURPLE,
              borderRadius: 20,
              width: 300,
              height: 50,
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <Text style={{ fontSize: 20, marginTop: 10, fontWeight: "bold" }}>
              Post What-Ever You Want !!
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: 2,
            backgroundColor: Colors.BLACK,
            width: "90%",
            alignSelf: "center",
            marginTop: 15,
          }}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            marginTop: 10,
            marginBottom: 20,
          }}
        >
          <TouchableOpacity
            style={{
              width: 160,
              alignItems: "center",
              flexDirection: "row",
              marginLeft: 18,
            }}
          >
            <FontAwesome5 name="video" size={20} color="red" />
            <Text style={{ fontSize: 18, fontWeight: "bold", marginLeft: 10 }}>
              live video
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 160,
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <FontAwesome5 name="image" size={24} color="blue" />

            <Text style={{ fontSize: 18, fontWeight: "bold", marginLeft: 10 }}>
              video / picture
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          backgroundColor: Colors.WHITE,
          marginTop: 10,
          marginLeft: 10,
          marginRight: 10,
          borderRadius: 7,
        }}
      >
        <View
          style={{ alignItems: "center", flexDirection: "row", marginTop: 20 }}
        >
          <Text style={{ fontSize: 15, fontWeight: "bold", marginLeft: 5 }}>
            Publications
          </Text>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              marginLeft: 30,
              borderWidth: 1,
              borderColor: Colors.GRAY,
              borderRadius: 7,
              alignItems: "center",
            }}
          >
            <FontAwesome5 name="bars" size={15} color="black" />
            <Text style={{ fontWeight: "bold", marginLeft: 5 }}>Filters</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              marginLeft: 10,
              borderWidth: 1,
              borderColor: Colors.GRAY,
              borderRadius: 7,
              alignItems: "center",
            }}
          >
            <FontAwesome5 name="cog" size={16} color="black" />

            <Text style={{ fontWeight: "bold", marginLeft: 2 }}>
              Manage publications
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: 2,
            backgroundColor: Colors.BLACK,
            width: "95%",
            alignSelf: "center",
            marginTop: 15,
          }}
        />
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            marginTop: 15,
            marginBottom: 20,
          }}
        >
          <TouchableOpacity
            style={{
              alignItems: "center",
              flexDirection: "row",
              marginLeft: 40,
            }}
          >
            <FontAwesome5 name="list-ul" size={20} color="black" />
            <Text style={{ fontSize: 15, fontWeight: "bold", marginLeft: 5 }}>
              List View
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              marginLeft: 100,
              alignItems: "center",
            }}
          >
            <FontAwesome5 name="th-large" size={20} color="black" />

            <Text style={{ fontWeight: "bold", marginLeft: 5, fontSize: 15 }}>
              Grid View
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile2;
