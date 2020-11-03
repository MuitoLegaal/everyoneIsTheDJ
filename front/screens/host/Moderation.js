import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Button, Header, Input, Badge } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars, faServer, faRedo, faTrash } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Icon from 'react-native-vector-icons/FontAwesome';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { connect } from 'react-redux'


function Moderation(props) {

  var headerCenter = <Text style={styles.title}>DJ Hôte</Text>
  var headerRight = <FontAwesomeIcon icon={faBars} size={35} style={{ color: "white" }} onPress={() => props.navigation.openDrawer()} />
  var headerLeft = <FontAwesomeIcon style={{ color: 'white' }} icon={faArrowLeft} size={30} onPress={() => props.navigation.navigate('EventCreation')} />

  
  const [TitreInput, setTitreInput] = useState()
  const [TitreInputList, setTitreInputList] = useState(['Imagine — John Lennon', 'Hey Jude — The Beatles.', 'Good Vibrations — The Beach Boys', 'Smells Like Teen Spirit — Nirvana.'])
  const [error, setError] = useState()




  
  var handleSupprimerTitre = async (element) => {

    setTitreInputList(TitreInputList.filter((e)=>(e !== element)))
  };



  var listeDure = TitreInputList.map((i) => {
    return(
      <View key={i} style={styles.titre}>
        <FontAwesomeIcon icon={faTrash} size={20} style={{color: "#fff", marginLeft: '2%'}} onPress={()=>handleSupprimerTitre(i)} />
        <Text style={styles.songtext}>{i}</Text>
      </View>
    )
  })

  var handleAjouterTitre = async() => {
      
       setTitreInputList([...TitreInputList, TitreInput])
       
  }



      return (
      <View style={styles.container}>
          <View>
            <Header
              leftComponent={headerLeft}
              centerComponent={headerCenter}
              rightComponent={headerRight}
              containerStyle={{
                backgroundColor: "#131313",
                alignItems: 'flex-start',
                borderBottomWidth: 0,
                marginBottom: '5%'
              }}
            />
          </View>


            <KeyboardAwareScrollView style={styles.wrap}>
                  <View style={{ borderBottomWidth:1,borderBottomColor:"#fff"}}>
           
                
                      <Text style={styles.text}>Bienvenu dans la soirée de </Text>
                      <Text style={styles.subtitle} >NOM DE LEVENT {props.nameToDisplay}</Text>
                      <Text style={styles.bodytext}>Moderer les titres ajoutés à la liste de vote (doublons, titres erronés, spam...)</Text>   
                          


                          <View style={{flex:1, flexDirection: 'column'}}>
                            
                            {listeDure}
                        
                          </View>


                    
                  </View>
                  
                  <View>
                        <View style={{alignItems: 'center', flexDirection: 'row', justifyContent:'space-between', marginTop:'5%'}}>
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
                                    fontSize: 16,
                                    color: '#fff',
                                
                                }}
                                labelStyle={{
                                    fontFamily:'Roboto-Bold',
                                    fontSize: 18,
                                    color: '#584DAD',

                                }}
                                onChangeText={text=>setTitreInput(text)}
                                value={TitreInput}
                                  
                            />


                            <Button 
                            title= '+'
                            buttonStyle={{
                                backgroundColor: '#584DAD',
                                borderRadius: 10,
                                width: 40,
                                height: 40,
                                color: 'white',
                                marginRight:'2%'
                            
                            }}
                            onPress={()=> handleAjouterTitre()}
                            
                            />

                        </View>

                  </View>

      

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
      )}


  const styles = StyleSheet.create({
      container: {
        flex:1,
        backgroundColor: '#131313',
      },

      wrap: {
          flexDirection: 'column',
          textAlign: 'center',
          //height: hp('100%'), // 70% of height device screen
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
          paddingRight: '10%' ,
          paddingLeft: '5%',
          textAlign: 'center',
          marginTop: '6%',
          
        },
        songtext: {
          color: '#E59622',
          fontSize: 18,
          fontFamily:'Roboto-Regular',
          marginLeft: '5%',
          paddingRight: '5%' ,
          textAlign: 'left',
          marginTop: '6%'
        },
        songtextAjout:{
          color: '#584DAD',
          fontSize: 18,
          fontFamily:'Roboto-Regular',
          paddingRight: '10%' ,
          paddingLeft: '5%',
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
          marginTop: '10%',
          marginBottom: '6%'
        },
        titre: {
          flexDirection:'row', 
          alignItems:'flex-end', 
          justifyContent: 'flex-start', 
          marginBottom:'5%',
          marginRight: '2%'
        }

    });


  export default Moderation;