import React from 'react';
import { View, Text, } from 'react-native';


function EventCreation(){
    return (
      <View style={{ flex: 1, backgroundColor:'#2ecc71', justifyContent: 'center', alignItems: 'center'}}>  
        <Text>Création d'évènement par l'hôte</Text>
      </View>
    );
  }

  export default EventCreation;