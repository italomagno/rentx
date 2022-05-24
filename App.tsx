import React from 'react';


import { ThemeProvider } from 'styled-components';
import theme from './src/styles/theme'
import {

Archivo_400Regular,
Archivo_500Medium,
Archivo_600SemiBold,

} from '@expo-google-fonts/archivo'
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,

} from '@expo-google-fonts/inter'


import * as SplashScreen from 'expo-splash-screen';

import { Home } from './src/screens/Home';
import { useState } from 'react';
import { CarDetails } from './src/screens/CarDetails';

export default function App() {
  const [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
    Inter_400Regular,
    Inter_500Medium,
  })
  if(!fontsLoaded){
    return null
  }

  return (
    <ThemeProvider theme={theme}>
      
     <CarDetails />
    </ThemeProvider>


  );
}

