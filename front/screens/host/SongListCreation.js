import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Button, Header, Input } from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars, faServer, faTrash} from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Icon from 'react-native-vector-icons/FontAwesome';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


function SongListCreation(props){
      var headerCenter = <Text style={styles.title}>DJ Hôte</Text>
      var headerRight = <FontAwesomeIcon icon={faBars} size={35} style={{color: "white"}} />
      var headerLeft = <FontAwesomeIcon style={{ color: 'white' }} icon={faArrowLeft} size={30}  onPress={() => props.navigation.navigate('EventCreation')}/>

      const [titreProposeHote, setTitreProposeHote] = useState()
      const [titreListHote, setTitreListHote] = useState([]);

      var handleAjouterTitre = () => {
          console.log(titreProposeHote)
          setTitreListHote([...titreListHote, titreProposeHote])
          //setTitreProposeHote('')
      }

      var listHote = titreListHote.map((titre, i)=>{
          return(
              // <View style={styles.song}>
              <View style={{flexDirection:'row', alignItems:'flex-end'}}>
                  <Text style={styles.songtextAjout}>{titre}</Text>
                  <FontAwesomeIcon icon={faTrash} size={20} style={{color: "#fff"}} />
              </View>
          )
      })

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

            <KeyboardAwareScrollView style={styles.wrap}>
                  <View style={{ borderBottomWidth:1,borderBottomColor:"#fff"}}>
           
                {/* <View style={{ flex: 1, backgroundColor:'#2ecc71', justifyContent: 'center', alignItems: 'center'}}>   */}
                      <Text style={styles.text}>Bienvenu dans la soirée de </Text>
                      <Text style={styles.subtitle} >NOM DE LEVENT(Anniv de Maurice)</Text>
                      <Text style={styles.bodytext}>Compose ta liste de titres candidats aux votes (3 titres minimum).</Text>
                      <View style={{flex:1, flexDirection: 'column'}}>
                            <View style={{flexDirection:'row', alignItems:'flex-end'}}>
                                  <Text style={styles.songtext}>Shakira - Waka waka</Text>
                                  <FontAwesomeIcon icon={faTrash} size={20} style={{color: "#fff"}} />
                            </View>
                            <View style={{flexDirection:'column', justifyContent:'center'}}>
                                  {listHote}
                            </View>
                      </View>
                    <Button 
                      title=" Rafraîchir la liste" 
                      //onPress={() => props.navigation.navigate('EventCreation')}
                      //onPress={() => props.navigation.navigate('TimerConfigFIRST')}
                      buttonStyle={{
                            backgroundColor: '#E59622',
                            marginTop: '10%',
                            marginBottom: '10%',
                            borderRadius: 10,
                            }}
                      icon={<FontAwesomeIcon
                              icon={faServer}
                              size={15}
                              color="white"
                            />
                              }
                            
                    /> 
                  </View>
                  
                  <View>

                        <View style={{alignItems: 'center', flexDirection: 'row'}}>
                            <Input
                                label='Artiste - Titre :'
                                placeholder='Lady Gaga - Poker Face'
                                type='text'
                                containerStyle={{
                                    color:'#fff', 
                                    width: 290, 
                                    marginTop:'3%',
                                    alignItems: 'stretch'
                                
                                }}
                                inputStyle={{
                                    fontFamily:'Roboto-Bold',
                                    fontSize: 15,
                                    color: '#fff',
                                
                                }}
                                labelStyle={{
                                    fontFamily:'Roboto-Bold',
                                    fontSize: 18,
                                    color: '#584DAD',

                                }}
                                onChangeText={text => setTitreProposeHote(text)}
                                value={titreProposeHote}
                                
                            
                            />
                            <Button 
                            title= '+'
                            buttonStyle={{
                                backgroundColor: '#584DAD',
                                borderRadius: 10,
                                width: 40,
                                color: 'white'
                            
                            }}
                            onPress={()=> handleAjouterTitre()}
                            
                            />
                        </View>

                  </View>
                
        
              {/* ------------FLECHE DE RETOUR DEFINIE ICI EN DESSOUS (supprimer tout le bouton) ------------- */}
                  {/* <Button buttonStyle={{paddingTop: 15}} title="<- flèche retour en haut" 
                        onPress={() => props.navigation.navigate('EventCreation')}
                  ></Button>  */}

            </KeyboardAwareScrollView>
            
              <Button 
                    title="Valider la liste" 
                    //onPress={() => props.navigation.navigate('EventCreation')}
                    onPress={() => props.navigation.navigate('TimerConfigFIRST')}
                    buttonStyle={{
                          backgroundColor: '#584DAD',
                          marginTop: '3%',
                          borderRadius: 10,
                          }}
                          
                  /> 
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
          color: '#584DAD',
          fontSize: 40,
          fontFamily:'Staatliches',
          textAlign: 'center',
          marginTop: '6%',
          
        },

       text: {
          color: '#fff',
          fontSize: 20,
          fontFamily:'Roboto-Regular',
          paddingRight: 30 ,
          paddingLeft: 30,
          textAlign: 'center',
          marginTop: '6%'
        },
        songtext: {
          color: '#E59622',
          fontSize: 20,
          fontFamily:'Roboto-Regular',
          paddingRight: 30 ,
          paddingLeft: 30,
          textAlign: 'left',
          marginTop: '6%'
        },
        songtextAjout:{
          color: '#584DAD',
          fontSize: 20,
          fontFamily:'Roboto-Regular',
          paddingRight: 30 ,
          paddingLeft: 30,
          textAlign: 'left',
          marginTop: '6%',
         
        },
        bodytext: {
          color: '#fff',
          fontSize: 18,
          fontFamily:'Roboto-Regular',
          paddingRight: 30 ,
          paddingLeft: 30,
          textAlign: 'left',
          marginTop: '10%'
        },

        song: {
          flexDirection: 'row', 
          alignItems: 'flex-end',
          justifyContent: 'space-around',


        }
      
    });

  export default SongListCreation;