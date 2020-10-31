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


function TimerConfigSEC(props){

    
  console.log(props);

  var headerLeft = <FontAwesomeIcon icon={faArrowLeft} size={35} style={{color: "white"}} onPress={() => props.navigation.navigate('Moderation')} />;
  var headerCenter = <Text style={{color: 'white'}} >Compte à rebours</Text>;
  var headerRight = <FontAwesomeIcon icon={faBars} size={35} style={{color: "white"}} onPress={() => props.navigation.openDrawer()}/>;

    return (


  <ScrollView style={{ flex: 1, backgroundColor:'#131313'}} contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}>
        
  <Header
    containerStyle={{backgroundColor: '#131313'}}
    leftComponent={headerLeft}
    centerComponent={headerCenter}
    rightComponent={headerRight}
  />
  
  
  
    <View style={{flex: 0.2, justifyContent: 'space-around',  padding: 20, borderRadius: 10, margin: 15, alignItems: 'center'}} >


      <View>

      <Button title="Lancer le vote" 
              onPress={() => props.navigation.navigate('VoteHost')}
        ></Button>

      </View>

    </View>



</ScrollView>

);
}

  export default TimerConfigSEC;