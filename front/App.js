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
import TimerConfigFIRST from './screens/host/TimerConfigFIRST';
import TimerConfigSEC from './screens/host/TimerConfigSEC';
import VoteHost from './screens/host/VoteHost';
import Winner from './screens/host/winnerhost';
import SongListCreation from './screens/host/SongListCreation';
import Burger from './screens/burger';

//import screens Guest
import Enregistrement from './screens/guest/enregistrement';
import Homeinvite from './screens/guest/homeinvite';
import Nouveauvote from './screens/guest/nouveauvote';
import Validationvote from './screens/guest/validationvote';
import Winnerguest from './screens/guest/winnerguest';
import AjoutTitres from './screens/guest/AjoutTitres'


const getFonts = () => Font.loadAsync({
    'Staatliches': require('./assets/fonts/Staatliches/Staatliches-Regular.ttf'),
    'Roboto-Regular': require('./assets/fonts/Roboto/Roboto-Regular.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto/Roboto-Bold.ttf'),
  })

  var StackNavigator = createStackNavigator({
    Onboarding:  Onboarding,  
    Enregistrement: Enregistrement,
    Homeinvite: Homeinvite,
    Nouveauvote: Nouveauvote,
    Validationvote: Validationvote,
    Winnerguest: Winnerguest,
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
    TimerConfigFIRST: TimerConfigFIRST,
    TimerConfigSEC: TimerConfigSEC,
    VoteHost: VoteHost,
    WinnerHost: Winner,
    SongListCreation: SongListCreation,
    //Burger: Burger,
  },
  {headerMode: 'none'}
  );

  const Navigation = createAppContainer(StackNavigator);

 export default function App() {

  const [ fontsLoaded, setFontsLoaded ] = useState(false);


  if(fontsLoaded){
    return (

     <Navigation/>
  
    )
  } else {
      return (
       
        <AppLoading
          startAsync={getFonts}
          onFinish={()=> setFontsLoaded(true)}
        />  


          //  <AjoutTitres/>  
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