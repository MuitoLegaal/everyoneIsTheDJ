import React from 'react';
import { View, Text, } from 'react-native';


function SongListCreation(props){
    return (
      <View style={{ flex: 1, backgroundColor:'#2ecc71', justifyContent: 'center', alignItems: 'center'}}>  
        <Text>Création de la liste de chanson par l'hôte</Text>

        <Button title="Valider la liste" 
              onPress={() => props.navigation.navigate('TimerConfig')}
        ></Button>

      </View>
    );
  }

  export default SongListCreation;