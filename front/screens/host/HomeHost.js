import React from 'react';
import { View, Text, } from 'react-native';
import { Button } from 'react-native-elements';


function HomeHost(props){
    return (
      <View style={{ flex: 1, backgroundColor:'#2ecc71', justifyContent: 'center', alignItems: 'center'}}>  
        <Text>Home host</Text>
        
        <Button title="Découvrir le gagnant" 
              onPress={() => props.navigation.navigate('WinnerHost')}
        ></Button>

        <Button title="Nouveau vote" 
              onPress={() => props.navigation.navigate('Moderation')}
        ></Button>

        <Button title="+ Nouvelle soirée" 
              onPress={() => props.navigation.navigate('EventCreation')}
        ></Button>

      </View>
    );
  }

  export default HomeHost;