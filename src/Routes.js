import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Screens from "./resident/presentation/Utils/Screens";
import Home from "./resident/presentation/screens/Home";
import Notification from "./resident/presentation/screens/Notification";
import Job from "./resident/presentation/screens/Job";
import Network from "./resident/presentation/screens/Network";
import Post from "./resident/presentation/screens/Post";
import Colors from "./resident/presentation/Utils/Colors";
import Images from "./resident/presentation/Utils/Images";
import CustomIcon from "./resident/presentation/components/CustomIcon";

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const PostStack = createNativeStackNavigator();
const NetworkStack = createNativeStackNavigator();
const NotificationStack = createNativeStackNavigator();
const JobStack = createNativeStackNavigator();

const HomeScreen = () => (
  <HomeStack.Navigator screenOptions={{ headerShown: false }}>
    <HomeStack.Screen name={Screens.HOME} component={Home} />
    <HomeStack.Screen name={Screens.PROFILE} component={Profile} />
  </HomeStack.Navigator>
);
const JobScreen = () => (
  <JobStack.Navigator screenOptions={{ headerShown: false }}>
    <JobStack.Screen name={Screens.JOB} component={Job} />
  </JobStack.Navigator>
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

const HeaderOptions = ({ iconLeft, navigation, isPostScreen }) => (
  <View
    style={{
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: Colors.WHITE,
      elevation: 4,
      paddingVertical: 7,
      marginTop: 25,
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



const Header = (
  navigation,
  route,
  icon,
  title,
  iconleft,
  isPostScreen,
  isNotificationScreen
) => ({
  title: title,
  tabBarBadge: isNotificationScreen ? 5 : null,
  tabBarIcon: ({ focused }) => (
    <CustomIcon
      name={icon}
      size={28}
      color={focused ? Colors.BLACK : Colors.GRAY}
    />
  ),
  header: () => (
    <HeaderOptions
      iconleft={iconleft}
      navigation={navigation}
      isPostScreen={isPostScreen}
    />
  ),
});

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name={Screens.HOME_STACK}
          component={HomeScreen}
          options={(navigation, route) =>
            Header(navigation, route, "home", "Home")
          }
        />
        <Tab.Screen
          name={Screens.NETWORK_STACK}
          component={NetworkScreen}
          options={(navigation, route) =>
            Header(navigation, route, "people", "Network")
          }
        />
        <Tab.Screen
          name={Screens.POST_STACK}
          component={PostScreen}
          options={(navigation, route) =>
            Header(navigation, route, "add-circle", "Post", "close", true)
          }
        />
        <Tab.Screen
          name={Screens.NOTIFICATION_STACK}
          component={NotificationScreen}
          options={(navigation, route) =>
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
          name={Screens.JOB_STACK}
          component={JobScreen}
          options={(navigation, route) =>
            Header(navigation, route, "briefcase", "Job")
          }
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
