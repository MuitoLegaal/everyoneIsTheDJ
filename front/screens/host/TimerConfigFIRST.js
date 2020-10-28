import React from 'react';
import { View, Text, } from 'react-native';
import { Button } from 'react-native-elements';

function TimerConfigFIRST(props){
    return (
      <View style={{ flex: 1, backgroundColor:'#2ecc71', justifyContent: 'center', alignItems: 'center'}}>  
        <Text>Configuration du compte à rebours par l'hôte (1er tour de vote)</Text>

<Button title="Lancer le vote (prochain screen VoteHost)" 
              onPress={() => props.navigation.navigate('VoteHost')}
        ></Button>


              {/* ------------FLECHE DE RETOUR DEFINIE ICI EN DESSOUS (supprimer tout le bouton) ------------- */}
              <Button buttonStyle={{paddingTop: 15}} title="<- flèche retour vers création de liste basé sur TOP124 si 1er vote de l'évènement" 
                    onPress={() => props.navigation.navigate('SongListCreation')}
              ></Button> 

      </View>
    );
  }

  export default TimerConfigFIRST;