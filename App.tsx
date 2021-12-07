import 'react-native-gesture-handler';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import React from 'react';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';

import { Routes } from './src/routers';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';

import theme from './src/global/styles/theme';

import { AuthProvider, useAuth } from './src/hook/auth';

export default function App() {
  const [fontLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });
  const { userStorageLoading } = useAuth();

  if (!fontLoaded || userStorageLoading) {
    return <AppLoading />
  }
  return (
    <ThemeProvider theme={theme}>
        <StatusBar backgroundColor="transparent" translucent={true}/>
        <AuthProvider>
          <Routes />
        </AuthProvider>
    </ThemeProvider>
  ) 
}
