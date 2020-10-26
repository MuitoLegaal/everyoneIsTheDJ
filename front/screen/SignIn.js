import React, {useState} from 'react';
import { ImageBackground, StyleSheet, View, Text, TextInput, Button } from 'react-native';
import Ionicons from '@expo/vector-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

 





function SignIn() {

    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    
    
    return (
    <View style={styles.backGroundColor}>
        <View style={styles.inscription}>
            <View style={{justifyContent: 'center', alignItems: 'flex-start'}}>
                <FontAwesomeIcon style={{color: 'white'}} icon={faArrowLeft} size={30}/>
            </View>
            <View style={{justifyContent: 'center'}}>
                <Text style={{color: 'white', fontSize: 30}}>CONNEXION</Text>
            </View>
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
            <Text style={{color: 'white', alignSelf: 'flex-start'}}>Email:</Text>
            <TextInput style={{backgroundColor: 'white', width: '90%', borderRadius: 10, marginBottom: "10%", height: '6.5%'}}
                onChange={(e)=>setEmai(e.target.value)}
                value={nom}
                />
            <Text style={{color: 'white', alignSelf: 'flex-start'}}>Mot de Passe:</Text>
            <TextInput style={{backgroundColor: 'white', width: '90%', borderRadius: 10, marginBottom: "10%", height: '6.5%'}}
                onChange={(e)=>setPassword(e.target.value)}
                value={password}
                />
            <Text style={{fontStyle: 'italic', textDecorationLine: 'underline'}}  >Mot de passe oublié?</Text>
            <View style={{width: '90%',height: '6.5%', color: '#584dad'}}>
                <Button title="Continuer" style={styles.button}/>
            </View>
        </View>
    </View>
  );
}


var styles = StyleSheet.create({
    all: {
        fontFamily: ''
    },
    backGroundColor: {
        backgroundColor: '#131313',
        flex: 1
    },
    inscription: {
        flex: 0.1,
        alignSelf: 'center',
        marginTop: '10%',
        flexDirection: 'row',
        marginBottom: '30%'
    },
    button: {
        borderRadius: 10
    }
})


export default SignIn;