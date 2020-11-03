import React, { Component } from 'react'
import { Image, View, Text, StyleSheet, Link, ScrollView } from 'react-native'
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { faBaby, faBars } from '@fortawesome/free-solid-svg-icons'
import { Header } from 'react-native-elements'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
//import Icon from 'react-native-ionicons'


export default function Winner(props) {

  //var headerRight = <FontAwesomeIcon icon={faBars} size={35} style={{color: "white"}} onPress={() => props.navigation.openDrawer()}/>;
  var headerCenter = <Image source={require('../../assets/logoMini.png')} style={{width: 80, height: 82}} />

  return (
<View style={styles.container}>
    <View style={{height:150}}>
            <Header
              centerComponent={headerCenter}
              // rightComponent={headerRight}
              containerStyle={{backgroundColor: "#131313", height: '20%', alignItems: 'flex-start', borderBottomWidth:0,  justifyContent: 'flex-start'}}
            />

{/* burger menu un peu non académique fait par maxime. je n'arrive pas à mettre le onPress différemment. il y a un conflit quand je le mets autrement. onPress du burger marchait bien avec la mise en formede HomeHost qui existait jeudi, j'ai fait des tests encore samedi. Sur screen Historic et Parameters il continue de bien fonctionner */}
            <Button 
              buttonStyle={{
                backgroundColor: 'transparent',
                justifyContent: 'flex-end', 
                alignItems: 'flex-start',
              }}
                icon={
                  <FontAwesomeIcon icon={faBars} size={35} style={{color: "white"}}  onPress={() => props.navigation.openDrawer()}/>
                }
            /> 

    </View>
    <ScrollView style={styles.wrap}>
        <View style={{alignItems: 'center', justifyContent: 'center', borderTopWidth:1, borderTopColor: "#fff"}} >  
          <Text style={styles.subtitle}>Et le gagnant est ...</Text>
          <Icon name="trophy" size={100} color="#E59622" style={{marginTop:'5%', marginBottom:'5%'}}/>
        </View>

      
      <View style={styles.winner} >
        <Text style={{ color: '#fff' }}>1.</Text>
        <Text style={{ color: '#fff' }}>Artiste - Titre: %Lorem Ipsum%</Text>
        <Button 
              title="Lancer le titre" 
              //onPress={() => props.navigation.navigate('Moderation')}
              //onPress={()=>handleSignUp()}
              buttonStyle={{
                    backgroundColor: '#584DAD',
                    borderColor: '#584DAD',
                    borderWidth: 3,
                    borderRadius: 10,
                    marginTop:'5%'
                    }}
              titleStyle={{
                color: '#fff',
                fontFamily: 'Roboto-Bold'
              }}
              icon={ <FontAwesomeIcon icon={faBaby} size={20} style={{color:'#fff'}} /> }
              //icon={<Ionicons icon={ios-logo-youtube} size={35} style={{color: "white"}} />}
        />

      {/* <Text style={{ color: '#584DAD' }}>Lancer le titre <Icon name='youtube' size={20} color="#584DAD"/></Text> */}
      </View>

      {/* </Link> */}
      <Text style={{ color: '#fff' }}>2.</Text>
      <Text style={{ color: '#fff' }}>Artiste: Lorem Ipsum</Text>
      <Text style={{ color: '#fff' }}>Titre: Lorem Ipsum</Text>
      <Text style={{ color: '#fff' }}>3.</Text>
      <Text style={{ color: '#fff' }}>Artiste: Lorem Ipsum</Text>
      <Text style={{ color: '#fff' }}>Titre: Lorem Ipsum</Text>

      <Button title="Retour à l'accueil" buttonStyle={{ backgroundColor: '#FF0060' }} onPress={() => props.navigation.navigate('HomeHost')}></Button>

    </ScrollView>
</View>

); 
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#131313',
    
  },
  wrap: {
      flexDirection: 'column',
      textAlign: 'center',
      height: hp('100%'), // 70% of height device screen
      width: wp('100%'),  // 80% of width device screen 
      backgroundColor: '#131313',
     

    },
    title: {
      color: '#fff',
      fontSize: 40,
      fontFamily:'Staatliches',
      marginTop: '2%'
    },

    subtitle: {
      color: '#fff',
      fontSize: 30,
      fontFamily:'Staatliches',
      textAlign: 'center',
      marginTop: '5%',
      marginLeft:'2%'
      
    },
    subtext: {
      color: '#fff',
      fontSize: 30,
      fontFamily:'Staatliches',
      textAlign: 'center',
      marginTop: '5%',
      marginLeft:'2%'
      
    },
    text: {
      color: '#fff',
      fontSize: 20,
      fontFamily:'Roboto-Regular',
      textAlign: 'center',
      marginTop: '5%',
    
      
    },


});