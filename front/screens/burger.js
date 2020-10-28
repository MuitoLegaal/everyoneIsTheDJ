
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
  
          <Menu style={{backgroundColor: '#131313', borderWidth: 2, borderColor: "#808080"}}
            ref={this.setMenuRef}
  
            button={<Icon name="bars" size={50} color="#fff" onPress={this.showMenu}/>}
          >
            <MenuItem onPress={this.hideMenu, () => props.navigation.navigate('HomeHost')}><Icon name="home" size={25} color="#fff" /><Text style={{color: '#fff', fontSize: 20, marginTop: 30}} >  ACCUEIL</Text></MenuItem>
            <MenuItem onPress={this.hideMenu, () => props.navigation.navigate('Historic')}><Icon name="history" size={25} color="#fff" /><Text style={{color: '#fff', fontSize: 20}} >  HISTORIQUE</Text></MenuItem>
            <MenuItem onPress={this.hideMenu, () => props.navigation.navigate('Parameters')}><Icon name="cog" size={25} color="#fff" /><Text style={{color: '#fff', fontSize: 20}}  >  PARAMETRES</Text></MenuItem>
            <MenuItem onPress={this.hideMenu, () => props.navigation.navigate('Onboarding')}><Icon name="power-off" size={25} color="#fff" /><Text style={{color: '#fff', fontSize: 20}} >  DECONNEXION</Text></MenuItem>
          </Menu>
  
      );
    }
  

 
// mettre    <Burger navigation={props.navigation} />     sur les pages concernées par le burger 
