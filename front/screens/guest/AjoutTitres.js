import React, { Component, useEffect, useState } from 'react'
import { Image, View, Text, StyleSheet } from 'react-native'
import { Header, Input } from 'react-native-elements'
import { Button } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'



function AjoutTitres () {


    const [titrePropose, setTitrePropose] = useState()
    const [titreList, setTitreList] = useState([]);
    
    var headerCenter = <Image source={require('../../assets/logoMini.png')} style={{height: 60, width: 60}} />


var handleValider = () => {
    console.log(titreList)    
}

var handleAjouter = async() => {
    console.log(titrePropose)

    setTitreList([...titreList, titrePropose])

    var rawResponse = await fetch('http://192.168.1.20:3000/proposition-des-titres', {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: `titreFromFront=${titrePropose}`
        })

    var response = await rawResponse.json();
   

}

var list = titreList.map((titre, i)=>{
    return(
        <View key={i} style={{borderColor: '#584DAD', borderWidth: 2, width: 200, height: 50, justifyContent:'center', alignItems: 'center', margin: 5, borderRadius: 10}}>
            <Text style={{color: 'white'}}>{titre}</Text>
        </View>
    )
})

    
    return(
        <View style={{flex: 1, backgroundColor: '#131313'}}>
             <Header
                centerComponent={headerCenter}
                containerStyle={{backgroundColor: "#131313", padding: 10}}
            />

            <View style={{flex: 0.1, justifyContent: 'flex-start', alignItems: 'center', margin: 40}}>
                <Text style={{color: 'white', fontSize: 30}}>Pret? A toi de voter!</Text>
            </View>

            <ScrollView>

                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    {list}
                </View>

                <View style={{flex: 1, alignItems: 'center', flexDirection: 'row', justifyContent: 'center'}}>
                        <Input
                            label='Artiste - Titre :'
                            placeholder='Lady Gaga - Poker Face'
                            type='text'
                            containerStyle={{
                                color:'#fff', 
                                width: 290, 
                                marginTop:'3%',
                            
                            }}
                            inputStyle={{
                                fontFamily:'Roboto-Bold',
                                fontSize: 15,
                                color: '#fff',
                            
                            }}
                            labelStyle={{
                                fontFamily:'Roboto-Bold',
                                fontSize: 18,
                                color: '#584DAD',

                            }}
                            onChangeText={text => setTitrePropose(text)}
                            value={titrePropose}
                            
                        
                        />
                        <Button 
                        title= ' + '
                        buttonStyle={{
                            backgroundColor: '#584DAD',
                            borderRadius: 10,
                            width: 40,
                            color: 'white'
                        
                        }}
                        onPress={()=> handleAjouter()}
                        
                        />
                    </View>

            </ScrollView>


            <View style={{margin: 30}}>

                <View style={{alignItems: 'center', margin: 15}}>
                    <Button 
                        title="Valider les Titres" 
                        buttonStyle={{
                            backgroundColor: '#FF0060',
                            borderRadius: 10,
                            width: 300
                        
                        }}
                        onPress={()=>handleValider()}
                    />
                </View>


                <View style={{alignItems: 'center'}}>
                    <Text style={{color: 'white'}}>Passer</Text>
                </View>

            </View>


        </View>
    )
}



export default AjoutTitres;