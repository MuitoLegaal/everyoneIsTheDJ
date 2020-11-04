import React, {useState, useEffect} from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-native-elements';
import Divider from 'react-native-divider';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import Countdown from '../countdown';
import { connect } from 'react-redux';



function HomeHost(props){
var headerCenter = <Image source={require('../../assets/logoMini.png')} style={{width: 80, height: 82}} />


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



  return (
    <View style={styles.container}>
      <View style={{ height: 150 }}>
        <Header
          centerComponent={headerCenter}
          containerStyle={{ backgroundColor: "#131313", height: '20%', alignItems: 'flex-start', borderBottomWidth: 0, justifyContent: 'flex-start' }}
        />

        <Button
          buttonStyle={{
            backgroundColor: 'transparent',
            justifyContent: 'flex-end',
            alignItems: 'flex-start',
          }}
          icon={
            <FontAwesomeIcon icon={faBars} size={35} style={{ color: "white" }} onPress={() => props.navigation.openDrawer()} />
          }
        />

      </View>

      <ScrollView style={styles.wrap}>

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', height: 350, borderTopWidth: 1, borderTopColor: "#fff", borderBottomColor: '#fff', borderBottomWidth: 1 }} >


          <Text style={styles.text} >Aucun évènement en cours maintenant!</Text>



          <Text style={styles.title}>Évènement :</Text>

          <Text style={styles.subtext}>%anniv de bob%</Text>

          {TIMER <= 0 && (<Text style={styles.subtext}>Vote terminé : </Text>)}

          {TIMER <= 0 && (
            <Button
              title="Découvrir le titre gagnant"
              onPress={() => props.navigation.navigate('EventCreation')}
              buttonStyle={{
                backgroundColor: '#FF0060',
                borderRadius: 10,
                marginTop: '25%'
              }}
              titleStyle={{

                fontFamily: 'Roboto-Bold',
                fontSize: 20
              }}

            />
          )}

          {TIMER > 0 && (<Text style={styles.libelle}>Vote en cours, il te reste avant résultat : </Text>)}


          {TIMER <= 0 && (<Text style={{ color: '#FF0060', marginBottom: 10 }}>Pas de vote en cours</Text>)}

          {TIMER > 0 && (<Text style={{ color: '#FF0060', marginBottom: 10 }}>Vote en cours, il te reste :</Text>)}

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
        <View>

          <Text style={styles.subtitle} >Mes évènements</Text>


          <View style={styles.box} >

            <View style={{ textAlign: 'center', alignItems: 'center' }}>
              <Image source={require('../../assets/picto-fete2.png')} style={{ height: 150, width: 170 }} />
            </View>

            <View>
              <Text style={styles.subtext}>%Anniv Claude % </Text>
              <Text style={styles.text}>Date: %11/10/2020%</Text>
              <Text style={styles.text}>Statut: %en cours%</Text>
            </View>


            <Button
              title=" + Nouveau vote"
              onPress={() => props.navigation.navigate('Moderation')}
              buttonStyle={{
                backgroundColor: '#fff',
                color: '#584DAD',
                borderColor: '#584DAD',
                borderWidth: 3,
                borderRadius: 10,
                marginTop: '5%'
              }}
              titleStyle={{
                color: '#584DAD',
                fontFamily: 'Roboto-Bold'
              }}
            />


          </View>


          <View style={styles.box} >

            <View style={{ textAlign: 'center', alignItems: 'center' }}>
              <Image source={require('../../assets/picto-fete2.png')} style={{ height: 150, width: 170 }} />
            </View>

            <View>
              <Text style={styles.subtext}>%Anniv Claude % </Text>
              <Text style={styles.text}>Date: %11/10/2020%</Text>
              <Text style={styles.text}>Statut: %en cours%</Text>
            </View>

          </View>

        </View>
        <Button
          title=" Nouvelle soirée"
          onPress={() => props.navigation.navigate('EventCreation')}
          buttonStyle={{
            backgroundColor: '#584DAD',
            borderRadius: 10,
            marginTop: '2%'
          }}
          icon={<FontAwesomeIcon
            icon={faPlus}
            size={15}
            color="white"
          />
          }
        />
      </ScrollView>


    </View>


  )
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

  },
  title: {
    color: '#fff',
    fontSize: 40,
    fontFamily: 'Staatliches',
    marginTop: '2%'
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
  libelle: {
    color: '#584DAD',
    fontSize: 20,
    fontFamily: 'Roboto-Regular',
    paddingRight: 30,
    paddingLeft: 30,
    textAlign: 'center',
    marginTop: '6%'
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Roboto-Regular',
    textAlign: 'center',
    marginTop: '5%',


  },
  box: {
    flexDirection: 'column',
    // justifyContent: 'center',
    borderWidth: 4,
    padding: '8%',
    borderRadius: 10,
    margin: '2%',
    alignItems: 'stretch',
    borderColor: '#584DAD',
    textAlign: 'center'

  }

});

function mapStateToProps(state) {
  return { hostId: state.hostId }
}

export default connect(
  mapStateToProps,
  null
)(HomeHost);