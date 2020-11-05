import React, { useState, useEffect } from 'react';
import { AppRegistry, View, Dimensions, StyleSheet, ImageBackground, Text, Image, ScrollView } from 'react-native';
import { Button, ListItem, CheckBox } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import CountDown from 'react-native-countdown-component';
import RadioGroup, { Radio } from "react-native-radio-input";
import { faRedo, faPowerOff, faCheck } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { connect } from 'react-redux';


function nouveauvote(props) {

  // liste example titres à supprimer à la fin quand les titres de la playlist remonteront depuis la BDD
  const listTITRES = [
      'Maroon 5 - This Love',
      'No Doubt - Dont Speak',
      'Oasis - Wonderwall',
      'Pink Floyd - Another Brick In The Wall'
  ]
  const [SONGchosen, setSONGchosen] =  useState('')
  const [TIMER, setTIMER] = useState(0)
  const [playlist, setPlaylist] = useState([])

  //HEADER
  var logo = <Image source={require('../../assets/logoMini.png')} style={{width: 80, height: 82}} />
  var logout = <FontAwesomeIcon icon={faPowerOff} size={35} style={{ color: "white" }} />
  var retour = <FontAwesomeIcon icon={faArrowLeft} size={35} style={{color: "white"}} onPress={() => props.navigation.navigate('Homeinvite')} />;




// ---------------------------------------- chargement de la playlist --------------------------------------------


  useEffect(() => {

    const findTIMER = async () => {

      // ----------------------------------------- METTRE A JOUR l'IP --------------------------------------------
      var TIMERdata = await fetch('http://192.168.0.17:3000/afficheTimer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `idUserFromFront=${props.hostId}`
      })

      var timer = await TIMERdata.json();
      setTIMER(timer.reboursFinal)
      // console.log("rebours", timer)
    }

    findTIMER()


    const findPLAYLIST = async () => {
      // ----------------------------------------- METTRE A JOUR l'IP --------------------------------------------
      const rawDATA = await fetch('http://192.168.0.17:3000/playlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `idUserFromFront=${props.hostId}`
      })
      var data = await rawDATA.json();
      console.log('data en front-----------------', data.playlistDB) 
      var arrayPL = data.playlistDB
      setPlaylist(arrayPL)
    }

    findPLAYLIST()

  }, [])




  var handleRefreshTIMER = async () => {

    var rawResponse = await fetch('http://192.168.0.17:3000/afficheTimer', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `idUserFromFront=${props.hostId}`
    })

    var timer = await rawResponse.json();

    setTIMER(timer.reboursFinal)
  }

  // function que recupere le valeur du titre selectioné
  var getChecked = async (value) => {
    setSONGchosen(value)
    // console.log('console log value ->', value)
    // console.log('console log SONGchosen 1 ->', SONGchosen)
  }

