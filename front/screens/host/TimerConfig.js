import React from 'react';
import { View, Text, } from 'react-native';


function TimerConfig(props){
    return (
      <View style={{ flex: 1, backgroundColor:'#2ecc71', justifyContent: 'center', alignItems: 'center'}}>  
        <Text>Configuration du compte à rebour par l'hôte</Text>

        <Button title="Lancer le vote après créartion de la soirée (prochain screen ShareEvent)" 
              onPress={() => props.navigation.navigate('ShareEvent')}
        ></Button>

<Button title="Lancer le vote (prochain screen VoteHost)" 
              onPress={() => props.navigation.navigate('VoteHost')}
        ></Button>

      </View>
    );
  }

  export default TimerConfig;