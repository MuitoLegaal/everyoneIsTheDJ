import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

// import Onboarding
import Onboarding from './onboarding';

// Import des composants liés à l'hôte ci-dessous
import Historic from './host/Historic';
import HomeHost from './host/HomeHost';
import Parameters from './host/Parameters';

import MyStack from './StackNav';

const Drawer = createDrawerNavigator();

export default function AppDrawer() {
  return (

      <Drawer.Navigator initialRouteName="Home"
      drawerPosition= "right"
      edgeWidth= {50}
      drawerStyle={{
        backgroundColor: 'black',
        paddingTop: 30,
        width: 250,
      }}

      drawerContentOptions={{
        activeTintColor: 'white',
        inactiveTintColor: 'white',
        activeBackgroundColor: '#E69620',
        labelStyle: 'bold',
        labelStyle: {
          fontSize: 18,
        }
       }}
    
      >
        <Drawer.Screen name="MENU" component={MyStack} 
                              options={{
                                drawerIcon: ({focused, size}) => (
                                  <Icon name="times" size={25} color="#fff" />
                                )
                              }}
        />
        <Drawer.Screen name="ACCUEIL" component={HomeHost} 
                      options={{
                        drawerIcon: ({focused, size}) => (
                          <Icon name="home" size={25} color="#fff" />
                        )
                      }}
        />
        <Drawer.Screen name="HISTORIQUE" component={Historic} 
                      options={{
                        drawerIcon: ({focused, size}) => (
                          <Icon name="history" size={25} color="#fff" />
                        )
                      }}
        />
        <Drawer.Screen name="PARAMETRES" component={Parameters} 
                      options={{
                        drawerIcon: ({focused, size}) => (
                          <Icon name="cog" size={25} color="#fff" />
                        )
                      }}
        />
        <Drawer.Screen name="DECONNEXION" component={Onboarding} 
                      options={{
                        drawerIcon: ({focused, size}) => (
                          <Icon name="power-off" size={25} color="#fff" />
                        )
                      }}
        />
      </Drawer.Navigator>

  );
}