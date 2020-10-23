import React, {useState} from 'react';
import { StyleSheet, ImageBackground } from 'react-native';




function connexion() {
    
    
    return (
    <ImageBackground source={require('../assets/logoMini.png')} style={styles.container}>

       
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});


  export default connexion;