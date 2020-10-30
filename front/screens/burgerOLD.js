
import React from 'react';
 
import { View, Text } from 'react-native';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';

import Icon from 'react-native-vector-icons/FontAwesome';
 
// class Burger extends React.PureComponent {
  export default function Burger(props) {

    // console.log(props.navigation)

    _menu = null;
   
    setMenuRef = ref => {
      this._menu = ref;
    };
   
    hideMenu = () => {
      this._menu.hide();
    };
   
    showMenu = () => {
      this._menu.show();
    };
   


      return (
  
          <Menu style={{backgroundColor: '#070707', borderWidth: 0, borderColor: "#808080"}}
            ref={this.setMenuRef}
  
            button={<Icon name="bars" size={45} color="#fff" onPress={this.showMenu}/>}
          >
            {/* Ligne faite et validée par Antoine ci-dessous 
            <MenuItem onPress={this.hideMenu}><Icon name="home" size={25} color="#fff" onPress={props.navigation.navigate('HomeHost')} /><Text style={{color: '#fff', fontSize: 20, marginTop: 30}} >  ACCUEIL</Text></MenuItem> */}
           
           {/* Reste du menu imitant le code d'Antoine 
            <MenuItem onPress={this.hideMenu}><Icon name="history" size={25} color="#fff" onPress={props.navigation.navigate('Historic')} /><Text style={{color: '#fff', fontSize: 20, marginTop: 30}} >  HISTORIQUE</Text></MenuItem>
            <MenuItem onPress={this.hideMenu}><Icon name="cog" size={25} color="#fff" onPress={props.navigation.navigate('Parameters')} /><Text style={{color: '#fff', fontSize: 20, marginTop: 30}} >  PARAMETRES</Text></MenuItem>
            <MenuItem onPress={this.hideMenu}><Icon name="power-off" size={25} color="#fff" onPress={props.navigation.navigate('Onboarding')} /><Text style={{color: '#fff', fontSize: 20, marginTop: 30}} >  DECONNEXION</Text></MenuItem> */}

             {/* Menu tel qu'il était avant intervention d'Antoine 
            <MenuItem onPress={this.hideMenu, () => props.navigation.navigate('HomeHost')}><Icon name="home" size={25} color="#fff" /><Text style={{color: '#fff', fontSize: 20}} >  ACCUEIL</Text></MenuItem>
            <MenuItem onPress={this.hideMenu, () => props.navigation.navigate('Historic')}><Icon name="history" size={25} color="#fff" /><Text style={{color: '#fff', fontSize: 20}} >  HISTORIQUE</Text></MenuItem>
            <MenuItem onPress={this.hideMenu, () => props.navigation.navigate('Parameters')}><Icon name="cog" size={25} color="#fff" /><Text style={{color: '#fff', fontSize: 20}}  >  PARAMETRES</Text></MenuItem>
            <MenuItem onPress={this.hideMenu, () => props.navigation.navigate('Onboarding')}><Icon name="power-off" size={25} color="#fff" /><Text style={{color: '#fff', fontSize: 20}} >  DECONNEXION</Text></MenuItem> */}
          
            {/* ESSAIS CI-DESSOUS : */}
             <MenuItem onPress={this.hideMenu}><Icon onPress={props.navigation.navigate('HomeHost')} name="home" size={25} color="#fff"  /><Text  style={{color: '#fff', fontSize: 20, marginTop: 30}} >  ACCUEIL</Text></MenuItem>
             <MenuItem onPress={this.hideMenu}><Icon onPress={props.navigation.navigate('Historic')} name="history" size={25} color="#fff" /><Text style={{color: '#fff', fontSize: 20, marginTop: 30}} >  HISTORIQUE</Text></MenuItem>



             {/* <MenuItem onPress={this.hideMenu, () => props.navigation.navigate('Historic')}><Icon name="history" size={25} color="#fff" /><Text style={{color: '#fff', fontSize: 20}} >  HISTORIQUE</Text></MenuItem> */}


          
          </Menu>
  
      );
    }
  

 
// mettre    <Burger navigation={props.navigation} />     sur les pages concernées par le burger 
