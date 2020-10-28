import React, { useState } from 'react';
import { AppRegistry, View, Dimensions, StyleSheet, ImageBackground, Text, Image } from 'react-native';
import { Button, ListItem } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import CountDown from 'react-native-countdown-component';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


function nouveauvote( props ) {

  const [checked, setChecked] = useState(false);
  const [checkBox, setCheckBox] = useState([]);

  const list = [
    {
      artist: 'Amy Farhfa',
      title: 'Vice President'
    },
    {
      artist: 'Chris Jackson',
      title: 'Vice Chairman'
    },
    // ...more items
  ]

  // if (checked == false) {
  //   setCheckBox(
  //   )
  // }  //     <MaterialIcons name="radio-button-unchecked" size={24} color="#FF0060" onPress={() => setChecked(true)} />


  // else if (checked == true) {
  //   setCheckBox(
  //     <MaterialIcons name="radio-button-checked" size={24} color="#FF0060" onPress={() => setChecked(false)} />
  //   )
  // }
  var headerRight = <Icon
    name="power-off"
    size={30}
    color="#fff"
    style={{ position: 'relative', left: 10 }}
    onPress={() => props.navigation.navigate('DJhoteFirstScreen')}
    />;
{/* <FontAwesomeIcon icon={power-off} size={35} style={{color: "white"}} onPress={() => props.navigation.navigate('DJhoteFirstScreen')} />; */}
  var headerCenter = <Text style={{color: '#fff', fontSize: 40, fontFamily:'Staatliches', textAlign: 'center', alignItems: 'baseline'}}></Text>;
 
  
  return (
    <View style={styles.container}>
        <View style={styles.wrap}>
          <Header
                  containerStyle={{backgroundColor: '#131313', borderBottomWidth: 0}}
                  rightComponent={headerRight}
                  centerComponent={headerCenter}
                  
          />
      
          <Image 
                  source={require('../../assets/logoMini.png')}
                  style={{ width: 90, height: 92, marginBottom: 20, marginTop: 30, alignContent:'center', justifyContent:'center', alignItems:'center'}}
            />
      <Text style={styles.text}>Bienvenue dans l'évènement:</Text>
      <Text style={styles.title}>Anniv' de Bob</Text>
     
      <Image
        source={require('../../assets/picto-fete2.png')}
        style={{ width: 150, height: 150 }}
      />
      <Text style={{ color: '#FF0060' }}>Vote en cours, il te reste :</Text>

      <Text>Votez pour le prochain titre:</Text>

      <CountDown
        size={30}
        until={60}
        onFinish={() => navigation.navigate('Winnerguest')}
        digitStyle={{ backgroundColor: '#FFF', borderWidth: 2, borderColor: '#FF0060' }}
        digitTxtStyle={{ color: '#FF0060' }}
        timeLabelStyle={{ color: 'red', fontWeight: 'bold' }}
        separatorStyle={{ color: '#FF0060' }}
        timeToShow={['M', 'S']}
        timeLabels={{ m: null, s: null }}
        showSeparator
      />

      {
        list.map((l, i) => (
          <View key={i} style={styles.text} bottomDivider>
            <View style={styles.text}>
              <Text style={{ textAlign: 'center' }}>{i + 1}.</Text>
              <Text>Artiste: {l.artist}</Text>
              <Text>Titre: {l.title}</Text>
              {checkBox}
            </View>


          </View>
        ))
      }

      {/* <Button onPress={() => navigation.navigate('Homeinvite')} title="Retour"></Button> */}
      <Button title="Valider mon vote"
        onPress={() => navigation.navigate('Validationvote')}
        buttonStyle={{
          backgroundColor: '#FF0060',
          // paddingLeft: 120,
          // paddingRight: 120,
          // paddingTop: 10,
          // paddingBottom: 10,
          // marginBottom: 20,
        }}></Button>
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
    color: '#fff',
    fontSize: 20,
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

export default nouveauvote;