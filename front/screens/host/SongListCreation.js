import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Header } from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars} from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { ship } from '@fortawesome/free-solid-svg-icons'
import Icon from 'react-native-vector-icons/FontAwesome';


function SongListCreation(props){
      var headerCenter = <Text style={styles.title}>DJ Hôte</Text>
      var headerRight = <FontAwesomeIcon icon={faBars} size={35} style={{color: "white"}} />
      var headerLeft = <FontAwesomeIcon style={{ color: 'white' }} icon={faArrowLeft} size={30}  onPress={() => props.navigation.navigate('EventCreation')}/>

    return (
      <View style={styles.container}>
            <View>
                        <Header
                        leftComponent={headerLeft}
                        centerComponent={headerCenter}
                        rightComponent={headerRight}
                        containerStyle={{backgroundColor: "#131313", 
                        alignItems: 'flex-start', 
                        borderBottomWidth:0,  
                        marginBottom:'5%'
                  
                        }}
                        />
            </View>

            <View style={styles.wrap}>

           
            {/* <View style={{ flex: 1, backgroundColor:'#2ecc71', justifyContent: 'center', alignItems: 'center'}}>   */}
                  <Text style={styles.text}>Bienvenu dans la soirée de </Text>
                  <Text style={styles.subtitle} >(Anniv de Maurice) </Text>
                  <Text style={styles.text}>Compose ta liste de titres candidats aux votes (3 titres minimum).</Text>
                  <View>
                        <View style={styles.card}>
                              <Text style={styles.text}>Shakira - Waka waka</Text>
                              <FontAwesomeIcon icon={ship} size={20} style={{color: "#fff"}} />
                        </View>



                  </View>
                  <Button title="Valider la liste" 
                        onPress={() => props.navigation.navigate('TimerConfigFIRST')}
                  ></Button>

        
              {/* ------------FLECHE DE RETOUR DEFINIE ICI EN DESSOUS (supprimer tout le bouton) ------------- */}
                  {/* <Button buttonStyle={{paddingTop: 15}} title="<- flèche retour en haut" 
                        onPress={() => props.navigation.navigate('EventCreation')}
                  ></Button>  */}

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
          flexDirection: 'column',
          textAlign: 'center',
          height: hp('100%'), // 70% of height device screen
          width: wp('100%'),  // 80% of width device screen 
          backgroundColor: '#131313',
          borderTopWidth:1,
          borderTopColor:"#fff",
        },

        title: {
          color: '#fff',
          fontSize: 40,
          fontFamily:'Staatliches'
        },
    
        subtitle: {
          color: '#fff',
          fontSize: 30,
          fontFamily:'Staatliches',
          textAlign: 'center',
          marginTop: '5%',
          
        },

       text: {
          color: '#fff',
          fontSize: 20,
          fontFamily:'Roboto-Regular',
          paddingRight: 30 ,
          paddingLeft: 30,
          textAlign: 'left',
          marginTop: '6%'
        },

        card: {
          flexDirection: 'row', 
          //justifyContent: 'space-between', 
          //borderWidth: 4, 
          //padding: 10, 
          //borderRadius: 10, 
          //margin: '2%', 
          alignItems: 'center', 
          //borderColor: '#584DAD'
        }
      
    });

  export default SongListCreation;