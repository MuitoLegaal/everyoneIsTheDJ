import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { Header } from 'react-native-elements'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-native-elements';
import Divider from 'react-native-divider';



function HomeHost(){

var headerCenter = <Image source={require('../../assets/logoMini.png')} style={{height: 50, width: 50}} />
var headerRight = <FontAwesomeIcon icon={faBars} size={35} style={{color: "white"}} />



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

        </ScrollView>

        <Button style={{ width: 300}}
          title="  Nouvelle Soirré"
          backgroundColor="#E59622"
          icon={
            <FontAwesomeIcon
              icon={faPlus}
              size={15}
              color="white"
            />
              }
          containerStyle={{width: 300, flex: 0.3}}
        />
      </View>



)
}


{/* onPress={() => props.navigation.navigate('WinnerHost')}
onPress={() => props.navigation.navigate('Moderation')}
onPress={() => props.navigation.navigate('EventCreation')} */}

  export default HomeHost;