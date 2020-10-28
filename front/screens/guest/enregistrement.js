import React, { useState } from 'react';
import { AppRegistry, View, Dimensions, StyleSheet, ImageBackground, Text, Image, TextInput } from 'react-native';
import { Button, Header } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
<<<<<<< HEAD


function enregistrement({ navigation }) {
=======
import AsyncStorage from '@react-native-community/async-storage';
import uuid from 'react-uuid'

function enregistrement({ navigation }) {

  const [pseudo, setPseudo] = useState('');
  const [eventPassword, setEventPassword] = useState('');
  const [eventId, setEventId] = useState('');
  const [errorMessage, setErrorMessage] = useState(false);


  // var handleEnregistrement = async () => {


  //   var rawResponse = await fetch('http://172.17.1.100:3000/enregistrement', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  //     body: `eventIdFromFront=${eventId}&eventPasswordFromFront=${eventPassword}`
  //   })

  //   var response = await rawResponse.json();

  //   if (response.result === true) {
  //     // A verifier si le token uuid fonctionne bien comme le uid2
  //     var token = uuid(32)
  //     // await AsyncStorage.setItem("token", JSON.stringify(token))
  //     navigation.navigate('Nouveauvote')
  
  //   } else {
  //     setErrorMessage(true)
  //   }
  // } 
>>>>>>> b9ba42ff296379286998ac66373e9e143be34b57

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState(false)

<<<<<<< HEAD
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
  
              <View style={{ flex: 1, alignItems: 'center' }}>
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
              </View>
=======
  // var logInDenied;
  // if (errorMessage === true) {
  //   logInDenied = <Text style={{ color: 'white' }} >Email et/ou Mot de Passe Incorrect(es)</Text>
  // }


  return (
    <View style={styles.backGroundColor}>
      <View style={styles.inscription}>
        <View style={{ justifyContent: 'center', alignItems: 'flex-start' }}>
          <FontAwesomeIcon style={{ color: 'white' }} icon={faArrowLeft} size={30} />
        </View>
        <View style={{ justifyContent: 'center' }}>
          <Text style={{ color: 'white', fontSize: 30 }}>DJ INVITÉ</Text>
        </View>
      </View>
      <View style={{ flex: 1, alignItems: 'center' }}>
        {logInDenied}
        <Text style={{ color: 'white', alignSelf: 'flex-start' }}>Pseudo:</Text>
        <TextInput style={{ backgroundColor: 'white', width: '90%', borderRadius: 10, marginBottom: "10%", height: '6.5%' }}
          // onChangeText={text => setPseudo(text)}
          value={pseudoFromFront}
        />
        <Text style={{ color: 'white', alignSelf: 'flex-start' }}>ID de l'évènement:</Text>
        <TextInput style={{ backgroundColor: 'white', width: '90%', borderRadius: 10, marginBottom: "10%", height: '6.5%' }}
          // onChangeText={text => setEventId(text)}
          value={eventIdFromFront}
        />
        <Text style={{ color: 'white', alignSelf: 'flex-start' }}>Mot de passe de l'évènement:</Text>
        <TextInput style={{ backgroundColor: 'white', width: '90%', borderRadius: 10, marginBottom: "10%", height: '6.5%' }}
          // onChangeText={text => setEventPassword(text)}
          value={eventPasswordFromFront}
        />
      </View>
>>>>>>> b9ba42ff296379286998ac66373e9e143be34b57

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