import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

import Colors from '../Utils/Colors';
const ReportProblem = () => {
  const [problemDescription, setProblemDescription] = useState('');
  const navigation = useNavigation();
  const handleSubmit = () => {
    console.log('Problem Description:', problemDescription);
    setProblemDescription('');
    navigation.navigate('SETTINGS');
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        style={{
          height: 150,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 20,
          padding: 10,
        }}
        multiline
        placeholder="Describe the problem..."
        value={problemDescription}
        onChangeText={(text) => setProblemDescription(text)}
      />
      <Button color={Colors.PURPLE} title="Report" onPress={handleSubmit} />
    </View>
  );
};

export default ReportProblem;
