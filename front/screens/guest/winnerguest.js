import React, { Component } from 'react'
import { Image, View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome5';


export default function winnerguest ({navigation}) {
  return (
    <View style={styles.container}>
       <Image source={require('../../assets/logoMini.png')} />
       <Text style={{ color: '#fff' }}>Et le gagnant est ...</Text>
       <Icon name="trophy" size={200} color="#E59622"/>
        
        <Text style={{ color: '#fff' }}>1.</Text>
        <View style={styles.winner}>
        <Text style={{ color: '#fff' }}>Artiste: Lorem Ipsum</Text>
        <Text style={{ color: '#fff' }}>Titre: Lorem Ipsum</Text>
        </View>
        <Text style={{ color: '#fff' }}>2.</Text>
        <Text style={{ color: '#fff' }}>Artiste: Lorem Ipsum</Text>
        <Text style={{ color: '#fff' }}>Titre: Lorem Ipsum</Text>
        <Text style={{ color: '#fff' }}>3.</Text>
        <Text style={{ color: '#fff' }}>Artiste: Lorem Ipsum</Text>
        <Text style={{ color: '#fff' }}>Titre: Lorem Ipsum</Text>
        

        <Button title="Suivant"  onPress={() => navigation.navigate('Nouveauvote')} buttonStyle={{backgroundColor: '#FF0060'}}></Button>
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
    color: '#ffffff'
  },
  winner: {
    flex: 1,
    backgroundColor: '#E59622',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },


});