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

//import Burger from '../burger'

function HomeHost(props){
var headerCenter = <Image source={require('../../assets/logoMini.png')} style={{width: 80, height: 82}} />
var headerRight = <FontAwesomeIcon icon={faBars} size={35} style={{color: "white"}} />



return (
  <View style={styles.container}>
    <View style={styles.header}>
            <Header
              centerComponent={headerCenter}
              rightComponent={headerRight}
              containerStyle={{backgroundColor: "#131313", height: '20%', alignItems: 'flex-start', borderBottomWidth:0,  justifyContent: 'flex-start'}}
            />
    </View>

        <ScrollView style={styles.wrap}>
          
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', height: 200, borderTopWidth:1, borderTopColor: "#fff"}} >
            
            <Text style={{color: 'white'}} >Aucun évènement en cours maintenant!</Text>
          
          </View>
          <View>

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
          </View>
        <Button 
              title=" Nouvelle soirée" 
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
    header: {
      //marginBottom: '5%',
      //marginTop: '10%',
     
      // justifyContent: 'center',
      // borderBottomWidth: 0,
      // borderBottomColor: '#ffff',
      // backgroundColor: '#131313',

      
  },
  
});

/* onPress={() => props.navigation.navigate('WinnerHost')}
onPress={() => props.navigation.navigate('Moderation')}
onPress={() => props.navigation.navigate('EventCreation')} */

  export default HomeHost;