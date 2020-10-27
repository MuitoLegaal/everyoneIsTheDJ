import React, {useState} from 'react';
import { ImageBackground, StyleSheet, View, Text, TextInput, Dimensions } from 'react-native';
import Ionicons from '@expo/vector-icons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Badge, Button, Header, Icon } from 'react-native-elements'
import { text } from '@fortawesome/fontawesome-svg-core';


 
function SignUp() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [signUp, setSignUp] = useState(false);
    

    var handleSignUp = async() => {
        
        console.log('hey')

        var rawResponse = await fetch('http://172.17.1.100:3000/sign-up', {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: `username=${username}&email=${email}&password=${password}`
        })
        var response = await rawResponse.json();
        console.log(response);
        if (response.result === false){
            setSignUp(true)
        }
        
    };

    var emailMessage;


    if(signUp === true){

        emailMessage = <Text style={{color: 'white'}}>Cet email a déja été utilisé</Text>
    }

    
        
    return (
    <View style={styles.wrap}>
            <Header
                containerStyle={{
                    backgroundColor: '#131313',
                    borderBottomWidth: 0
                }}
                placement="center"
                leftComponent={
                     <Icon 
                     name='arrow-left' 
                     type='font-awesome' 
                     color= '#fff'
                     size='30'
                    />
                    }
                centerComponent={{ text: 'INSCRIPTION', style: { 
                    color: '#fff',
                    fontSize: 40,
                    fontFamily:'Staatliches',
                    textAlign: 'center',
                    
                } }}
               
            />
        {/* <View style={styles.header}>
            <View style={{justifyContent: 'center', alignItems: 'flex-start'}}>
                <FontAwesomeIcon style={{color: 'white'}} icon={faArrowLeft} size={30}/>
            </View>
            <View style={{justifyContent: 'center'}}>
                <Text style={{color: 'white', fontSize: 30}}>INSCRIPTION</Text>
            </View>
        </View> */}
       
        <View style={styles.main}>
            <Text style={styles.label}>Username:</Text>
            <TextInput 
                style={styles.input}
                onChangeText={text => setUsername(text)}
                value={username}
                />
            <Text style={styles.label}>Email:</Text>{emailMessage}
            <TextInput 
                style={styles.input}
                onChangeText={text => setEmail(text)}
                value={email}
                />
            <Text style={styles.label}>Mot de Passe:</Text>
            <TextInput 
                style={styles.input}
                onChangeText={text => setPassword(text)}
                value={password}
                />
            <Text style={styles.label}>Confirmation Mot de Passe:</Text>
            <TextInput style={styles.input}/>
            
            
            <Button 
                title="Continuer" 
                onPress={()=>handleSignUp()}
                buttonStyle={{
                    backgroundColor: '#584DAD',
                    paddingLeft: 90,
                    paddingRight: 90,
                    paddingTop:10,
                    paddingBottom:10,
                    borderRadius: 10
                }}
                />
           
        </View>
    </View>
  );
}


var styles = StyleSheet.create({
    
    wrap: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#131313',
        justifyContent: 'center',
        textAlign: 'center',
        height: hp('100%'), // 70% of height device screen
        width: wp('100%')   // 80% of width device screen 
      },
    
    header: {
        backgroundColor: '#131313',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: "row",
       
    },
    main: {
        backgroundColor: '#131313',
        justifyContent: 'center',
        flexDirection: "column",
        marginTop: 60,
        alignItems: 'center',
        textAlign: 'left',
      
    },
    input: {
        backgroundColor: 'white', 
        width: '90%', 
        borderRadius: 10, 
        marginBottom: "10%", 
        height: '8%',
        textAlign: 'left',
        paddingLeft: '5%',
        fontFamily:'Roboto-Regular',
        fontSize: 16,
        color: '#000981'
        
    },
    label: {
        color: 'white', 
        marginBottom: '2%'
       
        
    }



})


export default SignUp;