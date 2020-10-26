console.disableYellowBox = true;
import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View } from 'react-native'
 
import Swiper from 'react-native-swiper'
 
const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
})
 
export default class SwiperComponent extends Component {
  render() {
    return (
      <Swiper style={styles.wrapper} showsButtons={true}>
        <View style={styles.slide1}>
          <Text style={styles.text}>BIENVENUE</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>RECOIS TES INVITES AVEC LE MODE DJ HOTE</Text>
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
 
AppRegistry.registerComponent('myproject', () => SwiperComponent)