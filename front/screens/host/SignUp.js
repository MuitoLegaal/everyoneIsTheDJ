import React, {useState, useRef} from 'react';
import { ImageBackground, StyleSheet, View, Text, TextInput, Dimensions, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Badge, Button, Header, Icon, Input} from 'react-native-elements'
import { text } from '@fortawesome/fontawesome-svg-core';


 
function SignUp(props) {

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
        } else {
            props.navigation.navigate('HomeHost')
        }
        
    };

    var emailMessage;


    if(signUp === true){

        emailMessage = <Text style={{color: 'white'}}>Cet email a déja été utilisé</Text>
    }


    
    

    
        
    return (
    <View style={styles.container}>
        <View style={styles.wrap}>
            <View style={styles.header} >
                <Header
                    statusBarProps={{ barStyle: 'light-content' }}
                    barStyle="light-content" // or directly
                    leftComponent={
                        <Icon 
                            name='arrow-left' 
                            type='font-awesome' 
                            color= '#fff'
                            size='40'
                        />}
                    centerComponent={{ 
                        text: 'inscription', 
                        style: { color: '#fff',
                        fontSize: 40,
                        fontFamily:'Staatliches',
                        textAlign: 'center',
                        //alignItems: 'baseline'
                        }}}
                    containerStyle={{
                        backgroundColor: '#3D6DCC',
                        justifyContent: 'space-around',
                        backgroundColor: '#131313',
                        borderBottomWidth: 0,
                        //alignItems: 'flex-start'
                        }}
                />
                {/* <Header
    placement="left"
    leftComponent={{ icon: 'menu', color: '#fff' }}
    centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
    rightComponent={{ icon: 'home', color: '#fff' }}
    /> */}
            </View>
        <View style={styles.main}>
            <ScrollView>
            <Input
                    label='Pseudo'
                    placeholder='Gégé'
                    type='text'
                    containerStyle={{color:'#fff', width: '100%', justifyContent:'center'}}
                    inputStyle={{
                            fontFamily:'Roboto-Bold',
                            fontSize: 18,
                            color: '#fff',
                            paddingLeft: '5%',
                            borderBottomColor:'#000981'
                    }}
                    labelStyle={{
                        fontFamily:'Roboto-Bold',
                        fontSize: 20,
                        color: '#584DAD',
                        paddingLeft: '5%',
                    }}
                    onChangeText={text => setUsername(text)}
                    value={username}
                />

                <Input
                    label='Email'
                    placeholder='gerard@mail.com'
                    type='text'
                    containerStyle={{color:'#fff', width: '90%'}}
                    inputStyle={{
                            fontFamily:'Roboto-Bold',
                            fontSize: 18,
                            color: '#fff',
                            paddingLeft: '5%',
                            borderBottomColor:'#000981'
                    }}
                    labelStyle={{
                        fontFamily:'Roboto-Bold',
                        fontSize: 20,
                        color: '#584DAD',
                        paddingLeft: '5%',
                    }}
                    onChangeText={text => setEmail(text)}
                    value={email}
                />
                <Input
                    label='Mot de Passe:'
                    placeholder='•••••••••'
                    secureTextEntry={true}
                    type='passeword'
                    containerStyle={{color:'#fff', width: '90%'}}
                    inputStyle={{
                            fontFamily:'Roboto-Bold',
                            fontSize: 18,
                            color: '#fff',
                            paddingLeft: '5%',
                            borderBottomColor:'#000981'
                    }}
                    labelStyle={{
                        fontFamily:'Roboto-Bold',
                        fontSize: 20,
                        color: '#584DAD',
                        paddingLeft: '5%',
                    }}
                    onChangeText={text => setPassword(text)}
                    value={password}
                />

                <Input
                    label='Confirmation Mot de Passe:'
                    placeholder='•••••••••'
                    type='passeword'
                    secureTextEntry={true}
                    containerStyle={{color:'#fff', width: '90%'}}
                    inputStyle={{
                            fontFamily:'Roboto-Bold',
                            fontSize: 18,
                            color: '#fff',
                            paddingLeft: '5%',
                        
                    }}
                    labelStyle={{
                        fontFamily:'Roboto-Bold',
                        fontSize: 20,
                        color: '#584DAD',
                        paddingLeft: '5%',
                    }}
                    onChangeText={text => setPassword(text)}
                    value={password}
                />
                
                <Button 
                    title="Continuer" 
                    onPress={()=>handleSignUp()}
                    buttonStyle={{
                        backgroundColor: '#584DAD',
                        paddingLeft: 90,
                        paddingRight: 90,
                        paddingTop:10,
                        paddingBottom:10,
                        borderRadius: 10,
                        marginTop:10
                    }}
                    />
            </ScrollView>  
            </View>
        </View>
    </View>
  );
}


var styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrap: {
        
        flexDirection: 'column',
        backgroundColor: '#131313',
        justifyContent: 'center',
        textAlign: 'center',
        height: hp('100%'), // 70% of height device screen
        width: wp('100%')
        
      },
    
    header: {
        backgroundColor: '#131313',
        marginTop:0,
        //alignItems: 'baseline'
        
    },
    main: {
        backgroundColor: '#131313',
        justifyContent: 'center',
        flexDirection: "column",
        //marginTop: 160,
        alignItems: 'center',
        textAlign: 'left',
       
      
    },



})


export default SignUp;