import React, { useEffect } from 'react';
import { View, Text, AsyncStorage, ScrollView, } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faKey } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Header } from 'react-native-elements'





function Parameters(props){

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
  var headerCenter = <Text style={{color: 'white'}} >Paramètres</Text>;
  var headerRight = <FontAwesomeIcon icon={faBars} size={35} style={{color: "white"}} />;




    return ( 
        <ScrollView style={{ flex: 1, backgroundColor:'#131313'}} contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}>
        
          <Header
            containerStyle={{backgroundColor: '#131313'}}
            leftComponent={headerLeft}
            centerComponent={headerCenter}
            rightComponent={headerRight}
          />
          
          
          
          <View style={{flex: 1, backgroundColor: '#584dad', marginBottom: 30, width: '90%', borderRadius: 10, marginTop: 30, height: 50}} >
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}} >
              <FontAwesomeIcon icon={faPen} size={15} style={{marginLeft: 10, color: '#000981'}} />
              <Text style={{color: '#000981'}} >  Moi</Text>
            </View>
          </View>

          <View style={{flex: 1, backgroundColor: '#584dad', marginBottom: 30, width: '90%', borderRadius: 10, height: 50}} >
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}} >
              <FontAwesomeIcon icon={faEnvelope} size={15} style={{marginLeft: 10, color: '#000981'}} />
              <Text style={{color: '#000981'}}>  Mail</Text>
            </View>
          </View>

          <View style={{flex: 1, backgroundColor: '#584dad', marginBottom: 30, width: '90%', borderRadius: 10, height: 50}} >
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}} >
              <FontAwesomeIcon icon={faKey} size={15} style={{marginLeft: 10, color: '#000981'}} />
              <Text style={{color: '#000981'}}>  Mot de Passe</Text>
            </View>
          </View>

          <View style={{flex: 1, backgroundColor: '#584dad', marginBottom: 30, width: '90%', borderRadius: 10, height: 50}} >
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}} >
              <FontAwesomeIcon icon={faBell} size={15} style={{marginLeft: 10, color: '#000981'}} />
              <Text style={{color: '#000981'}}>  Notifications</Text>
            </View>
          </View>

          <View style={{flex: 1, backgroundColor: '#584dad', marginBottom: 30, width: '90%', borderRadius: 10, height: 50}} >
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}} >
              <FontAwesomeIcon icon={faInfoCircle} size={15} style={{marginLeft: 10, color: '#000981'}} />
              <Text style={{color: '#000981'}}>  Aide</Text>
            </View>
          </View>

          <View style={{flex: 1, backgroundColor: '#584dad', marginBottom: 60, width: '90%', borderRadius: 10, height: 50}} 
              onPress={() => props.navigation.navigate('MentionsLegales')}>
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}} >
              <Text style={{color: '#000981'}}>Politique d'utilisation</Text>
            </View>
          </View>

          <View style={{flex: 1, backgroundColor: '#E69620', marginBottom: 30, width: '90%', borderRadius: 10, height: 40}} >
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}} >
              <Text style={{color: '#000981'}}>Supprimer mon compte</Text>
            </View>
          </View>

        </ScrollView>
      
    );
  }

  export default Parameters;