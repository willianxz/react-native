/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  WebView,
  View
} from 'react-native';


export default class App extends Component<Props> {
 state = {
    url: "http://exemplosite.esy.es",
  };

 componentWillUnmount() {
     //console.log('Will Unmount');
  }

  render() {
    return (
      <WebView
        onLoadStart={(navState) => this.setState({url: navState.nativeEvent.url})}
        source={
          {
            uri: this.state.url,
            headers: {"custom-app-header": "react-native-ios-app"}
          }
        }
      />
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
