import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";

import Colors from "./resident/presentation/Utils/Colors";
import Images from "./resident/presentation/Utils/Images";
import Screens from "./resident/presentation/Utils/Screens";
import CustomIcon from "./resident/presentation/components/CustomIcon";
import EditProfile from "./resident/presentation/screens/EditProfile";
import Home from "./resident/presentation/screens/Home";
import Network from "./resident/presentation/screens/Network";
import Notification from "./resident/presentation/screens/Notification";
import Post from "./resident/presentation/screens/Post";
import Profile from "./resident/presentation/screens/Profile";
import Settings from "./resident/presentation/screens/Settings";
import Login from "./resident/presentation/screens/Login";
import SignUp from "./resident/presentation/screens/SignUp";
////////////////////////////////////////////////////////////////////////////////////////
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const PostStack = createNativeStackNavigator();
const NetworkStack = createNativeStackNavigator();
const NotificationStack = createNativeStackNavigator();
const SettingsStack = createNativeStackNavigator();
/////////////////////////////////////////////////////////////////////////////////////////



const HomeScreen = () => (
  <HomeStack.Navigator screenOptions={{ headerShown: false }}>
    <HomeStack.Screen name={Screens.HOME} component={Home} />
  </HomeStack.Navigator>
);
const SettingsScreen = () => (
  <SettingsStack.Navigator screenOptions={{ headerShown: false }}>
    <SettingsStack.Screen name={Screens.SETTINGS} component={Settings} />
  </SettingsStack.Navigator>
);

const PostScreen = () => (
  <PostStack.Navigator screenOptions={{ headerShown: false }}>
    <PostStack.Screen name={Screens.POST} component={Post} />
  </PostStack.Navigator>
);

const NetworkScreen = () => (
  <NetworkStack.Navigator screenOptions={{ headerShown: false }}>
    <NetworkStack.Screen name={Screens.NETWORK} component={Network} />
  </NetworkStack.Navigator>
);

const NotificationScreen = () => (
  <NotificationStack.Navigator screenOptions={{ headerShown: false }}>
    <NotificationStack.Screen
      name={Screens.NOTIFICATION}
      component={Notification}
    />
  </NotificationStack.Navigator>
);

//////////////////////////////////////////////////////////////////////////////////////

export const HeaderOptions = ({ iconLeft, navigation, isPostScreen }) => (
  <View
    style={{
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: Colors.WHITE,
      elevation: 4,
      paddingVertical: 7,
      marginTop: '7%',
    }}
  >
    <View style={{ paddingLeft: 10 }}>
      {isPostScreen ? (
        <TouchableOpacity onPress={() => navigation.navigate(Screens.HOME)}>
          <CustomIcon name={iconLeft} size={34} color={Colors.BLACK} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => navigation.navigate(Screens.PROFILE)}>
          <Image
            source={Images.PROFILE_PICTURE}
            style={{ height: 35, width: 35, borderRadius: 100 }}
          />
        </TouchableOpacity>
      )}
    </View>
    {isPostScreen ? (
      <Text
        style={{
          width: 240,
          marginHorizontal: 16,
          fontSize: 16,
          fontWeight: "bold",
          color: Colors.BLACK,
        }}
      >
        Share post
      </Text>
    ) : (
      <TextInput
        placeholder="Search"
        placeholderTextColor={Colors.BLACK}
        style={{
          borderRadius: 5,
          marginHorizontal: 20,
          width: 240,
          height: 34,
          backgroundColor: Colors.BLUE1,
          paddingLeft: 10,
        }}
      />
    )}
    <TouchableOpacity onPress={() => {}}>
      {isPostScreen ? (
        <Text style={{ color: Colors.GRAY, fontSize: 16, fontWeight: "bold" }}>
          Post
        </Text>
      ) : (
        <CustomIcon
          name="chatbubble-ellipses-outline"
          size={28}
          color={Colors.GRAY}
        />
      )}
    </TouchableOpacity>
  </View>
);

const showTabBar = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route);
  return routeName === "PROFILE" ? "none" : "flex";
};

const Header = (
  navigation,
  route,
  icon,
  title,
  iconLeft,
  isPostScreen,
  isNotificationScreen
) => ({
  title,
  tabBarStyle: { display: showTabBar(route) },
  tabBarBadge: isNotificationScreen ? 5 : null,
  tabBarIcon: ({ focused }) => {
    return (
      <CustomIcon
        name={icon}
        size={28}
        color={focused ? Colors.PURPLE : Colors.GRAY}
      />
    );
  },
  header: () => (
    <HeaderOptions
      iconLeft={iconLeft}
      navigation={navigation}
      isPostScreen={isPostScreen}
    />
  ),
});

/////////////////////////////////////////////////////////////////////////////////////////////

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LOGIN"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SIGNUP"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TABBAR"
          component={TabNavigator}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="PROFILE"
          component={Profile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EDITPROFILE"
          component={EditProfile}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={Screens.HOME_STACK}
        component={HomeScreen}
        options={({ navigation, route }) =>
          Header(navigation, route, "home", "Home")
        }
      />
      <Tab.Screen
        name={Screens.NETWORK_STACK}
        component={NetworkScreen}
        options={({ navigation, route }) =>
          Header(navigation, route, "people", "Network")
        }
      />
      <Tab.Screen
        name={Screens.POST_STACK}
        component={PostScreen}
        options={({ navigation, route }) =>
          Header(navigation, route, "add-circle", "Post", "close", true)
        }
      />
      <Tab.Screen
        name={Screens.NOTIFICATION_STACK}
        component={NotificationScreen}
        options={({ navigation, route }) =>
          Header(
            navigation,
            route,
            "notifications",
            "Notifications",
            "",
            false,
            true
          )
        }
      />
      <Tab.Screen
        name={Screens.SETTINGS_STACK}
        component={SettingsScreen}
        options={({ navigation, route }) =>
          Header(navigation, route, "cog", "Settings")
        }
      />
    </Tab.Navigator>
  );
};
