import React from 'react';
import { View, Text, } from 'react-native';


function VoteHost(props){
    return (
      <View style={{ flex: 1, backgroundColor:'#2ecc71', justifyContent: 'center', alignItems: 'center'}}>  
        <Text>L'hôte vote ici</Text>

        <Button title="Valider mon vote" 
              onPress={() => props.navigation.navigate('HomeHost')} // sur figma le lien renvoie vers la page de modération ? Ici, je renvoie vers la Home.
        ></Button>

      </View>
    );
  }

  export default VoteHost;