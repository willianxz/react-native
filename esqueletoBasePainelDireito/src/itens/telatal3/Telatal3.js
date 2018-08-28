import React, { Component } from 'react';
import {Actions} from "react-native-router-flux";
import {
  Platform,
  StyleSheet,
  Button,
  Text,
  View
} from 'react-native';
import PainelDireito from "../../components/mainComponents/PainelDireito";


export default class Telatal3 extends Component{
	
  constructor(props) {
	super(props);
  };
	
  render() {
    return (
      <View style={styles.container}>
        <View style={{width: 800}}>
            <Text style={styles.welcome}>
                Welcome to Contact Page
            </Text>

              <Text style={styles.subtext}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis rutrum nisl, quis vestibulum enim.
                  Suspendisse aliquet diam id leo varius, sed bibendum dolor rutrum. Interdum et malesuada fames ac ante
                  ipsum primis in faucibus. Mauris finibus eget velit et condimentum. Aliquam fringilla lorem eget ante
                  facilisis, quis fermentum nibh sollicitudin. Phasellus et pharetra lacus. Donec et mattis dolor,
                  vitae cursus erat. Donec in aliquam tortor, quis euismod libero. Nam augue leo, dictum et rhoncus in,
                  pulvinar id dolor. Etiam condimentum tincidunt sodales. Morbi molestie nisl vitae mauris efficitur
              </Text>

              <Text style={styles.subtext}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis rutrum nisl, quis vestibulum enim.
                  Suspendisse aliquet diam id leo varius, sed bibendum dolor rutrum. Interdum et malesuada fames ac ante
                  ipsum primis in faucibus. Mauris finibus eget velit et condimentum. Aliquam fringilla lorem eget ante
                  facilisis, quis fermentum nibh sollicitudin. Phasellus et pharetra lacus. Donec et mattis dolor,
                  vitae cursus erat. Donec in aliquam tortor, quis euismod libero. Nam augue leo, dictum et rhoncus in,
                  pulvinar id dolor. Etiam condimentum tincidunt sodales. Morbi molestie nisl vitae mauris efficitur
              </Text>
        </View>

          <View style={{left: 585, top: -300}}>
              <PainelDireito
                  actualScene={"contact"}
              />
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
   subtext: {
        fontSize: 15,
        textAlign: 'center'
    },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
