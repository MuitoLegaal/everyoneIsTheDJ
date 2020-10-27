console.disableYellowBox = true;
import React , { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import {createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

// import Carousel from './screen/carousel';
import SignIn from './screens/host/SignIn'; // attention c'est ./screen avec un "s"
import SignUp from './screens/host/SignUp'; // attention c'est ./screen avec un "s"
import HomeInvite from './screens/guest/homeinvite';
import Onboarding from './screens/onboarding';
import DJhoteFirstScreen from './screens/host/DJhoteFirstScreen';


const getFonts = () => Font.loadAsync({
    'Staatliches': require('./assets/fonts/Staatliches/Staatliches-Regular.ttf'),
    'Roboto-Regular': require('./assets/fonts/Roboto/Roboto-Regular.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto/Roboto-Bold.ttf'),
  })

  var StackNavigator = createStackNavigator({
    Onboarding:  Onboarding,  
    DJhoteFirstScreen: DJhoteFirstScreen,
    // ExempleB:  ExempleScreenB,
  },
  {headerMode: 'none'}
  );

  const Navigation = createAppContainer(StackNavigator);

 export default function App() {

  const [ fontsLoaded, setFontsLoaded ] = useState(false);


  if(fontsLoaded){
    return (
      //<HomeInvite/>
     //<Onboarding/>
     <Navigation/>
     //<DJhoteFirstScreen/>
    )
  } else {
      return (
        // <AppLoading
        //   startAsync={getFonts}
        //   onFinish={()=> setFontsLoaded(true)}
        // />
        // <AppLoading
        //   startAsync={getFonts}
        //   onFinish={()=> setFontsLoaded(true)}
        // />
        <SignUp/>
        
      )
    } 
  }



  // pour la navigation via StackNavigator, coller ce genre de lien dans les screens
// function ExempleScreenA(props){
//   return (
//     <View> <Button title="Go to page B"
//      onPress={() => props.navigation.navigate('ScreenB')} />
//     </View>
//   );
// }