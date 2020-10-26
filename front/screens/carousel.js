import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Dimensions, Image } from 'react-native';
// import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Swiper from 'react-native-swiper'

 
// export default class SwiperComponent extends Component {
//   render() {
//     return (
//       <Swiper style={styles.wrapper} showsButtons={true}>
//         {/* <View style={styles.responsiveBox}> */}
//           <View style={styles.slide1}>
//             <Text style={styles.title}>BIENVENUE</Text>
//           </View>
//           <View style={styles.slide2}>
//             <Text style={styles.subtitle}>RECOIS TES INVITES AVEC LE MODE DJ HOTE</Text>
//             <Text style={styles.text}>Prépare-toi à ambiancer ta soirée et faire vibrer tes invités avec des musiques qu'ils aiment !</Text>
//           </View>
//           <View style={styles.slide3}>
//             <Text style={styles.subtitle}>SUGGERE TA MUSIQUE AVEC LE MODE DJ INVITE</Text>
//             <Text style={styles.text}>Pour une nouvelle démocratie musicale, propose et vote pour ta musique préférée !</Text>
//           </View>
//         {/* </View> */}
//       </Swiper>
//     )
//   }
// }

const styles = StyleSheet.create({
  wrapper: {
    // flex: 1,
    // backgroundColor: '#131313',
    // //alignItems: 'center',
    // //justifyContent: 'center',
    // //textAlign: 'center',
    // height: '100%',
    
  },
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
    paddingBottom: 40
  },
 text: {
    color: '#fff',
    fontSize: 20,
    fontFamily:'Roboto-Regular',
    paddingRight: 30 ,
    paddingLeft: 30,
    

  // textbold: {
  //   color: '#fff',
  //   fontSize: 28,
  //   fontWeight: 'bold',
  //   textAlign: 'center'
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
          <Image source={require('../assets/logoMini.png')} />
          <Text style={styles.title}>BIENVENUE</Text>
        </View>
        <View style={styles.slide2}>
        <Image source={require('../assets/logoMini.png')}/>
          <Text style={styles.subtitle}>RECOIS TES INVITÉS AVEC LE MODE DJ HOTE</Text>
          <Text style={styles.text}>Prépare-toi à ambiancer ta soirée et faire vibrer tes invités avec des musiques qu'ils aiment !</Text>
        </View>
        <View style={styles.slide3}>
        <Image source={require('../assets/logoMini.png')} />
          <Text style={styles.subtitle}>SUGGÈRE TA MUSIQUE AVEC LE MODE DJ INVITÉ</Text>
          <Text style={styles.text}>Pour une nouvelle démocratie musicale, propose et vote pour ta musique préférée !</Text>
        </View>
      </Swiper>
    
    )
  }
}

AppRegistry.registerComponent('myproject', () => SwiperComponent)