// ---------------------------------------- envoi du vote en BACK ------------------------------------------------
   var handleVoteGuest = async () => {   
      const SONGdata = await fetch('http://192.168.0.17:3000/voteguest', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `titreFromFront=${SONGchosen}&idUserFromFront=${props.hostId}&tokenFromFront=${props.token}`
      // body: `titreFromFront=${'Cookie Dingler - Femme libérée'}&idUserFromFront=${'userId_TEST_000000'}&tokenFromFront=${'nnnnnnnnnnnnnnnn'}`
      // body: `titreFromFront=${SONGchosen}`
    })
    var SONG = await SONGdata.json();
    props.navigation.navigate("Validationvote")
  }

  
 // BOUCLE QUE AFFICHE LES TITRES DU VOTER
  var voteList = []
  for (let i = 0; i < playlist.length; i++) {
    voteList.push(<Radio key={i} iconName={"lens"} label={playlist[i].titre} value={playlist[i].titre} />)
  }


  return (
    <View style={styles.container}>
      <View style={{ height: 150 }}>
        <Header
          leftComponent={retour}
          centerComponent={logo}
          rightComponent={logout}
          containerStyle={{backgroundColor: "#131313", height: '20%', alignItems: 'flex-start', borderBottomWidth:0,  justifyContent: 'flex-start'}}
        />
      </View>


      <ScrollView style={styles.wrap}>


        <View style={{ flex: 1, justifyContent: 'flex-start', marginTop: 10 }}>
          <Text style={styles.text}>Bienvenue dans la soirée de </Text>
          
        </View>

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.subtext}> %Anniv' de Bob% </Text>
          <Image source={require('../../assets/picto-fete2.png')} style={{ height: 150, width: 170, marginTop: '5%' }} />
        </View>





        <View style={{ flex: 1, borderColor: 'white', borderWidth: 2, margin: 50, padding: 30, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }} >

          {TIMER <= 0 && (<Text style={{ color: '#FF0060', marginBottom: 10 }}>Pas de vote en cours</Text>)}
          {TIMER > 0 && (<Text style={{ color: '#FF0060', marginBottom: 10 }}>Vote en cours, il te reste :</Text>)}

          {TIMER > 0 && (<CountDown
            size={30}
            until={TIMER}
            onFinish={() => props.navigation.navigate('Winnerguest')}
            digitStyle={{ backgroundColor: '#FFF', borderWidth: 2, borderColor: '#FF0060' }}
            digitTxtStyle={{ color: '#FF0060' }}
            timeLabelStyle={{ color: 'red', fontWeight: 'bold' }}
            separatorStyle={{ color: '#FF0060' }}
            timeToShow={['M', 'S']}
            timeLabels={{ m: null, s: null }}
            showSeparator
            
          />)}

        </View>


        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch' }} >

          {TIMER > 0 && (
          
          <View>

            <Text style={{ color: 'white', fontSize: 20, marginTop: '10%', marginBottom: '10%', marginLeft: '5%' }} >Vote pour le prochain titre : </Text>

            <RadioGroup getChecked={getChecked} RadioGroupStyle={{ flex: 1, flexDirection: 'column', marginBottom: '10%', marginLeft: '5%' }} IconStyle={{ backgroundColor: '#FF0060' }} coreStyle={{ backgroundColor: '#FF0060' }} labelStyle={{ color: 'white', fontSize: 18 }} >
              {voteList}
            </RadioGroup>

            <Button
              title='  Valider mon vote'
              buttonStyle={{
                backgroundColor: '#FF0060',
                borderRadius: 10,
                color: 'white',
                marginTop: '5%',
                marginBottom: '5%',
                fontSize: 18
              }}
              titleStyle={{
                fontSize: 20,
                fontFamily: 'Roboto-Bold'
              }}

              icon={
                <FontAwesomeIcon icon={faCheck} size={15} style={{ color: "white" }} />
              }
              onPress={() => handleVoteGuest()}

            />
          </View>
          
          )}

          {TIMER <= 0 && (<Button
            title=' REFRESH'
            buttonStyle={{
              backgroundColor: '#E59622',
              borderRadius: 10,
              marginTop: '5%',
              marginBottom: '5%',

            }}
            titleStyle={{
              fontFamily: 'Staatliches',
              fontSize: 25
            }}


            icon={
              <FontAwesomeIcon icon={faRedo} size={25} style={{ color: "white" }} />
            }

            onPress={() => handleRefreshTIMER()}


          />)}

        </View>
      </ScrollView>
    </View>
  );
}

// STYLE ------------------------------------------------------------------------

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
    borderTopColor: '#fff',
    borderTopWidth: 1
  },

  header: {
    backgroundColor: '#131313',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "row",

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
    marginTop: '2%',
    marginLeft: '2%'

  },
  subtext: {
    color: '#fff',
    fontSize: 30,
    fontFamily: 'Staatliches',
    textAlign: 'center',
    marginTop: '5%',
    marginLeft: '2%'

  },

  text: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Roboto-Regular',
    textAlign: 'left',
    marginTop: '5%',
    marginLeft: '4%'


  },

  ListItem: {
    backgroundColor: '#131313',
    color: '#fff',
    justifyContent: 'flex-start',

  }

});

// STYLE ------------------------------------------------------------------------



// REDUX

function mapStateToProps(state) {
  return { token: state.token, hostId: state.hostId }
}

export default connect(
  mapStateToProps,
  null
)(nouveauvote);