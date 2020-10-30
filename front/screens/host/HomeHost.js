import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-native-elements';
import Divider from 'react-native-divider';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';



function HomeHost(props){
var headerCenter = <Image source={require('../../assets/logoMini.png')} style={{width: 80, height: 82}} />
var headerRight = <FontAwesomeIcon icon={faBars} size={35} style={{color: "white"}} />



return (
  <View style={styles.container}>
    <View>
            <Header
              centerComponent={headerCenter}
              rightComponent={headerRight}
              containerStyle={{backgroundColor: "#131313", height: '20%', alignItems: 'flex-start', borderBottomWidth:0,  justifyContent: 'flex-start'}}
            />
    </View>

        <ScrollView style={styles.wrap}>
          
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', height: 200, borderTopWidth:1, borderTopColor: "#fff", borderBottomColor: '#fff', borderBottomWidth:1}} >
            
            <Text style={styles.text} >Aucun évènement en cours maintenant!</Text>
          
          </View>
          <View>

            <Text style={styles.subtitle} >Mes Evenements</Text>
           

            <View style={styles.box} >

              <View>
                <Image source={require('../../assets/picto-fete2.png')} style={{height: 150, width: 170}} />
              </View>

              <View>
                <Text style={{color: 'white'}}>Anniv Claude</Text>
                <Text style={{color: 'white'}}>Date: 11/10/2020</Text>
              </View>

            </View>

            
            <View style={styles.box} >

              <View>
                <Image source={require('../../assets/picto-fete2.png')} style={{height: 150, width: 170}} />
              </View>

              <View>
                <Text style={{color: 'white'}}>Anniv Claude</Text>
                <Text style={{color: 'white'}}>Date: 11/10/2020</Text>
              </View>
            </View>
          </View>
        <Button 
              title=" Nouvelle soirée" 
              onPress={() => props.navigation.navigate('EventCreation')}
              //onPress={()=>handleSignUp()}
              buttonStyle={{
                    backgroundColor: '#584DAD',
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
      marginLeft:'2%'
      
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