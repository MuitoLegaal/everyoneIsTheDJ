import React from 'react';
import { View, Text, } from 'react-native';


function Parameters(props){
    return (
      <View style={{ flex: 1, backgroundColor:'#2ecc71', justifyContent: 'center', alignItems: 'center'}}>  
        <Text>Paramètres de l'hôte</Text>

        <Button title="Politique d'utilisation" 
              onPress={() => props.navigation.navigate('WinnerHost')}
        ></Button>

      </View>
    );
  }

  export default Parameters;