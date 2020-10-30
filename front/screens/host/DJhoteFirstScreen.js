import React, {useState} from 'react';
import {  AppRegistry, View, Dimensions, StyleSheet, ImageBackground, Text , Image} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Header, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function DJhoteFirstScreen(props) {
  
  var headerLeft = <FontAwesomeIcon icon={faArrowLeft} size={35} style={{color: "white"}} onPress={() => props.navigation.navigate('Onboarding')} />;

    return (
        <View style={styles.container}>

          <View style={styles.wrap}>
                  <Header
                          containerStyle={{backgroundColor: '#131313', borderBottomWidth: 0}}
                          leftComponent={headerLeft}
                          
                  />
              
                   <Image 
                          source={require('../../assets/logoMini.png')}
                          style={{ width: 90, height: 92, marginBottom: 20, marginTop: 30, alignContent:'center', justifyContent:'center', alignItems:'center'}}
                    />
                    
                    <Text style={styles.title}>DJ HOTE</Text>
             
                <View style={styles.main}>
                    <Text style={styles.subtext}>Tu as déjà un compte ?</Text>
                    
                    <Button title="Se connecter" 
                      buttonStyle={{
                        backgroundColor: '#E59622',
                        borderRadius: 10
              
                      }}
                      onPress={() => props.navigation.navigate('SignIn')}
                      ></Button>

                      <Text style={{ color: '#fff', textDecorationLine: 'none', marginTop: '2%', marginBottom: '2%', textAlign: 'center' }}> Ou </Text>

                      <Button title="S'inscrire" 
                      buttonStyle={{
                        backgroundColor: '#584DAD',
                        borderRadius: 10
                      }}
                      onPress={() => props.navigation.navigate('SignUp')}
                      ></Button>
                  </View>   

            </View>
        </View>
   


  );
}
const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#131313',
      
    },
   
    wrap: {
      display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#131313',
        alignItems: 'center',
        height: hp('110%'), // 70% of height device screen
        width: wp('100%')   // 80% of width device screen 
      },

    main: {
        justifyContent: 'center',
      
        // justifyContent: 'space-around',
        alignItems: 'stretch',
        marginTop: '65%'   
  },

    title: {
      color: '#fff',
      fontSize: 40,
      fontFamily:'Staatliches',
      textAlign: 'center',
 
    },
    subtitle: {
      color: '#fff',
      fontSize: 30,
      fontFamily:'Staatliches',
      textAlign: 'center',
      
    },
    subtext: {
      color: '#fff',
      fontSize: 20,
      fontFamily:'Roboto-Regular',
      textAlign: 'center',
      marginBottom: '5%'
     
    },
   text: {
      color: '#fff',
      fontSize: 20,
      fontFamily:'Roboto-Regular',
      textAlign: 'center'
    },

  });

export default DJhoteFirstScreen;