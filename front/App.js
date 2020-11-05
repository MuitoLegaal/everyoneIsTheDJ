console.disableYellowBox = true;
import React , { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import {createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import EventName from './reducers/EventNameReducer'
import EventPass from './reducers/EventPasswordReducer'
import token from './reducers/token';
import hostId from './reducers/hostId';
import EventID from './reducers/EventIDReducer'
import EventPlaylist from './reducers/PlaylistReducer'
import VoteTimer from './reducers/timerReducer'



const getFonts = () => Font.loadAsync({
    'Staatliches': require('./assets/fonts/Staatliches/Staatliches-Regular.ttf'),
    'Roboto-Regular': require('./assets/fonts/Roboto/Roboto-Regular.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto/Roboto-Bold.ttf'),
  })


  import MyStack from './screens/StackNav';
  import AppDrawer from './screens/Drawer';


const store = createStore(combineReducers({EventName, token, hostId, EventPass, EventID, EventPlaylist, VoteTimer}))



function App() {

  const [ fontsLoaded, setFontsLoaded ] = useState(false);


  if(fontsLoaded){
    return (

      <Provider store={store}>

        <NavigationContainer>

            <AppDrawer/>

        </NavigationContainer>

      </Provider>


    )
  } else {
      return (

        <Provider store={store}>
       
          <AppLoading
            startAsync={getFonts}
            onFinish={()=> setFontsLoaded(true)}
          /> 

        </Provider> 



     
      )
    } 
  };

export default App;
