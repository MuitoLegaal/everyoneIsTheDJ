import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import Carousel from './carousel'


export default function Onboarding({navigation}) {
  return (
    <View style={styles.container}>
        <Carousel/>
        <Text style={styles.text}>Vous êtes :</Text>
        
        
        <Button title="Hôte" 
        buttonStyle={{
          backgroundColor: '#E59622',
          paddingLeft: 120,
          paddingRight: 120,
          paddingTop:10,
          paddingBottom:10,
          marginBottom: 20,
        }}
        onPress={() => navigation.navigate('DJhoteFirstScreen')}
        ></Button>

        <Text style={{ color: '#fff', textDecorationLine: 'none', marginBottom: 20 }}> Ou </Text>

        <Button title="Invité" 
        buttonStyle={{
          backgroundColor: '#584DAD',
          paddingLeft: 120,
          paddingRight: 120,
          paddingTop:10,
          paddingBottom:10,
          marginBottom: 20,         
        }}
        onPress={() => navigation.navigate('enregistrement')}
        ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131313',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
   text: {
      color: '#fff',
      fontSize: 20,
      fontFamily:'Roboto-Regular',
      marginBottom: 20
  }

});
