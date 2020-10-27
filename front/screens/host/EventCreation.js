import React from 'react';
import { View, Text, } from 'react-native';


function EventCreation(props){
    return (
      <View style={{ flex: 1, backgroundColor:'#2ecc71', justifyContent: 'center', alignItems: 'center'}}>  
        <Text>Création d'évènement par l'hôte</Text>

        <Button title="Créer l'évènement" 
              onPress={() => props.navigation.navigate('SongListCreation')}
        ></Button>

      </View>
    );
  }

  export default EventCreation;