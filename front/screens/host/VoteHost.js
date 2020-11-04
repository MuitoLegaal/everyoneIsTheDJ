import React, { useEffect } from 'react';
import { View, Text, AsyncStorage, ScrollView, Image, Button } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faKey } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Header } from 'react-native-elements'


function VoteHost(props){

    
  console.log(props);

  var headerLeft = <FontAwesomeIcon icon={faArrowLeft} size={35} style={{color: "white"}} onPress={() => props.navigation.navigate('TimerConfigFIRST')} />;
  var headerCenter = <Text style={{color: 'white'}} >Vote de l'hôte</Text>;
  var headerRight = <FontAwesomeIcon icon={faBars} size={35} style={{color: "white"}} onPress={() => props.navigation.openDrawer()}/>;

    return (


  <View>
        
  <Header
    containerStyle={{backgroundColor: '#131313'}}
    leftComponent={headerLeft}
    centerComponent={headerCenter}
    rightComponent={headerRight}
  />
  <ScrollView style={styles.wrap}>


  <View style={{ flex: 1, justifyContent: 'flex-start', marginTop: 10 }}>
    <Text style={styles.text}>Bienvenu dans la soirée de </Text>

  </View>

  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text style={styles.subtext}> %Anniv' de Bob% </Text>
    <Image source={require('../../assets/picto-fete2.png')} style={{ height: 150, width: 170, marginTop: '5%' }} />
  </View>


  <View style={{ flex: 1, borderColor: 'white', borderWidth: 2, margin: 50, padding: 30, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }} >

    {TIMER <= 0 && (<Text style={{ color: '#FF0060', marginBottom: 10 }}>Pas de vote en cours</Text>)}
    {TIMER > 0 && (<Text style={{ color: '#FF0060', marginBottom: 10 }}>Vote en cours, il te reste :</Text>)}

    {TIMER > 0 && (<CountDown
      size={30}
      until={TIMER}
      onFinish={() => navigation.navigate('Winnerguest')}
      digitStyle={{ backgroundColor: '#FFF', borderWidth: 2, borderColor: '#FF0060' }}
      digitTxtStyle={{ color: '#FF0060' }}
      timeLabelStyle={{ color: 'red', fontWeight: 'bold' }}
      separatorStyle={{ color: '#FF0060' }}
      timeToShow={['M', 'S']}
      timeLabels={{ m: null, s: null }}
      showSeparator
    />)}

  </View>


  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch' }} >

    {TIMER > 0 && (
    
    <View>

      <Text style={{ color: 'white', fontSize: 20, marginTop: '10%', marginBottom: '10%', marginLeft: '5%' }} >Votez pour le prochain titre:</Text>

      <RadioGroup getChecked={this.getChecked} RadioGroupStyle={{ flex: 1, flexDirection: 'column', marginBottom: '10%', marginLeft: '5%' }} IconStyle={{ backgroundColor: '#FF0060' }} coreStyle={{ backgroundColor: '#FF0060' }} labelStyle={{ color: 'white', fontSize: 18 }} >
        {voteList}
      </RadioGroup>

      <Button
        title='  Valider mon vote'
        buttonStyle={{
          backgroundColor: '#FF0060',
          borderRadius: 10,
          color: 'white',
          marginTop: '5%',
          marginBottom: '5%',
          fontSize: 18
        }}
        titleStyle={{
          fontSize: 20,
          fontFamily: 'Roboto-Bold'
        }}

        icon={
          <FontAwesomeIcon icon={faCheck} size={15} style={{ color: "white" }} />
        }

      />
    </View>
    
    )}

    {TIMER <= 0 && (<Button
      title='REFRESH'
      buttonStyle={{
        backgroundColor: '#E59622',
        borderRadius: 10,
        marginTop: '5%',
        marginBottom: '5%',

      }}
      titleStyle={{
        fontFamily: 'Staatliches',
        fontSize: 25
      }}


      icon={
        <FontAwesomeIcon icon={faRedo} size={25} style={{ color: "white" }} />
      }

      onPress={() => handleRefreshTIMER()}


    />)}

  </View>
</ScrollView>
</View>

);
}

  export default VoteHost;