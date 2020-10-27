import React, {useState} from 'react';
import {  AppRegistry, View, Dimensions, StyleSheet, ImageBackground, Text , Image, Button} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


function validationvote() {
  

    return (
        <View style={styles.container}>
           <Text>Validation Vote</Text>
           <Button title="Home" 
        buttonStyle={{
          backgroundColor: '#584DAD',
          paddingLeft: 120,
          paddingRight: 120,
          paddingTop:10,
          paddingBottom:10,
          marginBottom: 20,         
        }}></Button>
        </View>


  );
}
const styles = StyleSheet.create({
    container: {
      flex:1,
     
      
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
      fontFamily:'Staatliches'
    },
    subtitle: {
      color: '#fff',
      fontSize: 30,
      fontFamily:'Staatliches',
      textAlign: 'center',
      paddingRight: 30 ,
      paddingLeft: 30,
      paddingBottom: 40
    },

   text: {
      color: '#fff',
      fontSize: 20,
      fontFamily:'Roboto-Regular',
      paddingRight: 30 ,
      paddingLeft: 30,
    },
    // border: {
    //     color: '#fff',
    //     width: ('100%'),
    //     height: 2,
    // }
  });

export default validationvote;