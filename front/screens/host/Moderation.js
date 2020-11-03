import React from 'react';
import { View, Text, } from 'react-native';
import { Button } from 'react-native-elements';

function Moderation(props){

  handleTourdevotecreation = async () => {

    var rawResponse = await fetch('http://192.168.0.40:3000/eventcreation', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                  body: `idUserFromFront=${props.hostId}`
            })


  }

    return (
      <View style={{ flex: 1, backgroundColor:'#2ecc71', justifyContent: 'center', alignItems: 'center'}}>  
        <Text>Moderation par l'hôte</Text>

        <Button title="Valider la liste" 
              onPress={() => props.navigation.navigate('TimerConfigFIRST')}
        ></Button>

      </View>
    );
  }


  function mapDispatchToProps(dispatch) {
    return {
    addTourdevoteId: function (tourdevoteId) {
    dispatch({ type: 'setting', tourdevoteId: tourdevoteId })
    }
    }
}


function mapStateToProps(state) {
    return { hostId: state.hostId }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EventCreation);

  export default Moderation;