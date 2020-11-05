import React, { Component, useCallback, useEffect, useState } from 'react'
import { Image, View, Text, StyleSheet, Linking, Alert, ScrollView } from 'react-native'
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { faBars, simplybuilt } from '@fortawesome/free-solid-svg-icons'
import { Header } from 'react-native-elements'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { color } from 'react-native-reanimated';
import {connect} from 'react-redux';


function Winner(props) {

  const [CLASSEMENTb, setCLASSEMENTb] = useState ([])
  
    useEffect(() => {
  
      const findCLASSEMENT = async () => {
  
<<<<<<< HEAD
    const TRIdata = await fetch('http://192.168.1.20:3000/winner', {
=======
<<<<<<< HEAD
    const TRIdata = await fetch('http://192.168.0.17:3000/winner', {
=======
    const TRIdata = await fetch('http://192.168.0.40:3000/winner', {
>>>>>>> 430904a27b3c12ee8b3af32b4a638180136549fa
>>>>>>> e352070dfa0ac56b037443393aa5673bf952aae6
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `idUserFromFront=${props.hostId}`
    })
    var classement = await TRIdata.json();
  
    setCLASSEMENTb(classement)
  
    console.log('classement BRUT ------------>', classement)
    }
  
    findCLASSEMENT()
  
  }, [])

  console.log('classement useSTATE ------------>', CLASSEMENTb)

  var headerCenter = <Image source={require('../../assets/logoMini.png')} style={{width: 80, height: 82}}  onPress={() => props.navigation.openDrawer()}/>


  const supportedURL = `https://www.youtube.com/results?search_query=avicii`
  
  const OpenURLButton = ({ url, children }) => {
    const handlePress = useCallback(async () => {
      // Checking if the link is supported for links with custom URL scheme.
      const supported = await Linking.canOpenURL(url);
      await Linking.openURL(url);
  }, [url]);
  
    return <Button title={children} onPress={handlePress} titleStyle={{color:'#584DAD', fontFamily: 'Roboto-Bold'}} buttonStyle={{backgroundColor:'#E69620',borderRadius: 10}} containerStyle={{marginTop:'5%', marginBottom:'5%'}}/>;
  };


if (CLASSEMENTb.length==0) {
  return (
    <View></View>
  )
} else {
  return (
<View style={styles.container}>
    <View style={{height:150}}>
            <Header
              centerComponent={headerCenter}
              // rightComponent={headerRight}
              containerStyle={{backgroundColor: "#131313", height: '20%', alignItems: 'flex-start', borderBottomWidth:0,  justifyContent: 'flex-start'}}
            />

{/* burger menu un peu non académique fait par maxime. je n'arrive pas à mettre le onPress différemment. il y a un conflit quand je le mets autrement. onPress du burger marchait bien avec la mise en formede HomeHost qui existait jeudi, j'ai fait des tests encore samedi. Sur screen Historic et Parameters il continue de bien fonctionner */}
            <Button 
              buttonStyle={{
                backgroundColor: 'transparent',
                justifyContent: 'flex-end', 
                alignItems: 'flex-start',
              }}
                icon={
                  <FontAwesomeIcon icon={faBars} size={35} style={{color: "white"}}  onPress={() => props.navigation.openDrawer()}/>
                }
            /> 

    </View>
    <ScrollView style={styles.wrap}>
        <View style={{alignItems: 'center', justifyContent: 'center', borderTopWidth:1, borderTopColor: "#fff"}} >  
          <Text style={styles.subtitle}>Et le gagnant est ...</Text>
          <Icon name="trophy" size={100} color="#E59622" style={{marginTop:'5%', marginBottom:'5%'}}/>
        </View>

      
      <View style={styles.winner} >
        <Text style={styles.winnertext}>1.</Text>

        <Text style={styles.winnertext}>{CLASSEMENTb.tri[0].titre}</Text>
        <Text style={styles.winnertext}>Votes: {CLASSEMENTb.tri[0].votes}</Text>
        <OpenURLButton url={supportedURL}> 
          <IconFontAwesome
                name="youtube-play"
                size={25}
                color="#584DAD" 
            /> Lancer le titre</OpenURLButton>

      </View>

      <View style={styles.second} >
        <Text style={styles.text}>2.</Text>
        <Text style={styles.text}>{CLASSEMENTb.tri[1].titre}</Text>
        <Text style={styles.text}>Votes: {CLASSEMENTb.tri[1].votes}</Text>
      </View>
      <View style={styles.second} >
        <Text style={styles.text}>3.</Text>
        <Text style={styles.text}>{CLASSEMENTb.tri[2].titre}</Text>
        <Text style={styles.text}>Votes: {CLASSEMENTb.tri[2].votes}</Text>
      </View>

      <Button 
          title="Retour à l'accueil" 
          buttonStyle={{
            backgroundColor: '#584DAD',
            borderRadius: 10,
            marginTop:'2%'
                        }} 
          onPress={() => props.navigation.navigate('HomeHost')}></Button>

    </ScrollView>
</View>

); 
}
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#131313',
    
  },
  wrap: {
      flexDirection: 'column',
      textAlign: 'center',
      height: hp('100%'), // 70% of height device screen
      width: wp('100%'),  // 80% of width device screen 
      backgroundColor: '#131313',
     

    },
    title: {
      color: '#fff',
      fontSize: 40,
      fontFamily:'Staatliches',
      marginTop: '2%'
    },

    subtitle: {
      color: '#fff',
      fontSize: 30,
      fontFamily:'Staatliches',
      textAlign: 'center',
      marginTop: '5%',
      marginLeft:'2%'
      
    },
    subtext: {
      color: '#fff',
      fontSize: 30,
      fontFamily:'Staatliches',
      textAlign: 'center',
      marginTop: '5%',
      marginLeft:'2%'
      
    },
    text: {
      color: '#fff',
      fontSize: 20,
      fontFamily:'Roboto-Regular',
      textAlign: 'center',
      marginTop: '5%',
      marginBottom:'2%'
    
      
    },
    winnertext: {
      color: '#584DAD',
      fontSize: 20,
      fontFamily:'Roboto-Bold',
      textAlign: 'center',
      marginTop: '5%',
      marginBottom:'2%'
    
      
    },
    winner: {
      textAlign:'center',
      alignItems:'center',
      justifyContent:'center',
      marginBottom:'5%'
    },

    second: {
      textAlign:'center',
      alignItems:'center',
      justifyContent:'center',
      marginBottom:'5%'
    },
    


});

function mapStateToProps(state) {
  return { hostId: state.hostId }
}

export default connect(
  mapStateToProps,
  null
)(Winner);