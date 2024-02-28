import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
const ProfileScreen = ({navigation }) => {

  return (

    
    <View style={styles.container}>
      {/* Notification Icon */}
      <TouchableOpacity style={styles.iconContainer}>
        <Ionicons name="notifications" size={20} color="#333333" />
      </TouchableOpacity>

      {/* Setting Icon */}
      <TouchableOpacity style={styles.iconContainer}>
        <Ionicons name="settings" size={20} color="#333333" />
      </TouchableOpacity>
      {/* Cover Photo */}
      <TouchableOpacity onPress={() => console.log('Cover photo pressed')}>
        <Image
          source={require('../../../../assets/LogoTawasalna.jpg')} // Placeholder image
          style={styles.coverPhoto}
        />
      </TouchableOpacity>
      
      {/* Profile Picture */}
      <TouchableOpacity onPress={() => console.log('Profile picture pressed')} style={styles.profilePictureContainer}>
        <Image
          source={require('../../../../assets/photoprofil.png')} // Placeholder image
          style={styles.profilePicture}
        />
      </TouchableOpacity>
      
      {/* Basic Information */}
      <View style={styles.basicInfoContainer}>
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.jobTitle}>Software Developer</Text>
        {/* Add more basic information here */}
      </View>
      
      {/* Sections */}
      <View style={styles.sectionsContainer}>
        {/* Left Section */}
        <View style={styles.leftSection}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Posts</Text>
            {/* Add posts content here */}
          </View>
         <View style={styles.section}>
  <TouchableOpacity onPress={() => navigation.navigate('AboutScreen')}>
    <Text style={styles.sectionTitle}>About</Text>
  </TouchableOpacity>
</View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Connections</Text>
            {/* Add connections content here */}
          </View>
        </View>
        
        {/* Right Section */}
        <View style={styles.rightSection}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Media</Text>
            {/* Add media content here */}
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Videos</Text>
            {/* Add videos content here */}
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Events</Text>
            {/* Add events content here */}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', // White background
  },
  coverPhoto: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  profilePictureContainer: {
    position: 'absolute',
    top: 100,
    left: '50%',
    marginLeft: -50, // Center the profile picture horizontally
    borderRadius: 50,
    overflow: 'hidden', // Clip the image to the border radius
  },
  profilePicture: {
    width: 100,
    height: 100,
  },
  basicInfoContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333', // Dark text color
  },
  jobTitle: {
    fontSize: 16,
    color: '#666666', // Medium text color
  },
  sectionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  leftSection: {
    flex: 1,
    marginRight: 10,
  },
  rightSection: {
    flex: 1,
    marginLeft: 10,
  },
  section: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC', // Light border color
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333333', // Dark text color
  },
});

export default ProfileScreen;
