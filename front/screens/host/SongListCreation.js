import React from 'react';
import { View, Text, } from 'react-native';
import { Button } from 'react-native-elements';


function SongListCreation(props){
    return (
      <View style={{ flex: 1, backgroundColor:'#2ecc71', justifyContent: 'center', alignItems: 'center'}}>  
        <Text>Création de la liste de chanson par l'hôte</Text>

        <Button title="Valider la liste" 
              onPress={() => props.navigation.navigate('TimerConfig')}
        ></Button>

        
              {/* ------------FLECHE DE RETOUR DEFINIE ICI EN DESSOUS (supprimer tout le bouton) ------------- */}
              <Button buttonStyle={{paddingTop: 15}} title="<- flèche retour en haut" 
                    onPress={() => props.navigation.navigate('EventCreation')}
              ></Button> 

      </View>
    );
  }

  export default SongListCreation;