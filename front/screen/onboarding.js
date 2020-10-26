import React, { Component } from 'react'
import Button from 'react-native'
import Carousel from './screen.carousel'


export default function onboarding() {
  return (
    <View style={styles.container}>
      <Carousel/>
      <Text>Vous êtes:</Text>
      <Button title="Hôte" backgroundColor="#E59622" color='#fff'></Button>
      <Text>Ou</Text>
      <Button title="Invité" backgroundColor="#584DAD" color='fff'></Button>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign : 'center'
  },
});
