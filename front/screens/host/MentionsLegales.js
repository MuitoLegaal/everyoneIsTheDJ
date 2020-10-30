import React from 'react';
import { View, Text, } from 'react-native';
import { Button } from 'react-native-elements';



function MentionsLegales(props){

  console.log(props);

    return (
      <View style={{ flex: 1, backgroundColor:'#2ecc71', justifyContent: 'center', alignItems: 'center'}}>  

        
        <Text>Mentions Legales de l'hôte</Text>

              {/* ------------FLECHE DE RETOUR DEFINIE ICI EN DESSOUS (supprimer tout le bouton) ------------- */}
              <Button buttonStyle={{paddingTop: 15}} title="<- flèche retour" 
                    onPress={() => props.navigation.navigate('HomeHost')}
              ></Button> 

      </View>
    );
  }

  export default MentionsLegales;