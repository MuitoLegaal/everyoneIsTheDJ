import React, { Component, useState } from 'react';
import { AppRegistry, StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';

export default function checkbox() {

  const [checked, setChecked] = useState(false);
  const [nbcheck, setNbcheck] = useState(false)

  if (checked == false) {
    return (
      <MaterialIcons name="radio-button-unchecked" size={24} color="#FF0060" onPress={() => setChecked(true)} />
    )
  }

  else if (checked == true && nbcheck == false) {
    return (
      <MaterialIcons name="radio-button-checked" size={24} color="#FF0060" onPress={() => setChecked(false)} />
    )
  }
}

