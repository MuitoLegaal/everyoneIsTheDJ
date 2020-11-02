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


function SongListCreation(props) {

  var headerCenter = <Text style={styles.title}>DJ Hôte</Text>
  var headerRight = <FontAwesomeIcon icon={faBars} size={35} style={{ color: "white" }} onPress={() => props.navigation.openDrawer()} />
  var headerLeft = <FontAwesomeIcon style={{ color: 'white' }} icon={faArrowLeft} size={30} onPress={() => props.navigation.navigate('EventCreation')} />

  const [titreProposeHote, setTitreProposeHote] = useState();
  const [titreListHote, setTitreListHote] = useState([]);
  const [TOPlist, setTOPlist] = useState([]);

  var listHote


  let artistUndefined;
  // let listHote;

  useEffect(() => {
    const findTOP = async () => {
      // ----------------------------------------- METTRE A JOUR l'IP --------------------------------------------
      const TOPdata = await fetch('http://192.168.0.40:3000/findTOP', {
      })
      var TOP = await TOPdata.json();
      setTOPlist(TOP)
    }

    findTOP()

    console.log('TOPlist passé par un set ici ->', TOPlist)
  }, [])


  var handleAjouterTitre = async () => {

    //APPEL AU BACKEND//
    var rawResponse = await fetch('http://192.168.0.40:3000/ajoutertitre', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `titreFromFront=${titreProposeHote}`
    })

    var response = await rawResponse.json();

    console.log(response);

    //FRONT//
    console.log('titreProposeHote++++++++++++++++', titreProposeHote)

    setTitreListHote([...titreListHote, titreProposeHote])

    if (titreProposeHote != null) {
      console.log("titreProposeHoteTTTTTTTTTTTT", titreListHote)

      listHote = titreListHote.map((titre, i) => {

        return (
          <View style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between', marginRight: '2%', }}>
            key={i}
            <Text style={styles.songtextAjout}>{titre}</Text>
            <FontAwesomeIcon onPress={() => handleSupprimerTitre()} key={response._id} icon={faTrash} size={20} style={{ color: "#fff" }} />
          </View>
        )
      }

      );

      console.log(listHote);

      setTitreProposeHote('')
    }

    else {
      console.log("titre proposé ========= ", titreProposeHote)
      artistUndefined = <Badge status="error" badgeStyle={{ color: 'white', backgroundColor: '#FF0060' }} value="Le champ est vide"></Badge>
    }
  }


  var handleSupprimerTitre = async () => {

    var idTest = "5f9d9e1aa3eb5025a0a807ed"

    var rawResponse = await fetch('http://192.168.0.40:3000/supprimertitre', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `titreIdFromFront=${idTest}`
    })

    var response = await rawResponse.json();

    console.log(response);
  };


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
        <View style={{ borderBottomWidth: 1, borderBottomColor: "#fff" }}>

          {/* <View style={{ flex: 1, backgroundColor:'#2ecc71', justifyContent: 'center', alignItems: 'center'}}>   */}
          <Text style={styles.text}>Bienvenu dans la soirée de </Text>
          <Text style={styles.subtitle} >NOM DE LEVENT {props.nameToDisplay}</Text>
          <Text style={styles.bodytext}>Compose ta liste de titres candidats aux votes (3 titres minimum).</Text>
          {artistUndefined}

          {TOPlist != 0 && (

            <View style={{ flex: 1, flexDirection: 'column' }}>

              <View style={styles.titre}>
                <FontAwesomeIcon onPress={() => handleSupprimerTitre()} icon={faTrash} size={20} style={{ color: "#fff", marginLeft: '2%' }} />
                <Text style={styles.songtext}>{TOPlist.randomTitles.title1}</Text>
              </View>
              <View style={styles.titre}>
                <FontAwesomeIcon onPress={() => handleSupprimerTitre()} icon={faTrash} size={20} style={{ color: "#fff", marginLeft: '2%' }} />
                <Text style={styles.songtext}>{TOPlist.randomTitles.title2}</Text>
              </View>
              <View style={styles.titre}>
                <FontAwesomeIcon onPress={() => handleSupprimerTitre()} icon={faTrash} size={20} style={{ color: "#fff", marginLeft: '2%' }} />
                <Text style={styles.songtext}>{TOPlist.randomTitles.title3}</Text>
              </View>
              <View style={styles.titre}>
                <FontAwesomeIcon onPress={() => handleSupprimerTitre()} icon={faTrash} size={20} style={{ color: "#fff", marginLeft: '2%' }} />
                <Text style={styles.songtext}>{TOPlist.randomTitles.title4}</Text>
              </View>


            </View>
          )}

          <View style={{ flexDirection: 'column' }}>
            {listHote}
          </View>



        </View>

        <View>
          <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', marginTop: '5%' }}>
            <Input
              label='Artiste - Titre :'
              placeholder='Lady Gaga - Poker Face'
              type='text'
              containerStyle={{
                color: '#fff',
                width: 290,
                marginTop: '3%',
                alignItems: 'stretch'

              }}
              inputStyle={{
                fontFamily: 'Roboto-Bold',
                fontSize: 16,
                color: '#fff',

              }}
              labelStyle={{
                fontFamily: 'Roboto-Bold',
                fontSize: 18,
                color: '#584DAD',

              }}
              onChangeText={text => setTitreProposeHote(text)}
              value={titreProposeHote}
            />


            <Button
              title='+'
              buttonStyle={{
                backgroundColor: '#584DAD',
                borderRadius: 10,
                width: 40,
                height: 40,
                color: 'white',
                marginRight: '2%'

              }}
              onPress={() => handleAjouterTitre()}
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

  );
}

function mapStateToProps(state) {
  return {
    nameToDisplay: state.EventName
  }
}






const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131313',
  },

  wrap: {
    flexDirection: 'column',
    textAlign: 'center',
    height: hp('100%'), // 70% of height device screen
    width: wp('100%'),  // 80% of width device screen 
    backgroundColor: '#131313',
    borderTopWidth: 1,
    borderTopColor: "#fff",

  },

  title: {
    color: '#fff',
    fontSize: 40,
    fontFamily: 'Staatliches'
  },

  subtitle: {
    color: '#584DAD',
    fontSize: 40,
    fontFamily: 'Staatliches',
    textAlign: 'center',
    marginTop: '6%',

  },

  text: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Roboto-Regular',
    paddingRight: '10%',
    paddingLeft: '5%',
    textAlign: 'center',
    marginTop: '6%',

  },
  songtext: {
    color: '#E59622',
    fontSize: 18,
    fontFamily: 'Roboto-Regular',
    marginLeft: '5%',
    paddingRight: '5%',
    textAlign: 'left',
    marginTop: '6%'
  },
  songtextAjout: {
    color: '#584DAD',
    fontSize: 18,
    fontFamily: 'Roboto-Regular',
    paddingRight: '10%',
    paddingLeft: '5%',
    textAlign: 'left',
    marginTop: '6%',

  },
  bodytext: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Roboto-Regular',
    paddingRight: 30,
    paddingLeft: 30,
    textAlign: 'left',
    marginTop: '10%',
    marginBottom: '6%'
  },
  titre: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    marginBottom: '5%',
    marginRight: '2%'
  }



});

export default connect(
  mapStateToProps,
  null
)(SongListCreation)