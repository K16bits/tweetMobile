import React from 'react';
import Router from './router'
import AppLoading from 'expo-app-loading'
import {
  useFonts, 
  Inconsolata_400Regular,
  Inconsolata_500Medium,
  Inconsolata_900Black
} from '@expo-google-fonts/inconsolata'

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
      <Router/>
  );
}
