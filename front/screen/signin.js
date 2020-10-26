import React, {useState} from 'react';
import { StyleSheet, ImageBackground, Text } from 'react-native';




function connexion() {
    
    
    return (
    <ImageBackground source={require('../assets/logoMini.png')} style={styles.container}>
      <Text style={styles.text}>Coucou</Text>
       
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily:'Staatliches'
  },
});


export default connexion;