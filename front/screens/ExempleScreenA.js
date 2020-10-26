import React from 'react';
import { View, Text, Button} from 'react-native';
import {createAppContainer } from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';


// test

function ExempleScreenA(props){
    return (
      <View style={{ flex: 1, backgroundColor:'#2ecc71', justifyContent: 'center', alignItems: 'center'}}>  

              <Button title="Go to page B"
                   onPress={() => props.navigation.navigate('ScreenB')}
              />

      </View>
    );
  }

  export default ExempleScreenA;
