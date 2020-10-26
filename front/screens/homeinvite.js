import React, {useState} from 'react';
import {  AppRegistry, View, Dimensions, StyleSheet, ImageBackground, Text } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Header } from 'react-native-elements';


function homeinvite() {
  

    return (
        <View style={styles.wrap}>
            <Header
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
            />
            <View style={styles.container}>
                
                <Text style={styles.title}>Hello</Text>
            </View>
        </View>


  );
}
const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#131313',
        //alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        height: '100%',
        
        
      },
    container: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#131313',
      //alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      height: '100%',
      paddingTop: 20,
      
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
      
  
    }
  });

export default homeinvite;