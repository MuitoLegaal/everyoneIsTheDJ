import React, { useEffect, useState } from 'react';
import { View, Text, AsyncStorage, ScrollView, Image, StyleSheet, Clipboard, TouchableOpacity} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faKey } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Header, Button, Badge } from 'react-native-elements'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


function ShareEvent(props){

  const [copiedText, setCopiedText] = useState('')

  // utilisation de clipboard pour copier un bloc de text  mais comment ? actuellement les id et mdp sont individuellement copiable

    
    
  //console.log(props);

  // var headerLeft = <FontAwesomeIcon icon={faArrowLeft} size={35} style={{color: "white"}} onPress={() => props.navigation.navigate('TimerConfigFIRST')} />;
  var headerCenter = <Text style={styles.title} >Partage de l'évènement</Text>;
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
                // leftComponent={headerLeft}
                centerComponent={headerCenter}
                rightComponent={headerRight}
              />
        </View>

        <ScrollView style={styles.wrap}>
                
            <View style={{alignItems:'center'}}>
     
              <View style={styles.box} 
                // onPress={() => fetchCopiedText()}
                // onChangeText={value => this.setState({textInputText: value})}
                >
                  <Text style={styles.subtitle}>Ce soir, avec Everyone is the DJ.</Text>
                  <Text style={styles.subtext}>Télècharge l’application pour voter :</Text> 
                  <Text style={styles.text}>https://apps.apple.com/app/apple-store/id982107779</Text>
                  <Text style={styles.subtext}>Nom de l'évènement : </Text>
                  <Text style={styles.text}>%anniv maurice </Text>
                  <Text style={styles.subtext}>Mot de passe de l'évènement : </Text>
                  <Text style={styles.text}> %momolefeu </Text>
                </View>
        
                
                <Button
                    title= 'Copier le lien'
                            buttonStyle={{
                                backgroundColor: '#584DAD',
                                borderRadius: 10,
                                color: 'white',
                                paddingHorizontal:'30%'
                            
                            }}
                            onPress={() => Clipboard.setString(`Ce soir, avec Everyone is the DJ.  \n Télècharge l’application pour voter : \n https://apps.apple.com/app/apple-store/id982107779 \n Nom de l'évènement : \n $.... \n Mot de passe de l'évènement : \n $....` )}
                >
                </Button>

            <View style={{marginTop:'10%', marginBottom:'10%'}}>
              <Text style={{fontFamily:'Roboto-Bold', fontSize:18, color:'#FF0060'}}>Vote en cours, temps restant :</Text>
              <Badge status="error" badgeStyle={{fontFamily:'Roboto-Bold', fontSize:18, backgroundColor:'#FF0060', color:'#fff', marginTop:'3%'}} value="00:04:10"></Badge>
            </View>
            </View>
          
            <Button
                    title= 'Prendre part au vote'
                            buttonStyle={{
                                backgroundColor: '#FF0060',
                                borderRadius: 10,
                                color: 'white',
                            
                            }}
                            onPress={() => props.navigation.navigate('VoteHost')}
                >
                </Button>
         
         
          {/* <View style={{flex: 0.2, justifyContent: 'space-around',  padding: 20, borderRadius: 10, margin: 15, alignItems: 'center'}} >


            <View>

            
            <Button title="Vote de l'hôte" 
                    onPress={() => props.navigation.navigate('VoteHost')}
              ></Button>

            </View>

          </View> */}



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
      //alignItems: 'center',
      //justifyContent: 'center',
      textAlign: 'center',
      height: hp('100%'), // 70% of height device screen
      width: wp('100%'),  // 80% of width device screen 
      backgroundColor: '#131313',
      borderTopWidth:1,
      borderTopColor:"#fff",

    },
    title: {
      color: '#fff',
      fontSize: 24,
      fontFamily:'Staatliches'
    },

    subtitle: {
      color: '#000981',
      fontSize: 30,
      fontFamily:'Staatliches',
      textAlign: 'center',
      marginTop: '2%',
      marginBottom: '5%',
      //marginLeft:'2%'
      
    },
    subtext: {
      color: '#000981',
      fontSize: 20,
      fontFamily:'Roboto-Bold',
      textAlign: 'left',
      marginTop: '10%',
      //marginLeft:'2%'
      
    },
   text: {
      color: '#000981',
      fontSize: 20,
      fontFamily:'Roboto-Regular',
      paddingRight: 30 ,
      paddingLeft: 30,
      textAlign: 'center',
      
    },
    box: {
      flexDirection: 'column', 
      justifyContent: 'space-around', 
      borderWidth: 4, 
      padding: '8%',
      borderRadius: 10, 
      margin: '2%', 
      backgroundColor: '#fcfcfc'
    }
  
});
  export default ShareEvent;