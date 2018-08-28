/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';

import {
  Scene,
  Router,
  Stack, 
} from 'react-native-router-flux';

import Home from './screen/Home';
import About from './screen/About';
import Contact from './screen/Contact';


export default class App extends Component<Props> {
  componentWillUnmount(){

  }
  render() {
    return (      
         <Router>
          <Scene key="root">
            <Scene key="home" component={Home} title="Home" initial/>
            <Scene key="about" component={About} title="About" />
            <Scene key="contact" component={Contact} title="Contact"/>
          </Scene>
        </Router>
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
