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

// Import des composants liés à l'hôte ci-dessous
import DJhoteFirstScreen from './screens/host/DJhoteFirstScreen';
import EventCreation from './screens/host/EventCreation';
import Historic from './screens/host/Historic';
import HomeHost from './screens/host/HomeHost';
import MentionsLegales from './screens/host/MentionsLegales';
import Moderation from './screens/host/Moderation';
import Parameters from './screens/host/Parameters';
import ShareEvent from './screens/host/ShareEvent';
import SignIn from './screens/host/SignIn';
import SignUp from './screens/host/SignUp';
import TimerConfig from './screens/host/TimerConfig';
import VoteHost from './screens/host/VoteHost';
import Winner from './screens/host/winnerhost';

//import screens Guest
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
    enregistrement: enregistrement,
    homeinvite: homeinvite,
    nouveauvote: nouveauvote,
    validationvote: validationvote,
    winnerguest: winnerguest,
    DJhoteFirstScreen: DJhoteFirstScreen,
    EventCreation: EventCreation,
    Historic: Historic,
    HomeHost: HomeHost,
    MentionsLegales: MentionsLegales,
    Moderation: Moderation,
    Parameters: Parameters,
    ShareEvent: ShareEvent,
    SignIn: SignIn,
    SignUp: SignUp,
    TimerConfig: TimerConfig,
    VoteHost: VoteHost,
    WinnerHost: Winner,
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
        <AppLoading
          startAsync={getFonts}
          onFinish={()=> setFontsLoaded(true)}
        />


        
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