import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import MenuDrawer from 'react-native-side-drawer'
import Icon from 'react-native-vector-icons/FontAwesome';

class Burger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  toggleOpen = () => {
    this.setState({ open: !this.state.open });
  };

  drawerContent = () => {

    return (
      <TouchableOpacity onPress={this.toggleOpen} style={styles.animatedBox}>

        <View onPress={() => props.navigation.navigate('HomeHost')}><Icon name="home" size={25} color="#fff" /><Text style={{color: '#fff', fontSize: 20}} >  ACCUEIL</Text></View>
        <View><Icon name="history" size={25} color="#fff" /><Text style={{color: '#fff', fontSize: 20}} >  HISTORIQUE</Text></View>
        <View><Icon name="cog" size={25} color="#fff" /><Text style={{color: '#fff', fontSize: 20}}  >  PARAMETRES</Text></View>
        <View><Icon name="power-off" size={25} color="#fff" /><Text style={{color: '#fff', fontSize: 20}} >  DECONNEXION</Text></View>
      </TouchableOpacity>
    );
  };


  render() {
    return (
      <View style={styles.container}>
        <MenuDrawer 
          open={this.state.open} 
          drawerContent={this.drawerContent()}
          drawerPercentage={80}
          animationTime={120}
          overlay={true}
          opacity={0.5}
          position={'right'}
        >
          <TouchableOpacity onPress={this.toggleOpen} style={styles.body}>

            <Icon name="bars" size={45} color="#fff"/>
          </TouchableOpacity>
        </MenuDrawer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    marginTop: 30,
    zIndex: 0
  },
  animatedBox: {
    flex: 1,
    backgroundColor: "#131313",
    padding: 10
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F04812'
  }
})

export default Burger