import React, {useState, useRef} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Ionicons from '@expo/vector-icons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Badge, Button, Header, Icon, Input} from 'react-native-elements'
import { text } from '@fortawesome/fontawesome-svg-core';
import { AsyncStorage } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'



 
function SignUp(props) {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [signUp, setSignUp] = useState(false);
    const [confirmationPassword, setConfirmationPassword] = useState('')

    

    var handleSignUp = async() => {
        
        console.log('hey')

        var rawResponse = await fetch('http://172.17.1.100:3000/sign-up', {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: `username=${username}&email=${email}&password=${password}`
        })
        var response = await rawResponse.json();
        console.log(response);


    // _______________________________________LOCAL STORAGE NOT FINISHED (pour les parametres)_________________________________
        AsyncStorage.setItem("user", JSON.stringify(response))
    // ________________________________________________________________________________________________________________________


        if (response.result === false){
            setSignUp(true)
        } else {
            props.navigation.navigate('HomeHost')
        }
        
    };
    var passwordError;
    if (password != confirmationPassword) {
        passwordError = <Badge status="error" badgeStyle={{color: 'white', backgroundColor:'#FF0060'}} value="Le mot de passe n'est pas identique"></Badge>
    }

    var emailMessage;


    if(signUp === true){

        emailMessage = <Badge status="error" badgeStyle={{color: 'white', backgroundColor:'#FF0060'}} value="Cet email a déja été utilisé"></Badge>
    }


    var headerLeft = <FontAwesomeIcon icon={faArrowLeft} size={35} style={{color: "white"}} onPress={() => props.navigation.navigate('DJhoteFirstScreen')} />;
    var headerCenter = <Text style={{color: '#fff', fontSize: 40, fontFamily:'Staatliches', textAlign: 'center', alignItems: 'baseline'}}>Inscription</Text>;
   
    

    
        
    return (
    <View style={styles.container}>
                <Header
                    containerStyle={{backgroundColor: '#131313', borderBottomWidth: 0}}
                    leftComponent={headerLeft}
                    centerComponent={headerCenter}
                    
                />
              
            <KeyboardAwareScrollView style={styles.main}> 
                    <Input
                        label='Pseudo'
                                placeholder='Gégé'
                                type='text'
                                containerStyle={{
                                        color:'#fff', 
                                        width: '100%', 
                                        marginTop:'3%'
                                    }}
                                inputStyle={{
                                        fontFamily:'Roboto-Bold',
                                        fontSize: 18,
                                        color: '#fff',

                                        borderBottomColor:'#000981'
                                }}
                                labelStyle={{
                                    fontFamily:'Roboto-Bold',
                                    fontSize: 20,
                                    color: '#584DAD',
                            
                                }}
                                onChangeText={text => setUsername(text)}
                        value={username}
                    />
                   
                    
                    <Input
                        label='Email'
                        placeholder='gerard@mail.com'
                        type='text'
                        containerStyle={{
                            color:'#fff', 
                            width: '100%', 
                            marginTop:'3%',
                         
                        }}
                        inputStyle={{
                            fontFamily:'Roboto-Bold',
                            fontSize: 18,
                            color: '#fff',
                           
                        }}
                        labelStyle={{
                            fontFamily:'Roboto-Bold',
                            fontSize: 20,
                            color: '#584DAD',
              
                        }}
                        onChangeText={text => setEmail(text)}
                        value={email}
                    />
                   {passwordError}
                    <Input
                        label='Mot de Passe:'
                        placeholder='•••••••••'
                        secureTextEntry={true}
                        type='password'
                        containerStyle={{
                            color:'#fff', 
                            width: '100%', 
                            marginTop:'3%',
                           
                        }}
                        inputStyle={{
                            fontFamily:'Roboto-Bold',
                            fontSize: 18,
                            color: '#fff',
                            borderBottomColor:'#000981'
                        }}
                        labelStyle={{
                            fontFamily:'Roboto-Bold',
                            fontSize: 20,
                            color: '#584DAD',
                
                        }}
                        onChangeText={text => setPassword(text)}
                        value={password}
                    />
                  
                
                    <Input
                        label='Confirmation Mot de Passe:'
                            placeholder='•••••••••'
                            type='passeword'
                            secureTextEntry={true}
                            containerStyle={{color:'#fff', 
                            width: '100%', 
                            marginTop:'3%',
                            marginBottom: '7%'
                        }}
                        inputStyle={{
                            fontFamily:'Roboto-Bold',
                            fontSize: 18,
                            color: '#fff',
                        
                            
                        }}
                        labelStyle={{
                            fontFamily:'Roboto-Bold',
                            fontSize: 20,
                            color: '#584DAD',
                        }}

                        onChangeText={text => setConfirmationPassword(text)}
                        value={confirmationPassword}
                    />
                    
                    
                    <Button 
                        title="Continuer" 
                        onPress={()=>handleSignUp()}
                        buttonStyle={{
                            backgroundColor: '#584DAD',
                            borderRadius: 10,
                       
                        }}
                    /> 
            </KeyboardAwareScrollView>  
       
       
    </View>
  );
}


var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#131313',
       
    },
    main: {
        backgroundColor: '#131313',
        alignContent:'center',
        textAlign: 'center',
        height: '100%',
        width: '100%',
        marginTop:'10%'
        
        
      },
})


export default SignUp;