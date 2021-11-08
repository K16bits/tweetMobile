import React from 'react';
import Router from './router'
import AppLoading from 'expo-app-loading'
import {
  useFonts, 
  Inconsolata_400Regular,
  Inconsolata_500Medium,
  Inconsolata_900Black
} from '@expo-google-fonts/inconsolata'

import { AuthProvider } from './src/contexts/auth';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inconsolata_400Regular,
    Inconsolata_500Medium,
    Inconsolata_900Black
  });

  if(!fontsLoaded){
    return <AppLoading/>;
  }
  
  return (
    <AuthProvider>
      <Router/>
    </AuthProvider>
  );
}
