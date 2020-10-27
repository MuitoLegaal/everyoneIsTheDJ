import React from 'react';
import { View, Text, } from 'react-native';
import { Button } from 'react-native-elements';


function TimerConfig(props){
    return (
      <View style={{ flex: 1, backgroundColor:'#2ecc71', justifyContent: 'center', alignItems: 'center'}}>  
        <Text>Configuration du compte à rebours par l'hôte</Text>

        <Button title="Lancer le vote après créartion de la soirée (prochain screen ShareEvent)" 
              onPress={() => props.navigation.navigate('ShareEvent')}
        ></Button>

<Button title="Lancer le vote (prochain screen VoteHost)" 
              onPress={() => props.navigation.navigate('VoteHost')}
        ></Button>


              {/* ------------FLECHE DE RETOUR DEFINIE ICI EN DESSOUS (supprimer tout le bouton) ------------- */}
              <Button buttonStyle={{paddingTop: 15}} title="<- flèche retour vers création de liste basé sur TOP124 si 1er vote de l'évènement" 
                    onPress={() => props.navigation.navigate('SongListCreation')}
              ></Button> 

                            {/* ------------FLECHE DE RETOUR DEFINIE ICI EN DESSOUS (supprimer tout le bouton) ------------- */}
                            <Button buttonStyle={{paddingTop: 15}} title="<- flèche retour vers modération de titres suggérés" 
                    onPress={() => props.navigation.navigate('Moderation')}
              ></Button> 

      </View>
    );
  }

  export default TimerConfig;