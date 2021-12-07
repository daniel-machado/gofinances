import React, { useState } from 'react';
import { ActivityIndicator, Alert, Platform } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import AppleSvg from '../../assets/apple.svg';
import GoogleSvg from '../../assets/google.svg';
import LogoSvg from '../../assets/logo.svg';
import theme from '../../global/styles/theme';

import { useAuth } from '../../hook/auth';

import { SignInSocialButton } from '../../components/SignInSocialButton'

import {
  Container,
  Header,
  TitleWrapper,
  Title,
  SignInTitle,
  Footer,
  FooterWrapper
} from './styles';



export function SignIn() { 
  const { signInWithGoogle, signInWithApple } = useAuth();
  const [isLoading, setIsLoading] = useState(false); 

  async function handleSigInWithGoogle() { 
    try {
      setIsLoading(true);
      return await signInWithGoogle();
    } catch (error) {
      console.log(error);
      Alert.alert('Não foi possível conectar ao Google');
      setIsLoading(false);
    }
  }

  async function handlesignInWithApple() { 
    try {
      setIsLoading(true);
      return await signInWithApple();
    } catch (error) {
      console.log(error);
      Alert.alert('Não foi possível conectar ao Apple');
      setIsLoading(false);
    } 
  }


  return (
    <Container>
      <Header>
        <TitleWrapper>
          <LogoSvg
            width={RFValue(120)}
            height={RFValue(68)}
          />
          <Title>
            Controle suas {"\n"} financas de forma{"\n"} muito simples
          </Title>
        </TitleWrapper>

        <SignInTitle>
          Faça seu login com {"\n"}uma das contas abaixo
        </SignInTitle>
      </Header>
      
      <Footer>
        <FooterWrapper>
          <SignInSocialButton
            title="Entrar com Google"
            svg={GoogleSvg}
            onPress={handleSigInWithGoogle}
          />
          {
            Platform.OS === 'ios' &&
            <SignInSocialButton
              title="Entrar com Apple"
              svg={AppleSvg}
              onPress={handlesignInWithApple}
            />
          }
          
        </FooterWrapper>

        {isLoading &&
          <ActivityIndicator
          color={theme.colors.shape}
          style={{marginTop: 18}}
          />}


      </Footer>

    </Container>
  );
}