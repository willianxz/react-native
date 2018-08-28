import React, { Component } from 'react';
import {Actions} from "react-native-router-flux";
import {images} from "../../general/Images";
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  Alert,
  Image,
  View
} from 'react-native';


export default class Main extends Component{
	
  constructor(props) {
	super(props);
  };
	
  render() {
    return (
      <View style={styles.container}>

        <Image source={images.reactNativeLogo}/>

        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>

        <View style={{flex: 0, flexDirection: 'row', width: 220}}>

          <View style={{height: 100, width: 100}}>
            <Button
            title="Tela 2"
            color="#00B0FF"
            onPress={() => Actions.tela_tal_2({
                type: 'reset'
            })}
            />
          </View>

          <View style={{height: 100, width: 100, left: 20}}>
            <Button
                title="Tela 3"
                color="#512DA8"
                onPress={() => Actions.tela_tal_3({
                    type: 'reset'
                })}
            />
          </View>
        </View>
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
