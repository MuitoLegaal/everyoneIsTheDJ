import React, { useState, useEffect } from 'react';
import { AppRegistry, View, Dimensions, StyleSheet, ImageBackground, Text, Image, ScrollView } from 'react-native';
import { Button, ListItem, CheckBox } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import CountDown from 'react-native-countdown-component';
import { MaterialIcons } from '@expo/vector-icons';
import RadioGroup, { Radio } from "react-native-radio-input";
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { connect } from 'react-redux';





function nouveauvote(props) {

  // liste example titres
  const list = ['Metronomy - A thing for me', 'Black Eyed Pipi - Pump pipi', 'ZZ Top - Gimme all your lovin', 'Oasis - Wonderwall', 'Niagara - L amour à la plage', '50 cent - BANG BANG jaime largent']

  // function que recupere le valeur du titre selectioné
  var getChecked = (value) => {
    console.log(value)
  }


  //HEADER
  var logo = <Image source={require('../../assets/logoMini.png')} style={{ height: 50, width: 50 }} />
  var logout = <FontAwesomeIcon icon={faPowerOff} size={20} style={{ color: "white" }} />
  var retour = <FontAwesomeIcon icon={faArrowLeft} size={20} style={{ color: "white" }} onPress={() => navigation.navigate('Homeinvite')} />




  //COUNTDOWN 
  const [TIMER, setTIMER] = useState(0)



  useEffect(() => {

    const findTIMER = async () => {


// ----------------------------------------- METTRE A JOUR l'IP --------------------------------------------
      var TIMERdata = await fetch('http://192.168.1.20:3000/afficheTimer', {
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

// ----------------------------------------- METTRE A JOUR l'IP --------------------------------------------
    var rawResponse = await fetch('http://192.168.1.20:3000/afficheTimer', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `idUserFromFront=${props.hostId}`
    })

    var timer = await rawResponse.json();

    setTIMER(timer.reboursFinal)
    console.log("rebours", timer)

    findTIMER()
  }




  // var handleVoteGuest = async () => {

  //   // --------------------------------- VOS IP ICI -----------------------------------------
  //   // Flo IP : 192.168.0.17
  //   // Vlad : 192.168.0.40
       // Max : 192.168.1.20
  //   var rawResponse = await fetch('http://192.168.0.40:3000/enregistrement', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  //     body: `titleFromFront=${title}&idUserFront=${props.hostId}`
  //   })

  //   var response = await rawResponse.json();

  //   console.log("response", response)

  //   if (response === true) {
  //     props.navigation.navigate('validation vote')
  //   }

  // }



  // BOUCLE QUE AFFICHE LES TITRES A VOTER

  var voteList = []

  for (let i = 0; i < list.length; i++) {
    voteList.push(<Radio iconName={"lens"} label={list[i]} value={i} />)
  }


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





        <View style={{ flex: 1, borderColor: 'white', borderWidth: 2, margin: 50, padding: 30, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }} >

          {/* {TIMER>0 && (<Text style={{ color: '#FF0060', marginBottom: 10}}>Pas de vote en cours</Text>)} */}
          <Text style={{ color: '#FF0060', marginBottom: 10 }}>Vote en cours, il te reste :</Text>


          {TIMER > 0 && (<CountDown
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
          />)}

        </View>



        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >


          <View style={{ flex: 1, margin: 30 }} >
            <Text style={{ color: 'white', fontSize: 20 }} >Votez pour le prochain titre:</Text>
          </View>



          <RadioGroup getChecked={this.getChecked} RadioGroupStyle={{ flex: 1, flexDirection: 'column', width: 300, margin: 20 }} IconStyle={{ backgroundColor: '#FF0060' }} coreStyle={{ backgroundColor: '#FF0060' }} labelStyle={{ color: 'white' }} >
            {voteList}
          </RadioGroup>


        </View>



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

          icon={
            <FontAwesomeIcon icon={faCheck} size={15} style={{ color: "white" }} />
          }


        />

        <Button
          title='  REFRESH'
          buttonStyle={{
            backgroundColor: '#FF0060',
            borderRadius: 10,
            color: 'white',
            marginTop: '5%',
            marginBottom: '5%',
            fontSize: 18
          }}

          icon={
            <FontAwesomeIcon icon={faCheck} size={15} style={{ color: "white" }} />
          }

          onPress={() => handleRefreshTIMER()}


        />


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
