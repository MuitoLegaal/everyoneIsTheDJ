import React, { useState } from 'react';
import { AppRegistry, View, Dimensions, StyleSheet, ImageBackground, Text, Image, TextInput } from 'react-native';
import { Button, Header } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


function enregistrement({ navigation }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState(false)

  var logInDenied;
  if (errorMessage === true) {
    logInDenied = <Badge status="error" badgeStyle={{color: 'white', backgroundColor:'#FF0060'}} value="Email et/ou Mot de Passe Incorrect(es)"></Badge>
  }
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
                    
                    <Text style={styles.title}>DJ invité</Text>
             
                
                {/* <KeyboardAwareScrollView style={styles.main}>
                    <Input
                            label='Pseudo'
                                    placeholder='Gégé'
                                    type='text'
                                    containerStyle={{
                                            color:'#fff', 
                                            width: '100%', 
                                            marginTop:'3%'
                                        }}
                                    inputStyle={{
                                            fontFamily:'Roboto-Bold',
                                            fontSize: 18,
                                            color: '#fff',

                                            borderBottomColor:'#000981'
                                    }}
                                    labelStyle={{
                                        fontFamily:'Roboto-Bold',
                                        fontSize: 20,
                                        color: '#584DAD',
                                
                                    }}
                                    onChangeText={text => setEmail(text)}
                                    value={email}
                        />

                </KeyboardAwareScrollView> */}
  
      {/* <View style={{ flex: 1, alignItems: 'center' }}>
        {logInDenied}
        <Text style={{ color: 'white', alignSelf: 'flex-start' }}>Pseudo:</Text>
        <TextInput style={{ backgroundColor: 'white', width: '90%', borderRadius: 10, marginBottom: "10%", height: '6.5%' }}
          onChangeText={text => setEmail(text)}
          value={email}
        />
        <Text style={{ color: 'white', alignSelf: 'flex-start' }}>ID de l'évènement:</Text>
        <TextInput style={{ backgroundColor: 'white', width: '90%', borderRadius: 10, marginBottom: "10%", height: '6.5%' }}
          onChangeText={text => setPassword(text)}
          value={password}
        />
        <Text style={{ color: 'white', alignSelf: 'flex-start' }}>Mot de passe de l'évènement:</Text>
        <TextInput style={{ backgroundColor: 'white', width: '90%', borderRadius: 10, marginBottom: "10%", height: '6.5%' }}
          onChangeText={text => setPassword(text)}
          value={password}
        />
      </View> */}

      <Button onPress={() => navigation.navigate('Onboarding')} title="Retour"></Button>
      <Button title="Rejoindre la soirée"
        onPress={() => navigation.navigate('Nouveauvote')}
        buttonStyle={{
          backgroundColor: '#584DAD',
          paddingLeft: 120,
          paddingRight: 120,
          paddingTop: 10,
          paddingBottom: 10,
          marginBottom: 20,
        }}></Button>
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
  backGroundColor: {
    backgroundColor: '#131313',
    flex: 1
},
});

export default enregistrement;