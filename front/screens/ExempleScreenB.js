import React from 'react';
import { View, Text, Button} from 'react-native';
import {createAppContainer } from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';


function ExempleScreenB(props){
    return (
      <View style={{ flex: 1, backgroundColor:'#2ecc71', justifyContent: 'center', alignItems: 'center'}}>  
      
              <Button title="Go to page B"
                    onPress={() => props.navigation.navigate('ScreenA')}
              />

      </View>
    );
  }

  export default ExempleScreenB;
