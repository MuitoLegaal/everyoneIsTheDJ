import React from 'react';
import { View, Text, } from 'react-native';


function TimerConfig(){
    return (
      <View style={{ flex: 1, backgroundColor:'#2ecc71', justifyContent: 'center', alignItems: 'center'}}>  
        <Text>Configuration du compte à rebour par l'hôte</Text>
      </View>
    );
  }

  export default TimerConfig;