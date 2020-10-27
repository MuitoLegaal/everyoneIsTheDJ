import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import CountDown from 'react-native-countdown-component';

export default function Countdown({navigation}) {
  
    return (

      <CountDown
        size={30}
        until={5}
        onFinish={() => navigation.navigate('Winnerguest')}
        digitStyle={{ backgroundColor: '#FFF', borderWidth: 2, borderColor: '#FF0060' }}
        digitTxtStyle={{ color: '#FF0060' }}
        timeLabelStyle={{ color: 'red', fontWeight: 'bold' }}
        separatorStyle={{ color: '#FF0060' }}
        timeToShow={['M', 'S']}
        timeLabels={{ m: null, s: null }}
        showSeparator
      />

    )
  };
