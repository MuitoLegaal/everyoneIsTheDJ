import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import Carousel from './carousel'


export default function Onboarding() {
  return (
    <View style={styles.container}>
      <Carousel/>
        <Text style={{ color: '#fff' }}>Vous êtes :</Text>
        <Button title="Hôte" buttonStyle={{backgroundColor: '#E59622'}}></Button>
        <Text style={{ color: '#fff', textDecorationLine: 'none' }}> Ou </Text>
        <Button title="Invité" buttonStyle={{backgroundColor: '#584DAD'}}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131313',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },

});
