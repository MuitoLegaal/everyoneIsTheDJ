import React from 'react';
import { View, Text, } from 'react-native';
import { Button } from 'react-native-elements';

function Moderation(props){
    return (
      <View style={{ flex: 1, backgroundColor:'#2ecc71', justifyContent: 'center', alignItems: 'center'}}>  
        <Text>Moderation par l'hôte</Text>

        <Button title="Valider la liste" 
              onPress={() => props.navigation.navigate('TimerConfig')}
        ></Button>

      </View>
    );
  }

  export default Moderation;