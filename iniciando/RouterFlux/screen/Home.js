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
  Actions,
} from 'react-native-router-flux';


export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text
          style={styles.welcome}
          onPress={() => {
            Actions.about();
          }}
          >
          About
        </Text>

        <Button
          onPress={()=> {
            Actions.contact();
          }}
          title="Contact"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
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
