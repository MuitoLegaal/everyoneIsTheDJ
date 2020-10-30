import React, { useEffect } from 'react';
import { View, Text, AsyncStorage, ScrollView, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faKey } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Header } from 'react-native-elements'




function Historic(props){

  var userData;


  // _______________________________________LOCAL STORAGE NOT FINISHED_________________________________

  useEffect(() => {
    AsyncStorage.getItem("user", 
    function(err, data){
      userData = JSON.parse(data);
    })
  })
  // ___________________________________________________________________________________________________

  var headerLeft = <FontAwesomeIcon icon={faArrowLeft} size={35} style={{color: "white"}} onPress={() => props.navigation.navigate('HomeHost')} />;
  var headerCenter = <Text style={{color: 'white'}} >Historique</Text>;
  var headerRight = <FontAwesomeIcon icon={faBars} size={35} style={{color: "white"}} onPress={() => props.navigation.openDrawer()}/>;




    return ( 
        <ScrollView style={{ flex: 1, backgroundColor:'#131313'}} contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}>
        
          <Header
            containerStyle={{backgroundColor: '#131313'}}
            leftComponent={headerLeft}
            centerComponent={headerCenter}
            rightComponent={headerRight}
          />
          
          
          
            <View style={{flex: 0.2, flexDirection: 'row', justifyContent: 'space-around', borderColor: 'white', borderWidth: 4, width: 300, padding: 20, borderRadius: 10, margin: 15, alignItems: 'center', borderColor: '#584DAD'}} >

              <View>
                <Image source={require('../../assets/picto-fete2.png')} style={{height: 50, width: 50}} />
              </View>

              <View>
                <Text style={{color: 'white'}}>Rien pour l'instant</Text>
                <Text style={{color: 'white'}}>Le screen est à peine créé</Text>
              </View>

            </View>



        </ScrollView>
      
    );
  }

  export default Historic;