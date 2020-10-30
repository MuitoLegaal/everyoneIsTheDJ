import React, { useState } from 'react';
import { AppRegistry, View, Dimensions, StyleSheet, ImageBackground, Text, Image, ScrollView } from 'react-native';
import { Button, ListItem, CheckBox } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import CountDown from 'react-native-countdown-component';
import { MaterialIcons } from '@expo/vector-icons';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'


function nouveauvote( props ) {

 const [vote, setVote] = useState(false);
 const [isSelected, setSelection] = useState(false);

 

  const list = [
    {
      artist: 'Amy Farhfa',
      title: 'Vice President'
    },
    {
      artist: 'Chris Jackson',
      title: 'Vice Chairman'
    },
    {
      artist: 'Chris Jackson',
      title: 'Vice Chairman'
    },
    {
      artist: 'Chris Jackson',
      title: 'Vice Chairman'
    },
    {
      artist: 'Chris Jackson',
      title: 'Vice Chairman'
    },
    {
      artist: 'Chris Jackson',
      title: 'Vice Chairman'
    },
    
  ]


  var chosenSong;

  if(vote === true){
    chosenSong = <MaterialIcons name="radio-button-checked" size={24} color="#FF0060" onPress={() => [i](false)} />
  }else{
    chosenSong = <MaterialIcons name="radio-button-unchecked" size={24} color="#FF0060" onPress={() => [i](true)} />
  }



  var logo = <Image source={require('../../assets/logoMini.png')} style={{height: 50, width: 50}} />
  var logout = <FontAwesomeIcon icon={faPowerOff} size={20} style={{color: "white"}} />
  var retour = <FontAwesomeIcon icon={faArrowLeft} size={20} style={{color: "white"}} onPress={() => navigation.navigate('Homeinvite')} />


  return (
    <View style={styles.container}>
      <Header
        leftComponent={retour}
        centerComponent={logo}
        rightComponent={logout}
        containerStyle={{backgroundColor: '#131313', padding: 20, flex: 0.1}}
      />


      <ScrollView style={{flex: 1}} contentContainerStyle={{alignItems: 'center', justifyContent: 'center'}}>


          <View style={{flex: 1, justifyContent: 'flex-start', marginTop: 10}}>
            <Text style={styles.text}>Bienvenue dans l'évènement:</Text>
          </View>

          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.title}>Anniv' de Bob</Text>
            <Image source={require('../../assets/picto-fete2.png')} style={{height: 80, width: 80, margin: 25}} />
          </View>


          

          
          <View style={{flex: 1, borderColor: 'white', borderWidth: 2, margin: 50, padding: 30, alignItems: 'center', justifyContent: 'center', borderRadius: 10}} >

            <Text style={{ color: '#FF0060', marginBottom: 10}}>Vote en cours, il te reste :</Text>

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

          </View>



          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} >


            <View style={{flex: 1, margin: 30}} >
              <Text style={{color: 'white', fontSize: 20}} >Votez pour le prochain titre:</Text>
            </View>

            {
              list.map((l, i) => (
                
                  <View key={i} style={{color: 'white', flex: 1, flexDirection: 'row', width: 300, margin: 20}}>


                     <View style={{marginRight: 10, justifyContent: 'flex-start'}} >
                        <Text style={{ textAlign: 'center', color: 'white' }}>{i + 1}.</Text>
                     </View>

                     <View style={{justifyContent: 'flex-start'}} >
                        <Text style={{color: 'white'}}>Artiste: {l.artist}</Text>
                        <Text style={{color: 'white'}}>Titre: {l.title}</Text>
                     </View>

                    <View style={{flex: 1, alignItems: 'flex-end'}}>
                      <CheckBox/>
                    </View>
                    

                  </View>

                  

              ))
            }

            

          </View>


          
            <Button 
              title= '  Valider mon vote'
              backgroundColor= '#FF0060'
              icon={
                <FontAwesomeIcon icon={faCheck} size={15} style={{color: "white"}} />
              }
              
              
            />
          


      </ScrollView>
    </View>

// onPress={() => navigation.navigate('Validationvote')}


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

export default nouveauvote;