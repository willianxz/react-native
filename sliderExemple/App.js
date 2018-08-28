/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  AppRegistry,
  StyleSheet,
  Text,
  SliderIOS,
  ScrollView ,
  View
} from 'react-native';
import Slider from "react-native-slider";




const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
	
	constructor(props){
		super(props);
		
		
		this.state = {
			 valor: 0
		}
	}
	
  render() {
    return (
      <View style={styles.container}>
	  
	   <View style={{width: 400}}>
			<Slider
			  value={this.state.value}
			  minimumValue = {0}
			  maximumValue = {10}
			  animateTransitions = {true}
			  onSlidingStart = {() => {
				  //alert('O slider foi pego');  
				  
				}		   
			  }
			  onSlidingComplete = {() => {
				  //alert('O slider foi solto');  
			   }		  
			  }
			  
			  minimumTrackTintColor = "#00BFFF"
			  maximumTrackTintColor = "#FF7F00"
			  onValueChange={value => this.setState({ value })}
			  
			/>
		</View>
		
		<Text>
          Value: { this.state.value  }
        </Text>
		
		 <Slider
            minimumValue={-10}
            maximumValue={42}
            minimumTrackTintColor='#1fb28a'
            maximumTrackTintColor='#d3d3d3'
            thumbTintColor='#1a9274'
          />
		  
		   <Slider
            trackStyle={customStyles3.track}
            thumbStyle={customStyles3.thumb}
            minimumTrackTintColor='#eecba8'
          />
		  
		  
		  <Slider
            trackStyle={customStyles4.track}
            thumbStyle={customStyles4.thumb}
            minimumTrackTintColor='#d14ba6'
          />
		  
		  <Slider
            trackStyle={customStyles5.track}
            thumbStyle={customStyles5.thumb}
            minimumTrackTintColor='#ec4c46'
          />
		  
		  <Slider
            trackStyle={customStyles6.track}
            thumbStyle={customStyles6.thumb}
            minimumTrackTintColor='#e6a954'
          />
		  
		  <Slider
            trackStyle={customStyles7.track}
            thumbStyle={customStyles7.thumb}
            minimumTrackTintColor='#2f2f2f'
          />
		  
		  
			  <Slider
				style={customStyles8.container}
				trackStyle={customStyles8.track}
				thumbStyle={customStyles8.thumb}
				minimumTrackTintColor='#31a4db'
				thumbTouchSize={{width: 100, height: 40}}
			  />
		  
		  
		  
        
      </View>
    );
  }
}




var styles = StyleSheet.create({
  container: {
    margin: 20,
    paddingBottom: 20,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  caption: {
    //flex: 1,
  },
  value: {
    flex: 1,
    textAlign: 'right',
    marginLeft: 10,
  }
});


var meuEstiloSlider = StyleSheet.create({
	track: {
    height: 4,
    borderRadius: 2,
  },
  thumb: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    backgroundColor: 'white',
    borderColor: '#30a935',
    borderWidth: 2,
  }
});

var iosStyles = StyleSheet.create({
  track: {
    height: 2,
    borderRadius: 1,
  },
  thumb: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 2,
    shadowOpacity: 0.35,
  }
});

var customStyles2 = StyleSheet.create({
  track: {
    height: 4,
    borderRadius: 2,
  },
  thumb: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    backgroundColor: 'white',
    borderColor: '#30a935',
    borderWidth: 2,
  }
});

var customStyles3 = StyleSheet.create({
  track: {
    height: 10,
    borderRadius: 5,
    backgroundColor: '#d0d0d0',
  },
  thumb: {
    width: 10,
    height: 30,
    borderRadius: 5,
    backgroundColor: '#eb6e1b',
  }
});

var customStyles4 = StyleSheet.create({
  track: {
    height: 10,
    borderRadius: 4,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 1,
    shadowOpacity: 0.15,
  },
  thumb: {
    width: 20,
    height: 20,
    backgroundColor: '#f8a1d6',
    borderColor: '#a4126e',
    borderWidth: 5,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 2,
    shadowOpacity: 0.35,
  }
});

var customStyles5 = StyleSheet.create({
  track: {
    height: 18,
    borderRadius: 1,
    backgroundColor: '#d5d8e8',
  },
  thumb: {
    width: 20,
    height: 30,
    borderRadius: 1,
    backgroundColor: '#838486',
  }
});

var customStyles6 = StyleSheet.create({
  track: {
    height: 14,
    borderRadius: 2,
    backgroundColor: 'white',
    borderColor: '#9a9a9a',
    borderWidth: 1,
  },
  thumb: {
    width: 20,
    height: 20,
    borderRadius: 2,
    backgroundColor: '#eaeaea',
    borderColor: '#9a9a9a',
    borderWidth: 1,
  }
});

var customStyles7 = StyleSheet.create({
  track: {
    height: 1,
    backgroundColor: '#303030',
  },
  thumb: {
    width: 30,
    height: 30,
    backgroundColor: 'rgba(150, 150, 150, 0.3)',
    borderColor: 'rgba(150, 150, 150, 0.6)',
    borderWidth: 14,
    borderRadius: 15,
  }
});

var customStyles8 = StyleSheet.create({
  container: {
    height: 30,
  },
  track: {
    height: 2,
    backgroundColor: '#303030',
  },
  thumb: {
    width: 40,
    height: 40,
    backgroundColor: '#31a4db',
    borderRadius: 10 / 2,
    shadowColor: '#31a4db',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 2,
    shadowOpacity: 1,
  }
});

var customStyles9 = StyleSheet.create({
  thumb: {
    width: 30,
    height: 30,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5,
    shadowRadius: 1,
  }
});
