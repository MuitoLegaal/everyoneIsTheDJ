import React from 'react';
import { View, Text, Image } from 'react-native';
import { Header } from 'react-native-elements'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


function HomeHost(){

var headerCenter = <Image source={require('../../assets/logoMini.png')} style={{height: 50, width: 50}} />
var headerRight = <FontAwesomeIcon icon={faBars} size={35} style={{color: "white"}} />



    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#131313'}}>  
        <Header
          centerComponent={headerCenter}
          rightComponent={headerRight}
          containerStyle={{backgroundColor: "#131313"}}
        />

        <View>
          <Text style={{color: 'white'}} >Aucun evenement en cours maintenat!</Text>
        </View>
      </View>
    );
  }

  export default HomeHost;