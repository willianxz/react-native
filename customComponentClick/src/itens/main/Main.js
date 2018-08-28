import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import HornComponent from "../../components/MainComponents/HornComponent";
import AlertComponent from "../../components/MainComponents/AlertComponent";

export default class Main extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 30}}>Welcome to Click Page!</Text>
        <View style={{flex: 0, flexDirection: 'row'}}>
          <View style={{width: 500, height: 400, borderColor: '#795548', borderWidth: 5, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.welcome}>Press and hold</Text>
             <HornComponent/>
          </View>

          <View style={{width: 500, height: 400, borderColor: '#795548', borderWidth: 5, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.welcome}>Click Me</Text>
             <AlertComponent/>
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
