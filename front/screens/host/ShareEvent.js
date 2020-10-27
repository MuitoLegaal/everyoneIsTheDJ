import React from 'react';
import { View, Text, } from 'react-native';
import { Button } from 'react-native-elements';


function ShareEvent(props){
    return (
      <View style={{ flex: 1, backgroundColor:'#2ecc71', justifyContent: 'center', alignItems: 'center'}}>  
        <Text>Partage de l'event par l'hôte</Text>

        <Button title="Prendre part au vote" 
              onPress={() => props.navigation.navigate('VoteHost')}
        ></Button>

      </View>
    );
  }

  export default ShareEvent;