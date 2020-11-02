import React, { useEffect } from 'react';
import { View, Text, AsyncStorage, ScrollView, Image, Button } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faKey } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Header } from 'react-native-elements'


function TimerConfigFIRST(props) {

/*TEST*/  var tourdevoteId = '5f9fe5ec403798a3f0938879'

  var handleInitTimer5 = async () => {

    //APPEL AU BACKEND//
    var rawResponse = await fetch('http://192.168.0.40:3000/initTimer5', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `tourdevoteIdFromFront=${tourdevoteId}`
    })

    var response = await rawResponse.json();

    console.log(response);
  }

  var handleInitTimer10 = async () => {

    //APPEL AU BACKEND//
    var rawResponse = await fetch('http://192.168.0.40:3000/initTimer10', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `tourdevoteIdFromFront=${tourdevoteId}`
    })

    var response = await rawResponse.json();

    console.log(response);
  }

  var handleInitTimer20 = async () => {

    //APPEL AU BACKEND//
    var rawResponse = await fetch('http://192.168.0.40:3000/initTimer20', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `tourdevoteIdFromFront=${tourdevoteId}`
    })

    var response = await rawResponse.json();

    console.log(response);
  }



  var headerLeft = <FontAwesomeIcon icon={faArrowLeft} size={35} style={{ color: "white" }} onPress={() => props.navigation.navigate('SongListCreation')} />;
  var headerCenter = <Text style={{ color: 'white' }} >Compte à rebours (1er tour de vote)</Text>;
  var headerRight = <FontAwesomeIcon icon={faBars} size={35} style={{ color: "white" }} onPress={() => props.navigation.goBack()} />;

  return (


    <ScrollView style={{ flex: 1, backgroundColor: '#131313' }} contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}>

      <Header
        containerStyle={{ backgroundColor: '#131313' }}
        leftComponent={headerLeft}
        centerComponent={headerCenter}
        rightComponent={headerRight}
      />



      <View style={{ flex: 0.2, justifyContent: 'space-around', padding: 20, borderRadius: 10, margin: 15, alignItems: 'center' }} >


        <View>

          <Button title="5 min"
            onPress={() => handleInitTimer5()}
          ></Button>

          <Button title="10 min"
            onPress={() => handleInitTimer10()}
          ></Button>
          <Button title="20 min"
            onPress={() => handleInitTimer20()}
          ></Button>

        </View>

      </View>



    </ScrollView>

  );
}

export default TimerConfigFIRST;