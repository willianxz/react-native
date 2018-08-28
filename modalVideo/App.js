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
    Modal,
    Image,
    TouchableHighlight,
    TouchableOpacity,
    View
} from 'react-native';

import Video from 'react-native-video';
import {videos} from './src/general/Videos';


export default class App extends Component {
    state = {
        modalVisible: false,
        rate: 1,
        volume: 1,
        muted: false,
        resizeMode: 'contain',
        duration: 0.0,
        currentTime: 0.0,
        paused: false,
    };

    video: Video;

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    onLoad = (data) => {
        this.setState({ duration: data.duration });
    };

    onProgress = (data) => {
        this.setState({ currentTime: data.currentTime });
    };

    onEnd = () => {
        this.setState({ paused: true })
        this.video.seek(0)
    };

    onAudioBecomingNoisy = () => {
        this.setState({ paused: true })
    };

    onAudioFocusChanged = (event: { hasAudioFocus: boolean }) => {
        this.setState({ paused: !event.hasAudioFocus })
    };

    getCurrentTimePercentage() {
        if (this.state.currentTime > 0) {
            return parseFloat(this.state.currentTime) / parseFloat(this.state.duration);
        }
        return 0;
    };

    renderRateControl(rate) {
        const isSelected = (this.state.rate === rate);

        return (
            <TouchableOpacity onPress={() => { this.setState({ rate }) }}>
                <Text style={[styles.controlOption, { fontWeight: isSelected ? 'bold' : 'normal' }]}>
                    {rate}x
                </Text>
            </TouchableOpacity>
        );
    }

    renderResizeModeControl(resizeMode) {
        const isSelected = (this.state.resizeMode === resizeMode);

        return (
            <TouchableOpacity onPress={() => { this.setState({ resizeMode }) }}>
                <Text style={[styles.controlOption, { fontWeight: isSelected ? 'bold' : 'normal' }]}>
                    {resizeMode}
                </Text>
            </TouchableOpacity>
        )
    }

    renderVolumeControl(volume) {
        const isSelected = (this.state.volume === volume);

        return (
            <TouchableOpacity onPress={() => { this.setState({ volume }) }}>
                <Text style={[styles.controlOption, { fontWeight: isSelected ? 'bold' : 'normal' }]}>
                    {volume * 100}%
                </Text>
            </TouchableOpacity>
        )
    }

    render() {
        const flexCompleted = this.getCurrentTimePercentage() * 100;
        const flexRemaining = (1 - this.getCurrentTimePercentage()) * 100;
        return (
            <View style={{marginTop: 22, alignItems: 'center',justifyContent: 'center'}}>
              <Modal
                  animationType="slide"
                  transparent={false}
                  visible={this.state.modalVisible}
                  onRequestClose={() => {
                      alert('Modal has been closed.');
                  }}>

                <View style={{alignItems: 'center',justifyContent: 'center'}}>
                  <View style={{width: 500}}>

                    <Text style={styles.welcome}>STAR GATE</Text>
                    <Text style={styles.subtext}>The power of Stargate is a greath energy from the crystals, in ancient Egipcy a legion of aliens take this power to go to Earth and Lorem
                      ipsum dolor sit amet, consectetur Asgardians is the guardians of the Earth adipiscing elit. This serie Vestibulum sagittis velit tellus, Jack Onel at
                      pretium purus tincidunt Daniel Jackson, Samantha Carter, sollicitudin. Interdum et malesuada fames ac
                      ante ipsum primis in faucibus. Teok Donec lobortis tortor ut luctus fermentum. Jaffa Gree, Pellentesque odio urna, Ghoault's take control of humans
                      bibendum quis luctus at, condimentum id massa Merlin to destroyer the Horus.
                      Phasellus a vestibulum nis
                    </Text>


                     <View style={{width: 500, height: 280, top: 0, borderWidth: 1, borderColor: 'green'}}>
                      <TouchableOpacity
                          style={{width: 500, height: 500, top: -110}}
                          onPress={() => this.setState({ paused: !this.state.paused })}
                      >
                          <Video
                              ref={(ref: Video) => { this.video = ref }}
                              /* For ExoPlayer */
                              /* source={{ uri: 'http://www.youtube.com/api/manifest/dash/id/bf5bb2419360daf1/source/youtube?as=fmp4_audio_clear,fmp4_sd_hd_clear&sparams=ip,ipbits,expire,source,id,as&ip=0.0.0.0&ipbits=0&expire=19000000000&signature=51AF5F39AB0CEC3E5497CD9C900EBFEAECCCB5C7.8506521BFC350652163895D4C26DEE124209AA9E&key=ik0', type: 'mpd' }} */
                              source={videos.stargate}
                              style={{width: 500, height: 500}}
                              rate={this.state.rate}
                              paused={this.state.paused}
                              volume={this.state.volume}
                              muted={this.state.muted}
                              resizeMode={this.state.resizeMode}
                              onLoad={this.onLoad}
                              onProgress={this.onProgress}
                              onEnd={this.onEnd}
                              onAudioBecomingNoisy={this.onAudioBecomingNoisy}
                              onAudioFocusChanged={this.onAudioFocusChanged}
                              repeat={true}
                          />
                      </TouchableOpacity>
                     </View>

                    <TouchableHighlight
                        style={{width: 120, left: 195, borderWidth: 4, borderColor: '#0277BD', backgroundColor: 'white', top: 20}}
                        onPress={() => {
                            this.setModalVisible(!this.state.modalVisible);
                        }}>
                      <Text style={{fontSize: 20, padding: 2, color: 'black'}}>Hide Modal</Text>
                    </TouchableHighlight>

                  </View>
                </View>
              </Modal>

              <TouchableHighlight
                  style={{width: 128, borderWidth: 4, borderColor: '#0277BD', backgroundColor: 'white'}}
                  onPress={() => {
                      this.setModalVisible(true);
                  }}>
                <Text style={{fontSize: 20, padding: 2, color: 'black'}}>Show Modal</Text>
              </TouchableHighlight>
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
        color: '#0277BD',
    },
    subtext: {
        fontSize: 15,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    fullScreen: {
        position: 'absolute',
        borderColor: 'green',
        borderWidth: 1,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    controls: {
        backgroundColor: 'transparent',
        borderRadius: 5,
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
    },
    progress: {
        flex: 1,
        flexDirection: 'row',
        borderRadius: 3,
        overflow: 'hidden',
    },
    innerProgressCompleted: {
        height: 20,
        backgroundColor: '#cccccc',
    },
    innerProgressRemaining: {
        height: 20,
        backgroundColor: '#2C2C2C',
    },
    generalControls: {
        flex: 1,
        flexDirection: 'row',
        borderRadius: 4,
        overflow: 'hidden',
        paddingBottom: 10,
    },
    rateControl: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    volumeControl: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    resizeModeControl: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    controlOption: {
        alignSelf: 'center',
        fontSize: 11,
        color: 'white',
        paddingLeft: 2,
        paddingRight: 2,
        lineHeight: 12,
    },
});
