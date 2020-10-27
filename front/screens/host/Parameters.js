import React from 'react';
import { View, Text, } from 'react-native';



function Parameters(props){
    return (
      <View style={{ flex: 1, backgroundColor:'#2ecc71', justifyContent: 'center', alignItems: 'center'}}>  
        <Text>Paramètres de l'hôte</Text>

        <Button title="Politique d'utilisation" 
              onPress={() => props.navigation.navigate('WinnerHost')}
        ></Button>

        
              {/* ------------FLECHE DE RETOUR DEFINIE ICI EN DESSOUS (supprimer tout le bouton) ------------- */}
              <Button buttonStyle={{paddingTop: 15}} title="<- flèche retour en haut" 
                    onPress={() => props.navigation.navigate('HomeHost')}
              ></Button> 

      </View>
    );
  }

  export default Parameters;