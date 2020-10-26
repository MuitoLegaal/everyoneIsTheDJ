console.disableYellowBox = true;
import React , { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import WinnerHost from './screens/winnerhost';
import WinnerGuest from './screens/winnerguest';
import Onboarding from './screens/onboarding';



const getFonts = () => Font.loadAsync({
    'Staatliches': require('./assets/fonts/Staatliches/Staatliches-Regular.ttf'),
    'Roboto-Regular': require('./assets/fonts/Roboto/Roboto-Regular.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto/Roboto-Bold.ttf'),
  })

export default function App() {

  const [ fontsLoaded, setFontsLoaded ] = useState(false);

  if(fontsLoaded){
    return (
      <WinnerHost/>
    )
  } else {
      return (
        <AppLoading
          startAsync={getFonts}
          onFinish={()=> setFontsLoaded(true)}
        />
      )
    } 
  }