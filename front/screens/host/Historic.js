import React, { useEffect } from 'react';
import { View, Text, AsyncStorage, ScrollView, Image, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Header } from 'react-native-elements'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';




function Historic(props){

  var userData;


  // _______________________________________LOCAL STORAGE NOT FINISHED_________________________________

  useEffect(() => {
    AsyncStorage.getItem("user", 
    function(err, data){
      userData = JSON.parse(data);
    })
  })
  // ___________________________________________________________________________________________________

  var headerLeft = <FontAwesomeIcon icon={faArrowLeft} size={35} style={{color: "white"}} onPress={() => props.navigation.navigate('HomeHost')} />;
  var headerCenter = <Text style={styles.title} >Historique</Text>;
  var headerRight = <FontAwesomeIcon icon={faBars} size={35} style={{color: "white"}} onPress={() => props.navigation.openDrawer()}/>;




    return ( 
      <View style={styles.container}>
        <View>
            <Header
              containerStyle={{
                backgroundColor: "#131313", 
              //height: '20%', 
              alignItems: 'flex-start', 
              borderBottomWidth:0,  
              marginBottom:'5%'
            
              }}
              leftComponent={headerLeft}
              centerComponent={headerCenter}
              rightComponent={headerRight}
            />
          </View>
          <ScrollView style={styles.wrap}>
          
            {/* <View style={styles.card} >

                <Image source={require('../../assets/picto-fete2.png')} style={{height: 150, width: 170}} />
              
                <View style={{flexDirection:'column'}}>
              
                <Text style={styles.text}>Rien pour l'instant</Text>
                <Text style={styles.text}>Le screen est à peine créé</Text>
                </View>

            </View> */}
            <View style={styles.box} >

              <View>
                <Image source={require('../../assets/picto-fete2.png')} style={{height: 150, width: 170}} />
              </View>

              <View>
                <Text style={styles.text}>Anniv Claude</Text>
                <Text style={styles.text}>Date: 11/10/2020</Text>
              </View>

            </View>
            <View style={styles.box} >

              <View>
                <Image source={require('../../assets/picto-fete2.png')} style={{height: 150, width: 170}} />
              </View>

              <View>
                <Text style={styles.text}>Anniv Claude</Text>
                <Text style={styles.text}>Date: 11/10/2020</Text>
              </View>

            </View>

          </ScrollView>

        </View>
      
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#131313',
      
    },

    wrap: {
      flexDirection: 'column',
      textAlign: 'center',
      height: hp('100%'), // 70% of height device screen
      width: wp('100%'),  // 80% of width device screen 
      backgroundColor: '#131313',
      borderTopWidth:1,
      borderTopColor:"#fff",
     
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
        marginTop: '2%'
        
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
        padding: '8%',
        borderRadius: 10, 
        margin: '2%', 
        marginTop:'5%',
        alignItems: 'center', 
        borderColor: '#584DAD'
      }
    
  });
  export default Historic;