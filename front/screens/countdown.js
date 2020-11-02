import React, { Component, useState, useEffect } from 'react';
import { AppRegistry, StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import CountDown from 'react-native-countdown-component';
import Moment from 'react-moment';

export default function Countdown({navigation}) {
  
const [TIMER, setTIMER] = useState(0)

useEffect(() => {
  const findTIMER = async() => {
    // ----------------------------------------- METTRE A JOUR l'IP --------------------------------------------
    const TIMERdata = await fetch('http://172.17.1.106:3000/afficheTimer', {
    })
    var TIMER = await TIMERdata.json();
    setTIMER(TIMER.rebours) 
  }

  findTIMER()   
   
  // console.log('Comptes à rebours FRONT ici ->', TIMER)
},[])

    return (
      
    <View style={{ flex: 1, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center'}}>

      {TIMER!=0 && (
            <CountDown    
              size={30}
              until={3}
              onFinish={() => navigation.navigate('Winnerguest')}
              digitStyle={{ backgroundColor: '#FFF', borderWidth: 2, borderColor: '#FF0060' }}
              digitTxtStyle={{ color: '#FF0060' }}
              timeLabelStyle={{ color: 'red', fontWeight: 'bold' }}
              separatorStyle={{ color: '#FF0060' }}
              timeToShow={['H', 'M', 'S']}
              timeLabels={{h: null, m: null, s: null }}
              showSeparator
            />)}

    </View>

    )
  };
