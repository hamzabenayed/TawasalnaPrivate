import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.TextInput`
  width: 80%;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 20px;
  padding: 10px;
`;

export const Button = styled.TouchableOpacity`
  width: 80%;
  height: 40px;
  background-color: #6D28D9;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px; 
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export const TawsalnaLogo = styled.Image`
  width: 350px;
  height: 100px;
    margin-bottom: 10px; 
`;
const FacebookIconWrapper = styled.View`
  margin-top: 13px; 
  margin-right: 10px; 
`;
export const FacebookIcon = () => (
    <FacebookIconWrapper>
  <Ionicons name="logo-facebook" size={24} color="blue" />
  </FacebookIconWrapper>
);

export const EmailIcon = () => (
  <Ionicons name="mail" size={24} color="black" />
);

export const TwitterIcon = () => (
  <Ionicons name="logo-twitter" size={24} color="skyblue" />
);

export const OrText = styled.Text`
  color: black;
  font-size: 16px;
  font-weight: bold;
`;

export const SocialMediaLogin = styled.Text`
  color: #6D28D9;
  margin-top: 15px; 
  font-size: 16px;
  font-weight: bold;
`;