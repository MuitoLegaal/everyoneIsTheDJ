import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image } from 'react-native';
import { Button, Header, Input, Badge } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { or } from 'react-native-reanimated';
import { connect } from 'react-redux';


function EventCreation(props) {

      const [errorMessage, setErrorMessage] = useState(false);
      const [eventName, setEventName] = useState('');
      const [eventPassword, setEventPassword] = useState('');

      var handleEventCreation = async () => {

            var rawResponse = await fetch('http://192.168.144.4:3000/eventcreation', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                  body: `eventNameFromFront=${eventName}&eventPasswordFromFront=${eventPassword}&idUserFromFront=${props.hostId}`
            })

            var response = await rawResponse.json();

            console.log(response);

            if (response.result === true) {
                  
                  props.onSettingEventName(eventName), props.onSettingPassword(eventPassword)

                  props.navigation.navigate('SongListCreation')

            } else {
                  setErrorMessage(true)
            }
      }

      console.log('eventName', eventName)
      var nameForget;
      if (eventName === "" || eventPassword === "") {
            // setErrorMessage(true)
            nameForget = <Badge status="error" badgeStyle={{ color: 'white', backgroundColor: '#FF0060', marginTop: '10%' }} value="Les deux champs sont obligatoires :) "></Badge>
      }


      var headerCenter = <Text style={styles.title}>DJ Hôte</Text>
      var headerRight = <FontAwesomeIcon icon={faBars} size={35} style={{ color: "white" }} onPress={() => props.navigation.openDrawer()} />
      var headerLeft = <FontAwesomeIcon style={{ color: 'white' }} icon={faArrowLeft} size={30} onPress={() => props.navigation.navigate('HomeHost')} />


      return (
            <View style={styles.container}>
                  <View>
                        <Header
                              leftComponent={headerLeft}
                              centerComponent={headerCenter}
                              rightComponent={headerRight}
                              containerStyle={{
                                    backgroundColor: "#131313",
                                    //height: '20%', 
                                    alignItems: 'flex-start',
                                    borderBottomWidth: 0,
                                    marginBottom: '5%'

                              }}
                        />
                  </View>

                  <View style={styles.wrap}>

                        <View>
                              {nameForget}

                              <Input
                                    label="Nom de l'évènement"
                                    placeholder='Anniv de Maurice'
                                    type='text'
                                    containerStyle={{
                                          color: '#fff',
                                          width: '100%',
                                          marginTop: '10%'
                                    }}
                                    inputStyle={{
                                          fontFamily: 'Roboto-Bold',
                                          fontSize: 18,
                                          color: '#fff',

                                          borderBottomColor: '#000981'
                                    }}
                                    labelStyle={{
                                          fontFamily: 'Roboto-Bold',
                                          fontSize: 20,
                                          color: '#584DAD',

                                    }}
                                    onChangeText={text => setEventName(text)}
                                    value={eventName}

                              />

                              <Input
                                    label="Mot de passe de l'évènement"
                                    placeholder='MomoLeFou'
                                    type='text'
                                    containerStyle={{
                                          color: '#fff',
                                          width: '100%',
                                          marginTop: '10%'
                                    }}
                                    inputStyle={{
                                          fontFamily: 'Roboto-Bold',
                                          fontSize: 18,
                                          color: '#fff',
                                          borderBottomColor: '#000981'
                                    }}
                                    labelStyle={{
                                          fontFamily: 'Roboto-Bold',
                                          fontSize: 20,
                                          color: '#584DAD',

                                    }}
                                    onChangeText={text => setEventPassword(text)}
                                    value={eventPassword}
                              />

                              <Button title="Créer l'évènement"
                                    onPress={() => { handleEventCreation() }}
                                    // onPress={() => handleEventCreation()} NE PAS RETIRER
                                    buttonStyle={{
                                          backgroundColor: '#584DAD',
                                          borderRadius: 10,
                                          marginTop: '10%'
                                    }}

                              ></Button>
                        </View>
                  </View>
            </View>
      );
}


const styles = StyleSheet.create({
      container: {
            flex: 1,
            backgroundColor: '#131313',

      },
      wrap: {
            flexDirection: 'column',
            //alignItems: 'center',
            //justifyContent: 'center',
            textAlign: 'center',
            height: hp('100%'), // 70% of height device screen
            width: wp('100%'),  // 80% of width device screen 
            backgroundColor: '#131313',
            borderTopWidth: 1,
            borderTopColor: "#fff"

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
            textAlign: 'left',
            marginTop: '2%'

      },
      text: {
            color: '#fff',
            fontSize: 20,
            fontFamily: 'Roboto-Regular',
            paddingRight: 30,
            paddingLeft: 30,
            textAlign: 'center',

      },
      box: {
            flexDirection: 'row',
            justifyContent: 'space-around',
            borderWidth: 4,
            padding: 10,
            borderRadius: 10,
            margin: '2%',
            alignItems: 'center',
            borderColor: '#584DAD'
      }

});



function mapDispatchToProps(dispatch) {
      return {
      onSettingEventName: function (eventName) {
            dispatch({ type: 'setting', eventName: eventName })
      },
      onSettingPassword: function (pass) {
            dispatch({ type: "set", eventsPass: pass})
      }
      }
}


function mapStateToProps(state) {
      return { hostId: state.hostId }
}

export default connect(
      mapStateToProps,
      mapDispatchToProps
)(EventCreation);