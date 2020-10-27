console.disableYellowBox = true;
import React , { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import {createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

// import Onboarding
import Onboarding from './screens/onboarding';

// import screens Host
import SignIn from './screens/host/SignIn';
import SignUp from './screens/host/SignUp';
import HomeInvite from './screens/guest/homeinvite';

//import screens Guest
import DJhoteFirstScreen from './screens/host/DJhoteFirstScreen';
import enregistrement from './screens/guest/enregistrement';
import homeinvite from './screens/guest/homeinvite';
import nouveauvote from './screens/guest/nouveauvote';
import validationvote from './screens/guest/validationvote';
import winnerguest from './screens/guest/winnerguest';


const getFonts = () => Font.loadAsync({
    'Staatliches': require('./assets/fonts/Staatliches/Staatliches-Regular.ttf'),
    'Roboto-Regular': require('./assets/fonts/Roboto/Roboto-Regular.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto/Roboto-Bold.ttf'),
  })

  var StackNavigator = createStackNavigator({
    Onboarding:  Onboarding,  
    DJhoteFirstScreen: DJhoteFirstScreen,
    enregistrement: enregistrement,
    homeinvite: homeinvite,
    nouveauvote: nouveauvote,
    validationvote: validationvote,
    winnerguest: winnerguest
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