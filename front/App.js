console.disableYellowBox = true;
import React , { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import Carousel from './screen/carousel';
import HomeInvite from './screen/homeinvite';
import Onboarding from './screen/onboarding';
import SignIn from './screen/SignIn';



const getFonts = () => Font.loadAsync({
    'Staatliches': require('./assets/fonts/Staatliches/Staatliches-Regular.ttf'),
    'Roboto-Regular': require('./assets/fonts/Roboto/Roboto-Regular.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto/Roboto-Bold.ttf'),
  })

export default function App() {

  const [ fontsLoaded, setFontsLoaded ] = useState(false);

  if(fontsLoaded){
    return (
      //<Carousel/>
      //<HomeInvite/>
      // <View>
      //   <Text>Coucou</Text>
      // </View>
     <Onboarding/>
    )
  } else {
      return (
        // <AppLoading
        //   startAsync={getFonts}
        //   onFinish={()=> setFontsLoaded(true)}
        // />
        <SignIn></SignIn>
      )
    } 
  }