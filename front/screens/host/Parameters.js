import React, { useEffect } from 'react';
import { View, Text, AsyncStorage, ScrollView, StyleSheet, } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faKey } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Header } from 'react-native-elements'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';




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
  var headerCenter = <Text style={styles.title} >Paramètres</Text>;
  var headerRight = <FontAwesomeIcon icon={faBars} size={35} style={{color: "white"}} onPress={() => props.navigation.openDrawer()}/>;



    return ( 
       
  <View style={styles.container}>
      <View>  
          <Header
            containerStyle={{
              backgroundColor: "#131313", 
            //height: '20%', 
            alignItems: 'flex-start', 
            borderBottomWidth:0,  
            marginBottom:'5%'
          
            }}
            leftComponent={headerLeft}
            centerComponent={headerCenter}
            rightComponent={headerRight}
          />
      </View>    
          
        <ScrollView style={styles.wrap}>
          <View style={{alignItems:'center'}}>
          
              <View style={styles.card}>
                <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}} >
                  <FontAwesomeIcon icon={faPen} size={15} style={{marginLeft: 10, color: '#000981'}} />
                  <Text style={{color: '#000981', fontSize:25, fontFamily: 'Staatliches'}} >  Moi</Text>
                </View>
                <Text style={styles.text} > % Moi</Text>
              </View>

              <View style={styles.card}>
                <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}} >
                  <FontAwesomeIcon icon={faEnvelope} size={15} style={{marginLeft: 10, color: '#000981'}} />
                  <Text style={styles.subtitle}>  Mail</Text>
                </View>
                <Text style={styles.text} > % moi@moi</Text>
              </View>

              <View style={styles.card}>
                <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}} >
                  <FontAwesomeIcon icon={faKey} size={15} style={{marginLeft: 10, color: '#000981'}} />
                  <Text style={styles.subtitle}>  Mot de Passe</Text>
                </View>
                <Text style={styles.text} > % ••••••••••</Text>
              </View>

              <View style={styles.card}>
                <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}} >
                  <FontAwesomeIcon icon={faBell} size={15} style={{marginLeft: 10, color: '#000981'}} />
                  <Text style={styles.subtitle}>  Notifications</Text>
                </View>
                <Text style={styles.text} > % Oui</Text>
              </View>

              <View style={styles.card}>
                <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}} >
                  <FontAwesomeIcon icon={faInfoCircle} size={15} style={{marginLeft: 10, color: '#000981'}} />
                  <Text style={styles.subtitle}>  Aide</Text>
                </View>
                <Text style={styles.text} > maxime@eitd.com</Text>
              </View>

<<<<<<< HEAD
              <View style={styles.card}>
                <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                  <Text style={styles.subtitle} onPress={() => props.navigation.navigate('MentionsLegales')}>Politique d'utilisation</Text>
=======
              <View style={styles.card} 
                  >
                <View 
                onPress={() => props.navigation.navigate('MentionsLegales')}
                style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}} >
                  <Text style={styles.subtitle}>Politique d'utilisation</Text>
>>>>>>> f825d867cf421c985cd849efcc285d88cf2c98ee
                </View>
              </View>

              <View style={styles.cardOrange}>
                <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}} >
                  <Text style={{color: '#000981', fontSize:25, fontFamily: 'Staatliches'}}>Supprimer mon compte</Text>
                </View>
              </View>
          </View>

        </ScrollView>
  </View>
      
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#131313',
      
    },
    wrap: {
        flexDirection: 'column',
        //alignItems: 'center',
        //justifyContent: 'center',
        //textAlign: 'center',
        height: hp('100%'), // 70% of height device screen
        width: wp('100%'),  // 80% of width device screen 
        backgroundColor: '#131313',
        borderTopColor: '#fff', 
        borderTopWidth:1
  
      },
      title: {
        color: '#fff',
        fontSize: 40,
        fontFamily:'Staatliches'
      },
  
      subtitle: {
        color: '#000981', 
        fontSize:25, 
        fontFamily: 'Staatliches'
      },

      text: {
        color: '#000981', 
        fontSize:18, 
        fontFamily: 'Roboto-Bold', 
        paddingRight:'5%'
          
      },
      card: {
        flex: 1, 
        backgroundColor: '#584dad', 
        marginBottom: 30, 
        width: '90%', 
        borderRadius: 10, 
        marginTop: '2%', 
        height: 50, 
        flexDirection: 'row', 
        alignItems:'center'
      },
      cardOrange: {
        flex: 1, 
        backgroundColor: '#E69620', 
        marginBottom: 30, 
        width: '90%', 
        borderRadius: 10, 
        marginTop: '2%', 
        height: 50, 
        flexDirection: 'row', 
        alignItems:'center'
      }
    
  });
  
  export default Parameters;





   
          
         
  //           <View style={{alignItems:'center'}}>
  //               <View style={styles.card} >
  //                   <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}} >
  //                     <FontAwesomeIcon icon={faPen} size={15} style={{marginLeft: 10, color: '#000981'}} />
  //                     <Text style={{color: '#000981', fontSize:25, fontFamily:'Staatliches'}} >  Moi</Text>
  //                     </View>
  //                   <Text style={styles.text} > % Moi</Text>
  //               </View>

  //               <View style={styles.card}>
  //                 <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}} >
  //                   <FontAwesomeIcon icon={faEnvelope} size={15} style={{marginLeft: 10, color: '#000981'}} />
  //                   <Text style={styles.subtitle}>  Mail</Text>
  //                 </View>
  //                 <Text style={styles.text} >  %Moi</Text>
  //               </View>

  //               <View style={styles.card}>
  //                 <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}} >
  //                   <FontAwesomeIcon icon={faKey} size={15} style={{marginLeft: 10, color: '#000981'}} />
  //                   <Text style={styles.subtitle}>  Mot de Passe</Text>
  //                 </View>
  //                 <Text style={styles.text} >  %Moi</Text>
  //               </View>

  //               <View style={styles.card}>
  //                 <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}} >
  //                   <FontAwesomeIcon icon={faBell} size={15} style={{marginLeft: 10, color: '#000981'}} />
  //                   <Text style={styles.subtitle}>  Notifications</Text>
  //                 </View>
  //                 <Text style={styles.text} >  %Moi</Text>
  //               </View>

  //               <View style={styles.card}>
  //                 <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}} >
  //                   <FontAwesomeIcon icon={faInfoCircle} size={15} style={{marginLeft: 10, color: '#000981'}} />
  //                   <Text style={styles.subtitle}>  Aide</Text>
  //                 </View>
  //                 <Text style={styles.text} > % Moi</Text>
  //               </View>

  //               <View style={styles.card}>
  //                   onPress={() => props.navigation.navigate('MentionsLegales')}>
  //                 <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}} >
  //                   <Text style={styles.subtitle}>Politique d'utilisation</Text>
  //                 </View>
  //                 <Text style={styles.text} >  %Moi% </Text>
  //               </View>

  //               <View style={{flex: 1, backgroundColor: '#E69620', marginBottom: 30, width: '90%', borderRadius: 10, height: 40}} >
  //                 <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}} >
  //                   <Text style={styles.subtitle}>Supprimer mon compte</Text>
  //                 </View>
  //               </View>
  //         </View>
  //      </ScrollView>
  // </View>
      
  //   );
  // }
