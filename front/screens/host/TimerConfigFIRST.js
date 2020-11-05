import React, { useEffect } from 'react';
import { View, Text, AsyncStorage, ScrollView, Image, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faKey } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Header, Button } from 'react-native-elements'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { connect } from 'react-redux'


function TimerConfigFIRST(props) {


  var handleInitTimer5 = async () => {

    //APPEL AU BACKEND//
    var rawResponse = await fetch('http://192.168.0.17:3000/initTimer5', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `idUserFromFront=${props.hostId}`
    })

    var response = await rawResponse.json();

    

    console.log(response);
    props.navigation.navigate('ShareEvent')
  }

  var handleInitTimer10 = async () => {

    //APPEL AU BACKEND//
    var rawResponse = await fetch('http://192.168.0.17:3000/initTimer10', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `idUserFromFront=${props.hostId}`
    })

    var response = await rawResponse.json();

    

    console.log(response);
    props.navigation.navigate("ShareEvent")
  }

  var handleInitTimer20 = async () => {

    //APPEL AU BACKEND//
    var rawResponse = await fetch('http://192.168.0.17:3000/initTimer20', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `idUserFromFront=${props.hostId}`
    })

    var response = await rawResponse.json();

    

    console.log(response);
    props.navigation.navigate("ShareEvent")
  }



  var headerLeft = <FontAwesomeIcon icon={faArrowLeft} size={35} style={{ color: "white" }} onPress={() => props.navigation.navigate('SongListCreation')} />;
  var headerCenter = <Text style={styles.title} >Timer</Text>;
  var headerRight = <FontAwesomeIcon icon={faBars} size={35} style={{color: "white"}} onPress={() => props.navigation.openDrawer()}/>;

  return (


    <View style={styles.container}>
        <View>
              <Header
                containerStyle={{
                  backgroundColor: "#131313", 
                //height: '20%', 
                alignItems: 'flex-start', 
                borderBottomWidth:0,  
                marginBottom:'5%'
              
                }}
                leftComponent={headerLeft}
                centerComponent={headerCenter}
                rightComponent={headerRight}
              />
        </View>


      <View style={styles.wrap} >


        <View>
        <Text style={styles.text}>Bienvenu dans la soirée </Text>
          <Text style={styles.subtitle} >{props.nameToDisplay}</Text>

          <Button 
            title="5 min"
            onPress={() => handleInitTimer5()}
            buttonStyle={{
              backgroundColor: '#FF0060',
              borderRadius: 10,
              color: 'white',
              marginRight:'2%',
              marginTop:'5%'
          
          }}
          ></Button>

          <Button 
            title="10 min"
            onPress={() => handleInitTimer10()}
            buttonStyle={{
              backgroundColor: '#FF0060',
              borderRadius: 10,
              color: 'white',
              marginRight:'2%',
              marginTop:'5%'
          
          }}
          ></Button>

          <Button 
            title="20 min"
            onPress={() => handleInitTimer20()}
            buttonStyle={{
              backgroundColor: '#FF0060',
              borderRadius: 10,
              color: 'white',
              marginRight:'2%',
              marginTop:'5%'
          
          }}
          ></Button>

        </View>

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
      flexDirection: 'column',
      alignItems: 'center',
      //justifyContent: 'center',
      textAlign: 'center',
      height: hp('100%'), // 70% of height device screen
      width: wp('100%'),  // 80% of width device screen 
      backgroundColor: '#131313',
      borderTopColor: '#fff', 
      borderTopWidth:1

    },
    title: {
      color: '#fff',
      fontSize: 40,
      fontFamily:'Staatliches'
    },

    subtitle: {
      color: '#584DAD',
      fontSize: 40,
      fontFamily: 'Staatliches',
      textAlign: 'center',
      marginTop: '6%',
      marginBottom:'5%'
  
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
});

function mapStateToProps(state) {
  return {
    nameToDisplay: state.EventName, hostId: state.hostId
  }
}

// function mapDispatchToProps(dispatch){
//   return{
//     onSettingTimer: function(time){
//       dispatch({type: 'setTime', timer: time})
//     }
//   }
// }

export default connect(
  mapStateToProps,
  null
)(TimerConfigFIRST);