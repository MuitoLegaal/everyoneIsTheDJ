console.disableYellowBox = true;
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Dimensions } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

 
import Swiper from 'react-native-swiper'

 
export default class SwiperComponent extends Component {
  render() {
    return (
      <Swiper style={styles.wrapper} showsButtons={true}>
        <View style={styles.slide1}>
          <Text style={styles.title}>BIENVENUE</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.subtitle}>RECOIS TES INVITES AVEC LE MODE DJ HOTE</Text>
          <Text style={styles.text}>Prépare-toi à ambiancer ta soirée et faire vibrer tes invités avec des musiques qu'ils aiment !</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>SUGGERE TA MUSIQUE AVEC LE MODE DJ INVITE</Text>
          <Text style={styles.text}>Pour une nouvelle démocratie musicale, propose et vote pour ta musique préférée !</Text>
        </View>
      </Swiper>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#131313',
    alignItems: 'center',
    justifyContent: 'center',
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  subtitle: {
    color: '#fff',
    fontSize: 30,
    fontFamily:'Staatliches',
    textAlign: 'center'
  },
  title: {
    color: '#fff',
    fontSize: 30,
    fontFamily:'Staatliches'
  },
 text: {
    color: '#fff',
    fontSize: 30,
    fontFamily:'Roboto-Regular'

  }
})
 
AppRegistry.registerComponent('myproject', () => SwiperComponent)





     // <View style={styles.container}>
     //   <View style={styles.responsiveBox}>
     //   <Text style={styles.title}>Hello</Text>
     //   <Text style={styles.subtitle}>Open up App</Text>
     //   <Text style={styles.text}>Working on your app!</Text>
     //   <StatusBar style="auto" />
     //   </View>
     // </View>

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#131313',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   responsiveBox: {
//     width: wp('84.5%'),
//     height: hp('17%'),
//     borderWidth: 2,
//     borderColor: 'orange',
//     flexDirection: 'column',
//     justifyContent: 'space-around' 
//   },
//   title: {
//     color: '#fff',
//     fontFamily: 'Staatliches_400Regular',
    
//   },
//   subtitle: {
//     color: '#fff',
    
//   },
//   text: {
//     color: '#fff',
    
//   },
// });
