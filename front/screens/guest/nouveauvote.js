import React, { useState } from 'react';
import { AppRegistry, View, Dimensions, StyleSheet, ImageBackground, Text, Image } from 'react-native';
import { Button, ListItem } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import CountDown from '../countdown';
import CheckBox from '../checkbox';


function nouveauvote({ navigation }) {

  const list = [
    {
      artist: 'Amy Farhfa',
      title: 'Vice President'
    },
    {
      artist: 'Chris Jackson',
      title: 'Vice Chairman'
    },
  // ...more items
  ]

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bienvenue dans l'évènement:</Text>
      <Text style={styles.title}>Anniv' de Bob</Text>
      <Image
        source={require('../../assets/picto-fete2.png')}
        style={{ width: 150, height: 150 }}
      />
      <Text style={{color: '#FF0060'}}>Vote en cours, il te reste :</Text>

      <Text>Votez pour le prochain titre:</Text>

      <CountDown/>

      {
    list.map((l, i) => (
      <ListItem key={i} style={styles.ListItem}  bottomDivider>
          <View>
          <Text style={{textAlign:'center'}}>{i}.</Text>
          <Text>Artiste: {l.artist}</Text>
          <Text>Titre: {l.title}</Text>
          </View>
          <CheckBox/>
     
         

      </ListItem>
    ))
  }

      <Button onPress={() => navigation.navigate('Homeinvite')} title="Retour"></Button>
      <Button title="Valider mon vote"
        onPress={() => navigation.navigate('Validationvote')}
        buttonStyle={{
          backgroundColor: '#FF0060',
          paddingLeft: 120,
          paddingRight: 120,
          paddingTop: 10,
          paddingBottom: 10,
          marginBottom: 20,
        }}></Button>
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
  wrap: {
    flexDirection: 'column',
    backgroundColor: '#131313',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    height: hp('100%'), // 70% of height device screen
    width: wp('100%')   // 80% of width device screen 
  },
  header: {
    backgroundColor: '#131313',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "row",

  },
  title: {
    color: '#fff',
    fontSize: 40,
    fontFamily: 'Staatliches'
  },
  subtitle: {
    color: '#fff',
    fontSize: 30,
    fontFamily: 'Staatliches',
    textAlign: 'center',
    paddingRight: 30,
    paddingLeft: 30,
    paddingBottom: 40
  },

  text: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Roboto-Regular',
    paddingRight: 30,
    paddingLeft: 30,
  },

  ListItem: {
    backgroundColor: '#131313',
    color: '#fff',
    justifyContent: 'flex-start',

  }
  // border: {
  //     color: '#fff',
  //     width: ('100%'),
  //     height: 2,
  // }
});

export default nouveauvote;