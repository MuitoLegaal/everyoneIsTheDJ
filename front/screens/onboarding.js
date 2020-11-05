import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import Carousel from './carousel'
// import socketIOClient from "socket.io-client";

// var socket = socketIOClient("http://192.168.0.40:3000");




export default function Onboarding({navigation}) {
  
  return (
    <View style={styles.container}>
      <Carousel />
      <Text style={styles.text}>Vous êtes :</Text>


      <Button title="Hôte"
        buttonStyle={{
          backgroundColor: '#E59622',
          // paddingLeft: 120,
          // paddingRight: 120,
          // paddingTop: 10,
          // paddingBottom: 10,
          // marginBottom: 20,
          borderRadius: 10
        }}
        onPress={() => navigation.navigate('DJhoteFirstScreen')}
      ></Button>

      <Text style={{ color: '#fff', textDecorationLine: 'none', marginTop: '2%',marginBottom: '2%', textAlign: 'center', }}> Ou </Text>

      <Button title="Invité"
        buttonStyle={{
          backgroundColor: '#584DAD',
          borderRadius: 10       
        }}
        onPress={() => navigation.navigate('Enregistrement') }
      ></Button>


<Text style={{color: "#fff", textAlign: 'center'}}>bouton à supprimer avant présentation de l'app</Text>
<Button title="Page où je travaille"
        buttonStyle={{
          backgroundColor: '#04FF00',
          borderRadius: 10       
        }}
        // ---------------------------------------------------------------------------------------------------------------------------------
        // ------ mettez le screen sur lequel vous voulez travailler rapidement ci-dessous. Exemple navigation.navigate('HomeHost')} -------
        // ---------------------------------------------------------------------------------------------------------------------------------

        onPress={() => navigation.navigate('Moderation') }

      
      ></Button>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131313',
    alignItems: 'stretch',
    justifyContent: 'center',
    textAlign: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Roboto-Regular',
    marginBottom: 20,
    textAlign: 'center',
  }

});
