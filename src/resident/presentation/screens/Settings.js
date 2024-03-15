import React, { useState } from "react";
import {
  ScrollView,
  SectionList,
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Switch,
} from "react-native";

import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
const { width, height } = Dimensions.get("window");

export default function MainSettingsScreen() {
  const Settings = ({ navigation }) => {
    const navigateToEditProfile = () => {
      navigation.navigate("Edit Profile");
    };
  };

  return (
    <View style={styles.parentCont}>
      <ScrollView>
        <View style={styles.screenTitleCont}>
          <Text style={styles.screenTitle}>Settings</Text>
        </View>
        <View style={styles.bigContainer}>
          <View style={styles.titleBox}>
           <View style={styles.modifTitle} >
            <View style={styles.iconStyle}>
              <FontAwesome name="user" size={24} color="#5a5959" />
            </View>
            <Text style={styles.textTitle}>Account</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.buttons}>
            <View style={styles.insideBtn}>
              <MaterialIcons name="person-outline" size={24} color="#5a5959" />

              <Text style={styles.textBtn}>Account Settings</Text>
            </View>
            <MaterialIcons name="arrow-forward-ios" size={24} color="#5a5959" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttons}>
            <View style={styles.insideBtn}>
              <MaterialIcons name="security" size={24} color="#5a5959" />

              <Text style={styles.textBtn}>Security</Text>
            </View>
            <MaterialIcons name="arrow-forward-ios" size={24} color="#5a5959" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttons}>
            <View style={styles.insideBtn}>
              <MaterialIcons name="lock-outline" size={24} color="#5a5959" />

              <Text style={styles.textBtn}>Privacy</Text>
            </View>
            <MaterialIcons name="arrow-forward-ios" size={24} color="#5a5959" />
          </TouchableOpacity>
          <View style={styles.titleBox}>
            <View style={styles.modifTitle}>
            <View style={styles.iconStyle}>
              <FontAwesome name="support" size={24} color="#5a5959" />
            </View>
            <Text style={styles.textTitle}>Support & About</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.buttons}>
            <View style={styles.insideBtn}>
              <MaterialIcons name="help-outline" size={24} color="#5a5959" />

              <Text style={styles.textBtn}>Help & Support</Text>
            </View>
            <MaterialIcons name="arrow-forward-ios" size={24} color="#5a5959" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttons}>
            <View style={styles.insideBtn}>
              <MaterialIcons name="info-outline" size={24} color="#5a5959" />

              <Text style={styles.textBtn}>Terms & Policy</Text>
            </View>
            <MaterialIcons name="arrow-forward-ios" size={24} color="#5a5959" />
          </TouchableOpacity>
          <View style={styles.titleBox}>
           <View style={styles.modifTitle}>
            <View style={styles.iconStyle}>
              <MaterialIcons name="cached" size={24} color="#5a5959" />
            </View>
            <Text style={styles.textTitle}>Cache & Cellular</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.buttons}>
            <View style={styles.insideBtn}>
              <MaterialIcons name="delete-outline" size={24} color="#5a5959" />

              <Text style={styles.textBtn}>Free Up Space</Text>
            </View>
            <MaterialIcons name="arrow-forward-ios" size={24} color="#5a5959" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttons}>
            <View style={styles.insideBtn}>
              <MaterialIcons name="save-alt" size={24} color="#5a5959" />

              <Text style={styles.textBtn}>Date Saver</Text>
            </View>
            <MaterialIcons name="arrow-forward-ios" size={24} color="#5a5959" />
          </TouchableOpacity>
          <View style={styles.titleBox}>
          <View style={styles.modifTitle}>
            <View style={styles.iconStyle}>
              <SimpleLineIcons name="action-redo" size={24} color="#5a5959" />
            </View>
            <Text style={styles.textTitle}>Actions</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.buttons}>
            <View style={styles.insideBtn}>
              <MaterialIcons name="outlined-flag" size={24} color="#5a5959" />

              <Text style={styles.textBtn}>Report a problem</Text>
            </View>
            <MaterialIcons name="arrow-forward-ios" size={24} color="#5a5959" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttons}>
            <View style={styles.insideBtn}>
              <MaterialIcons name="people-outline" size={24} color="#5a5959" />

              <Text style={styles.textBtn}>Add Account</Text>
            </View>
            <MaterialIcons name="arrow-forward-ios" size={24} color="#5a5959" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttons}>
            <Text style={styles.textBtn}>Sign Out</Text>
            <MaterialIcons name="logout" size={24} color="#5a5959" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  parentCont: {
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  screenTitleCont: {
    width: width * 0.9,
    height: height * 0.12,
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 150,
  },
  screenTitle: {
    fontSize: 35,
    fontWeight: "bold",
  },
  bigContainer: {
    flexDirection: "column",
    gap: 3,
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  titleBox: {
    height: height * 0.09,
    width: width * 0.9,
    // backgroundColor: 'green',
    justifyContent: "space-between",
    alignItems: "center",
    // paddingRight: 200,
    gap: 20,
    flexDirection: "row",
  },
  iconStyle: {
    borderRadius: 100,
    backgroundColor: "#ADD8E6",
    height: height * 0.06,
    width: width * 0.12,
    justifyContent: "center",
    alignItems: "center",
  },
  textTitle: {
    fontWeight: "bold",
    fontSize: 20,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: width * 0.9,
    height: height * 0.1,
    borderRadius: 5,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
    backgroundColor: "white",
  },
  insideBtn: {
    // width: width*0.8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  textBtn: {
    fontWeight: "bold",
    fontSize: 17,
  },
  notificationTitle: {
    height: height * 0.09,
    width: width * 0.9,
    // backgroundColor: 'green',
    justifyContent: "center",
    alignItems: "center",
    // paddingRight: 135,
    gap: 20,
    flexDirection: "row",
  },
  moreTitle: {
    height: height * 0.09,
    width: width * 0.9,
    // backgroundColor: 'green',
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 210,
    gap: 20,
    flexDirection: "row",
  },
  cacheTitle: {
    height: height * 0.09,
    width: width * 0.9,
    // backgroundColor: 'green',
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 140,
    gap: 20,
    flexDirection: "row",
  },
  modifTitle:{
    flexDirection:"row",
    justifyContent: "center",
    alignItems: "center",
    gap:15
  }
});
