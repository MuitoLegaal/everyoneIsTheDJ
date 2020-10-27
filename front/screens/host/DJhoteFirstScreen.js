import React, {useState} from 'react';
import {  AppRegistry, View, Dimensions, StyleSheet, ImageBackground, Text , Image} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Header, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


function DJhoteFirstScreen(props) {
  

    return (
        <View style={styles.wrapper}>
            <View style={styles.wrap}>
                <View style={styles.header}>
                   <Image 
                          source={require('../../assets/logoMini.png')}
                          style={{ width: 90, height: 92, marginBottom: 20, marginTop: 30, alignContent:'center', justifyContent:'center', alignItems:'center'}}
                    />
                    
                    <Text style={styles.title}>DJ HOTE</Text>
                </View>
                    
                    <Text style={styles.subtext}>Tu as déjà un compte ?</Text>
                    
                    <Button title="Se connecter" 
                      buttonStyle={{
                        backgroundColor: '#E59622',
                        paddingLeft: 90,
                        paddingRight: 90,
                        paddingTop:10,
                        paddingBottom:10,
                        marginBottom: 20,
                        marginTop: 30
              
                      }}
                      onPress={() => props.navigation.navigate('DJhoteFirstScreen')}
                      ></Button>

                      <Text style={{ color: '#fff', textDecorationLine: 'none', marginBottom: 20, textAlign: 'center' }}> Ou </Text>

                      <Button title="S'inscrire" 
                      buttonStyle={{
                        backgroundColor: '#584DAD',
                        paddingLeft: 90,
                        paddingRight: 90,
                        paddingTop:10,
                        paddingBottom:10,
                        marginBottom: 20,
                      }}></Button>
               

            </View>
        </View>
   


  );
}
const styles = StyleSheet.create({
    container: {
      flex:1,
    },
    
    wrapper: {},
   
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
        flexDirection: "column",

        
    },
    title: {
      color: '#fff',
      fontSize: 40,
      fontFamily:'Staatliches',
      textAlign: 'center',
      marginBottom: 90
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
    subtext: {
      color: '#fff',
      fontSize: 20,
      fontFamily:'Roboto-Regular',
      paddingRight: 30 ,
      paddingLeft: 30,
      marginBottom: 30
    },
   text: {
      color: '#fff',
      fontSize: 20,
      fontFamily:'Roboto-Regular',
      paddingRight: 30 ,
      paddingLeft: 30,
      textAlign: 'center'
    },
    // border: {
    //     color: '#fff',
    //     width: ('100%'),
    //     height: 2,
    // }
  });

export default DJhoteFirstScreen;