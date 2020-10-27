import React from 'react';
import { View, Text, } from 'react-native';
import { Button } from 'react-native-elements';


function EventCreation(props){
    return (
      
      <View style={{ flex: 1, backgroundColor:'#2ecc71', justifyContent: 'center', alignItems: 'center'}}>  
        <Text>Création d'évènement par l'hôte</Text>

        <Button title="Créer l'évènement" 
              onPress={() => props.navigation.navigate('SongListCreation')}
        ></Button>

              {/* ------------FLECHE DE RETOUR DEFINIE ICI EN DESSOUS (supprimer tout le bouton) ------------- */}
              <Button buttonStyle={{paddingTop: 15}} title="<- flèche retour en haut" 
                    onPress={() => props.navigation.navigate('HomeHost')}
              ></Button> 

      </View>
    );
  }

  export default EventCreation;