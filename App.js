/*import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AboutScreen from './src/resident/presentation/screens/about';
import ProfileScreen from './src/resident/presentation/screens/proprofile';
const Stack = createStackNavigator();
export default function App() {
  return (
<NavigationContainer>
       <Stack.Navigator initialRouteName="ProfileScreen">
                <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
                <Stack.Screen name="AboutScreen" component={AboutScreen} />

       </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
import { View, Text } from 'react-native'
import React from 'react'
import Routes from './src/Routes'
export default function App() {
  return (

<Routes/>
    )
}