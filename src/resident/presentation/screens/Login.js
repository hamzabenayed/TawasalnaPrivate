import React from 'react';
import { Container , Input , Button , ButtonText,TawsalnaLogo,FacebookIcon,OrText,SocialMediaLogin,TwitterIcon,EmailIcon} from '../src/resident/presentation/components/styles';
import { useNavigation } from '@react-navigation/native';
const Login = () => {
      const navigation = useNavigation();
      const handleLogin = () => {
    // Logique de connexion ici
  };
const handleSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <Container>
<TawsalnaLogo resizeMode="cover" source={require('./../assets/LogoTawasalna.jpg')} />
      <Input
        placeholder="email"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCompleteType="email"
        autoCorrect={false}
      />
      <Input
        placeholder="password"
        secureTextEntry
        autoCapitalize="none"
        autoCompleteType="password"
        autoCorrect={false}
      />
      <Button onPress={handleLogin}>
        <ButtonText>Login</ButtonText>
      </Button>
      <Button onPress={handleSignUp}>
        <ButtonText>SignUp</ButtonText>
      </Button>
<OrText>---------------------or--------------------</OrText>
<SocialMediaLogin>Social Media Login</SocialMediaLogin>
<FacebookIcon/>
<EmailIcon/>
<TwitterIcon/>
    </Container>
  );
};

export default Login;