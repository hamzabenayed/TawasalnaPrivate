import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const AboutScreen = () => {
  const [info, setInfo] = useState('');
  const [position, setPosition] = useState('');
  const [location, setLocation] = useState('');
  const [joinDate, setJoinDate] = useState('');

  const handleSave = () => {
    // Logic to save information
    console.log('Information saved:', info);
    console.log('Position:', position);
    console.log('Location:', location);
    console.log('Join Date:', joinDate);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Information</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your information here"
        onChangeText={text => setInfo(text)}
        multiline
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your position"
        onChangeText={text => setPosition(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your location"
        onChangeText={text => setLocation(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter join date"
        onChangeText={text => setJoinDate(text)}
      />
      <Button title="Save" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});

export default AboutScreen;
