import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-native-elements';
import Divider from 'react-native-divider';

// import Burger from '../burger.js'

function HomeHost(props){

var headerCenter = <Image source={require('../../assets/logoMini.png')} style={{height: 50, width: 50}} />
var headerRight = <FontAwesomeIcon icon={faBars} size={35} style={{color: "white"}} onPress={() => props.navigation.openDrawer()}/>;

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#131313'}}>  
        <Header
          centerComponent={headerCenter}
          rightComponent={headerRight}
          containerStyle={{backgroundColor: "#131313", padding: 10, flex: 0.2}}
        />

        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}} >
          <Text style={{color: 'white'}} >Aucun evenement en cours maintenat!</Text>
        </View>


        <ScrollView style={{flex: 1, borderTopColor: 'white', flexDirection: 'column'}}>

            <Text style={{color: 'white'}} >Mes Evenements</Text>
            

            <View style={{flex: 0.2, flexDirection: 'row', justifyContent: 'space-around', borderColor: 'white', borderWidth: 4, width: 300, padding: 20, borderRadius: 10, margin: 15, alignItems: 'center', borderColor: '#584DAD'}} >

              <View>
                <Image source={require('../../assets/picto-fete2.png')} style={{height: 50, width: 50}} />
              </View>

              <View>
                <Text style={{color: 'white'}}>Anniv Claude</Text>
                <Text style={{color: 'white'}}>Date: 11/10/2020</Text>
              </View>

            </View>

            
            <View style={{flex: 0.2,  flexDirection: 'row', justifyContent: 'space-around', borderColor: 'white', borderWidth: 4, width: 300, padding: 20, borderRadius: 10, margin: 15, alignItems: 'center', borderColor: '#584DAD'}} >

              <View>
                <Image source={require('../../assets/picto-fete2.png')} style={{height: 50, width: 50}} />
              </View>

              <View>
                <Text style={{color: 'white'}}>Anniv Claude</Text>
                <Text style={{color: 'white'}}>Date: 11/10/2020</Text>
              </View>

            </View>
       
        <Button 
              title=" Nouvelle soirée" 
              onPress={() => props.navigation.navigate('EventCreation')}
              //onPress={()=>handleSignUp()}
              buttonStyle={{
                    backgroundColor: '#584DAD',
                    marginTop: '3%',
                    borderRadius: 10,
                    }}
                    icon={<FontAwesomeIcon
                        icon={faPlus}
                        size={15}
                        color="white"
                      />
                        }
          /> 
        </ScrollView>

      
</View>



)
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#131313',
    
  },
  wrap: {
      flexDirection: 'column',
      //alignItems: 'center',
      //justifyContent: 'center',
      textAlign: 'center',
      height: hp('100%'), // 70% of height device screen
      width: wp('100%'),  // 80% of width device screen 
      backgroundColor: '#131313',

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
      textAlign: 'left',
      marginTop: '2%',
      paddingLeft:'2%'
      
    },
   text: {
      color: '#fff',
      fontSize: 20,
      fontFamily:'Roboto-Regular',
      paddingRight: 30 ,
      paddingLeft: 30,
      textAlign: 'center',
      
    },
    box: {
      flexDirection: 'row', 
      justifyContent: 'space-around', 
      borderWidth: 4, 
      padding: 10, 
      borderRadius: 10, 
      margin: '2%', 
      alignItems: 'center', 
      borderColor: '#584DAD'
    }
  
});

/* onPress={() => props.navigation.navigate('WinnerHost')}
onPress={() => props.navigation.navigate('Moderation')}
onPress={() => props.navigation.navigate('EventCreation')} */

  export default HomeHost;