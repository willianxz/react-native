import React, { Component } from 'react';
import {Actions} from "react-native-router-flux";
import {
  Platform,
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';


export default class Telatal2 extends Component{
	
  constructor(props) {
	super(props);
  };
	
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Tela 2
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Button
            title="Main"
            color="#841584"
            onPress={() => Actions.main_scene({
                type: 'reset'
            })}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
