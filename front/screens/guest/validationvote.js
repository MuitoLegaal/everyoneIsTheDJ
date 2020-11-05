import React, { useState, useEffect } from 'react';
import { AppRegistry, View, Dimensions, StyleSheet, ImageBackground, Text, Image, ScrollView } from 'react-native';
import { Button, ListItem, CheckBox } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Header } from 'react-native-elements';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { connect } from 'react-redux';
import { faRedo, faPowerOff, faCheck } from '@fortawesome/free-solid-svg-icons';



function validationvote(props) {

 //HEADER
 var logo = <Image source={require('../../assets/logoMini.png')} style={{ height: 50, width: 50 }} />
 var logout = <FontAwesomeIcon icon={faPowerOff} size={20} style={{ color: "white" }} onPress={() => props.navigation.navigate('Onboarding')}/>
 var retour = <FontAwesomeIcon icon={faArrowLeft} size={20} style={{ color: "white" }} onPress={() => navigation.navigate('Nouveauvote')} />

  //COUNTDOWN 
  const [TIMER, setTIMER] = useState(0)

  useEffect(() => {

    const findTIMER = async () => {

      // ----------------------------------------- METTRE A JOUR l'IP --------------------------------------------
      var TIMERdata = await fetch('http://192.168.0.40:3000/afficheTimer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `idUserFromFront=${props.hostId}`
      })

      var timer = await TIMERdata.json();
      setTIMER(timer.reboursFinal)
      console.log("rebours", timer)
    }

    findTIMER()

    console.log('Comptes à rebours FRONT ici ->', TIMER)
    console.log('hostIdState', props.hostId)
    console.log('TokenState', props.token)

  }, [])


  var handleRefreshTIMER = async () => {

    var rawResponse = await fetch('http://192.168.0.17:3000/afficheTimer', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `idUserFromFront=${props.hostId}`
    })

    var timer = await rawResponse.json();
    setTIMER(timer.reboursFinal)
    console.log("rebours", timer)

    if(timer) {
      navigation.navigate("nouveauvote")
    }
  }

  var handleWinner = async () => {

    props.navigation.navigate('WinnerHost')

  }

// BOUCLE QUE AFFICHE LES TITRES A VOTER

  return (
    <View style={styles.container}>
      <Header
        leftComponent={retour}
        centerComponent={logo}
        rightComponent={logout}
        containerStyle={{ backgroundColor: '#131313', padding: 20, flex: 0.1 }}
      />

      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}>

        <View style={{ flex: 1, justifyContent: 'flex-start', marginTop: 10 }}>
          <Text style={styles.text}>Bienvenue dans l'évènement:</Text>
        </View>

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.title}> %Anniv' de Bob% </Text>
          <Image source={require('../../assets/picto-fete2.png')} style={{ height: 80, width: 80, margin: 25 }} />
        </View>
       
        {TIMER > 0 && (  
        <View style={{ flex: 1, borderColor: 'white', borderWidth: 2, margin: 50, padding: 30, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }} >

          <Text style={{ color: '#FF0060', marginBottom: 10 }}>Vote en cours, résultat dans :</Text>

          <CountDown
            size={30}
            until={TIMER}
            onFinish={() => navigation.navigate('Winnerguest')}
            digitStyle={{ backgroundColor: '#FFF', borderWidth: 2, borderColor: '#FF0060' }}
            digitTxtStyle={{ color: '#FF0060' }}
            timeLabelStyle={{ color: 'red', fontWeight: 'bold' }}
            separatorStyle={{ color: '#FF0060' }}
            timeToShow={['M', 'S']}
            timeLabels={{ m: null, s: null }}
            showSeparator
          />

        </View>
        )}

        <Text style={styles.text}>Ton vote a bien été pris en compte !</Text>

        {TIMER <= 0 && (<Button
            title=' Découvrir le gagnant'
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

            onPress={() => handleWinner()}


          />)}


      </ScrollView>
    </View>

  )}

// STYLE ------------------------------------------------------------------------

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131313',

  },

  wrap: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#131313',
    alignItems: 'center',
    height: hp('110%'), // 70% of height device screen
    width: wp('100%')   // 80% of width device screen 
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
    textAlign: 'center',
    paddingRight: 30,
    paddingLeft: 30,
    paddingBottom: 40
  },

  text: {
    flex: 1,
    color: 'white',
    fontSize: 15,
    fontFamily: 'Roboto-Regular',
    paddingRight: 30,
    paddingLeft: 30,
  },

  ListItem: {
    backgroundColor: '#131313',
    color: '#fff',
    justifyContent: 'flex-start',

  }
})

// REDUX

function mapStateToProps(state) {
  return { token: state.token, hostId: state.hostId }
}

export default connect(
  mapStateToProps,
  null
)(validationvote);