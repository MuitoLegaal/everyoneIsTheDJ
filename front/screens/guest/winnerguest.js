import React, { Component, useCallback } from 'react'
import { Image, View, Text, StyleSheet, Linking, Alert, ScrollView } from 'react-native'
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { faBars, simplybuilt } from '@fortawesome/free-solid-svg-icons'
import { Header } from 'react-native-elements'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { color } from 'react-native-reanimated';


function Winnerguest(props) {

  //var headerRight = <FontAwesomeIcon icon={faBars} size={35} style={{color: "white"}} onPress={() => props.navigation.openDrawer()}/>;
  var headerCenter = <Image source={require('../../assets/logoMini.png')} style={{width: 80, height: 82}}/>



  const supportedURL = `https://www.youtube.com/results?search_query=avicii`
  
  const OpenURLButton = ({ url, children }) => {
    const handlePress = useCallback(async () => {
      // Checking if the link is supported for links with custom URL scheme.
      const supported = await Linking.canOpenURL(url);
      await Linking.openURL(url);
  }, [url]);
  
    return <Button title={children} onPress={handlePress} titleStyle={{color:'#584DAD', fontFamily: 'Roboto-Bold'}} buttonStyle={{backgroundColor:'#E69620',borderRadius: 10}} containerStyle={{marginTop:'5%', marginBottom:'5%'}}/>;
  };



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
        <Text style={styles.winnertext}>Artiste - Titre: %Lorem Ipsum%</Text>
        <Text style={styles.winnertext}>Votes: %Nombre%</Text>
      </View>

      <View style={styles.second} >
        <Text style={styles.text}>2.</Text>
        <Text style={styles.text}>Artiste - Titre: %Lorem Ipsum%</Text>
        <Text style={styles.text}>Votes: %Nombre%</Text>
      </View>
      <View style={styles.second} >
        <Text style={styles.text}>3.</Text>
        <Text style={styles.text}>Artiste - Titre: %Lorem Ipsum%</Text>
        <Text style={styles.text}>Votes: %Nombre%</Text>
      </View>

      <Button 
          title="Retour à l'accueil" 
          buttonStyle={{
            backgroundColor: '#584DAD',
            borderRadius: 10,
            marginTop:'2%'
                        }} 
          onPress={() => props.navigation.navigate('Nouveauvote')}></Button>

    </ScrollView>
</View>

); 
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
  return {
    hostId: state.hostId,
    nameToDisplay: state.EventName
  }
}

export default Winnerguest;