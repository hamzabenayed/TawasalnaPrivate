
import { View, Text, StatusBar } from "react-native";
import React from 'react'
import Routes from './src/Routes'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import EditProfile from "./src/resident/presentation/screens/EditProfile";
import TermsAndPolicies from "./src/resident/presentation/screens/TermsAndPolicies";
import ReportProblem from "./src/resident/presentation/screens/ReportProblem";
import Profile2 from "./src/resident/presentation/screens/Profile2";
import Login from "./src/resident/presentation/screens/Login";
const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={Colors.WHITE} barStyle="dark-content" />
      <Stack.Navigator>
        <Stack.Screen name="LOGIN" component={Login} />
        <Stack.Screen
          name="ROUTES"
          component={Routes}
          options={{ headerShown: false }}
        />

        <Stack.Screen name="EDITPROFILE" component={EditProfile} />
        <Stack.Screen
          name="PROFILE2"
          component={Profile2}
          options={{ headerShown: false }}
        />

        <Stack.Screen name="Terms & Policies" component={TermsAndPolicies} />
        <Stack.Screen name="Report a Problem" component={ReportProblem} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}