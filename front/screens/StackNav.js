import React , { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import {createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import Onboarding
import Onboarding from './onboarding';
import AppDrawer from './Drawer';


// Import des composants liés à l'hôte ci-dessous
import DJhoteFirstScreen from './host/DJhoteFirstScreen';
import EventCreation from './host/EventCreation';
import Historic from './host/Historic';
import HomeHost from './host/HomeHost';
import MentionsLegales from './host/MentionsLegales';
import Moderation from './host/Moderation';
import Parameters from './host/Parameters';
import ShareEvent from './host/ShareEvent';
import SignIn from './host/SignIn';
import SignUp from './host/SignUp';
import TimerConfigFIRST from './host/TimerConfigFIRST';
import VoteHost from './host/VoteHost';
import Winner from './host/winnerhost';
import SongListCreation from './host/SongListCreation';
import Countdown from './countdown';


//import screens Guest
import Enregistrement from './guest/enregistrement';
import Nouveauvote from './guest/nouveauvote';
import Validationvote from './guest/validationvote';
import Winnerguest from './guest/winnerguest';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator 

// ------ option de screen initial. ne fonctionne pas ? -------
        // initialRouteName='HomeHost'

        headerMode={false}
    >
      {/* <Stack.Screen name="Drawer" component={AppDrawer} /> */}
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Enregistrement" component={Enregistrement} />
      <Stack.Screen name="Nouveauvote" component={Nouveauvote} />
      <Stack.Screen name="Validationvote" component={Validationvote} />
      <Stack.Screen name="Winnerguest" component={Winnerguest} />
      <Stack.Screen name="DJhoteFirstScreen" component={DJhoteFirstScreen} />
      <Stack.Screen name="EventCreation" component={EventCreation} />
      <Stack.Screen name="Historic" component={Historic} />
      <Stack.Screen name="HomeHost" component={HomeHost} />
      <Stack.Screen name="MentionsLegales" component={MentionsLegales} />
      <Stack.Screen name="Moderation" component={Moderation} />
      <Stack.Screen name="Parameters" component={Parameters} />
      <Stack.Screen name="ShareEvent" component={ShareEvent} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="TimerConfigFIRST" component={TimerConfigFIRST} />
      <Stack.Screen name="VoteHost" component={VoteHost} />
      <Stack.Screen name="WinnerHost" component={Winner} />
      <Stack.Screen name="Countdown" component={Countdown} />
      <Stack.Screen name="SongListCreation" component={SongListCreation} />

    </Stack.Navigator>
  );
}

export default MyStack;