import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import Swiper from 'react-native-swiper'

 


const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#131313'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#131313'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#131313'
  },
  title: {
    color: '#fff',
    fontSize: 40,
    fontFamily:'Staatliches'
  },
  subtitle: {
    color: '#fff',
    fontSize: 30,
    fontFamily:'Staatliches',
    textAlign: 'center',
    paddingRight: 30 ,
    paddingLeft: 30,
    paddingBottom: 30
  },
 text: {
    color: '#fff',
    fontSize: 20,
    fontFamily:'Roboto-Regular',
    paddingRight: 30 ,
    paddingLeft: 30,
    textAlign: 'center'
  },
  
  dot1: {
    backgroundColor:'#FF0060',
    width: 12, height: 12,borderRadius: 6, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,
  },
  dot2: {
    backgroundColor:'#584DAD',
    width: 12, height: 12,borderRadius: 6, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,
  },
  dot3: {
    backgroundColor:'#E59622',
    width: 12, height: 12,borderRadius: 6, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,
  }
})

export default class SwiperComponent extends Component {
  render() {
    return (
      <Swiper style={styles.wrapper} showsButtons={false} index={0} loop={false}
      dot={ <View style={{backgroundColor:'#fff', width: 12, height: 12,borderRadius: 6, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
      activeDot={ <View style={styles.dot2} />}>
        
        <View style={styles.slide1}>
          <Image 
          source={require('../assets/logoMini.png')}
          style={{ width: 90, height: 92, marginBottom: 20 }} />
          <Text style={styles.title}>Bienvenue</Text>
        </View>
        <View style={styles.slide2}>
        <Image 
          source={require('../assets/logoMini.png')}
          style={{ width: 90, height: 92, marginBottom: 20 }}
        />
          <Text style={styles.subtitle}>reçois tes invités avec le mode DJ hôte</Text>
          <Text style={styles.text}>Prépare-toi à ambiancer ta soirée et faire vibrer tes invités avec des musiques qu'ils aiment !</Text>
        </View>
        <View style={styles.slide3}>
        <Image 
          source={require('../assets/logoMini.png')} 
          style={{ width: 90, height: 92, marginBottom: 20 }}
        />
          <Text style={styles.subtitle}>Suggère ta musique avec le mode dj invité</Text>
          <Text style={styles.text}>Pour une nouvelle démocratie musicale, propose et vote pour ta musique préférée !</Text>
        </View>
      </Swiper>
    
    )
  }
}

AppRegistry.registerComponent('myproject', () => SwiperComponent)
