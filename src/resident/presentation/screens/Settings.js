import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Colors from '../Utils/Colors';
const Settings = ({ navigation }) => {
  const navigateToEditProfile = () => {
    navigation.navigate('Edit Profile');
  };

  const navigateToSecurity = () => {
    console.log('Security function');
  };

  const navigateToPrivacy = () => {
    console.log('Privacy function');
  };

  const navigateToSubscription = () => {
    console.log('Subscription function');
  };

  const navigateToSupport = () => {
    console.log('Support function');
  };

  const navigateToTermsAndPolicies = () => {
    navigation.navigate('Terms & Policies');
  };

  const navigateToFreeSpace = () => {
    console.log('Free Space function');
  };

  const navigateToDateSaver = () => {
    console.log('Date saver');
  };

  const navigateToReportProblem = () => {
    navigation.navigate('Report a Problem');
  };

  const addAccount = () => {
    console.log('Aadd account ');
  };

  const logout = () => {
    console.log('Logout');
  };

  const accountItems = [
    {
      icon: 'person-outline',
      text: ' Account Settings',
      action: navigateToEditProfile,
    },
    { icon: 'security', text: 'Security', action: navigateToSecurity },

    { icon: 'lock-outline', text: 'Privacy', action: navigateToPrivacy },
  ];

  const supportItems = [
    { icon: 'help-outline', text: 'Help & Support', action: navigateToSupport },
    {
      icon: 'info-outline',
      text: 'Terms and Policies',
      action: navigateToTermsAndPolicies,
    },
  ];

  const cacheAndCellularItems = [
    {
      icon: 'delete-outline',
      text: 'Free up space',
      action: navigateToFreeSpace,
    },
    { icon: 'save-alt', text: 'Date Saver', action: navigateToDateSaver },
  ];

  const actionsItems = [
    {
      icon: 'outlined-flag',
      text: 'Report a problem',
      action: navigateToReportProblem,
    },
    { icon: 'people-outline', text: 'Add Account', action: addAccount },
    { icon: 'logout', text: 'Log out', action: logout },
  ];

  const renderSettingsItem = ({ icon, text, action }) => (
    <TouchableOpacity
      onPress={action}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
        paddingLeft: 12,
        backgroundColor: Colors.LIGHT_WHITE,
      }}>
      <MaterialIcons name={icon} size={24} color="black" />
      <Text
        style={{
          marginLeft: 36,
          fontWeight: 600,
          fontSize: 16,
        }}>
        {text}{' '}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.WHITE,
      }}>
      <View
        style={{
          marginHorizontal: 12,
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 10,
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            position: 'absolute',
            left: 0,
          }}>
          <MaterialIcons name="keyboard-arrow-left" size={24} color={Colors.BLACK} />
        </TouchableOpacity>

        <Text>Settings</Text>
      </View>

      <ScrollView style={{ marginHorizontal: 12 }}>
        {/* Account Settings */}
        <View style={{ marginBottom: 12 }}>
          <Text
            style={{
              marginVertical: 10,
              backgroundColor: Colors.PURPLE,
            }}>
            Account
          </Text>
          <View
            style={{
              borderRadius: 12,
              backgrounColor: Colors.PURPLE,
            }}>
            {accountItems.map((item, index) => (
              <React.Fragment key={index}>{renderSettingsItem(item)}</React.Fragment>
            ))}
          </View>
        </View>

        {/* Support and About settings */}

        <View style={{ marginBottom: 12 }}>
          <Text style={{ marginVertical: 10, backgroundColor: Colors.PURPLE }}>
            Support & About{' '}
          </Text>
          <View
            style={{
              borderRadius: 12,
              backgrounColor: Colors.PURPLE,
            }}>
            {supportItems.map((item, index) => (
              <React.Fragment key={index}>{renderSettingsItem(item)}</React.Fragment>
            ))}
          </View>
        </View>

        {/* Cache & Cellular */}
        <View style={{ marginBottom: 12 }}>
          <Text
            style={{
              marginVertical: 10,
              backgroundColor: Colors.PURPLE,
            }}>
            Cache & Cellular{' '}
          </Text>
          <View
            style={{
              borderRadius: 12,
              backgrounColor: Colors.WHITE,
            }}>
            {cacheAndCellularItems.map((item, index) => (
              <React.Fragment key={index}>{renderSettingsItem(item)}</React.Fragment>
            ))}
          </View>
        </View>

        {/* Actions Settings */}

        <View style={{ marginBottom: 12 }}>
          <Text
            style={{
              marginVertical: 10,
              backgroundColor: Colors.PURPLE,
            }}>
            Actions
          </Text>
          <View
            style={{
              borderRadius: 12,
              backgrounColor: Colors.PURPLE,
            }}>
            {actionsItems.map((item, index) => (
              <React.Fragment key={index}>{renderSettingsItem(item)}</React.Fragment>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;
