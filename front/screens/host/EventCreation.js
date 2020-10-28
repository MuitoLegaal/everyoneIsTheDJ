import React, {useState} from 'react';
import { View, Text, } from 'react-native';
import { Button } from 'react-native-elements';


const [errorMessage, setErrorMessage] = useState(false);
const [eventId, setEventId] = useState('');
const [eventPassword, setEventPassword] = useState('');


function EventCreation(props) {

      // var handleEventCreation = async () => {

      //       var rawResponse = await fetch('http://172.17.1.100:3000/eventcreation', {
      //             method: 'POST',
      //             headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      //             body: `eventNameFromFront=${eventName}&eventPasswordFromFront=${eventPassword}`
      //       })

      //       var response = await rawResponse.json();

      //       if (response.result === true) {
      //             navigation.navigate('SongListCreation')

      //       } else {
      //             setErrorMessage(true)
      //       }
      // }



      return (

            <View style={styles.backGroundColor}>
                  <Text>Création d'évènement par l'hôte</Text>
                  <View style={styles.inscription}>
                        <View style={{ justifyContent: 'center', alignItems: 'flex-start' }}>
                              <FontAwesomeIcon style={{ color: 'white' }} icon={faArrowLeft} size={30} />
                        </View>
                        <View style={{ justifyContent: 'center' }}>
                              <Text style={{ color: 'white', fontSize: 30 }}>DJ INVITÉ</Text>
                        </View>
                  </View>
                  <View style={{ flex: 1, alignItems: 'center' }}>
                        {logInDenied}
                        <Text style={{ color: 'white', alignSelf: 'flex-start' }}>Nom de l'évènement:</Text>
                        <TextInput style={{ backgroundColor: 'white', width: '90%', borderRadius: 10, marginBottom: "10%", height: '6.5%' }}
                              // onChangeText={text => setEventId(text)}
                              value={email}
                        />
                        <Text style={{ color: 'white', alignSelf: 'flex-start' }}>Mot de passe de l'évènement</Text>
                        <Text style={{ color: 'white', alignSelf: 'flex-start' }}>(2 caractères minimum) :</Text>
                        <TextInput style={{ backgroundColor: 'white', width: '90%', borderRadius: 10, marginBottom: "10%", height: '6.5%' }}
                              // onChangeText={text => setEventPassword(text)}
                              value={password}
                        />

                        <Button title="Créer l'évènement"
                              onPress={() => props.navigation.navigate('SongListCreation')}
                              // onPress={() => handleEventCreation()}
                        ></Button>

                        {/* ------------FLECHE DE RETOUR DEFINIE ICI EN DESSOUS (supprimer tout le bouton) ------------- */}
                        <Button buttonStyle={{ paddingTop: 15 }} title="<- flèche retour en haut"
                              onPress={() => props.navigation.navigate('HomeHost')}
                              
                        ></Button>

                  </View>
            </View>
      );
}

export default EventCreation;