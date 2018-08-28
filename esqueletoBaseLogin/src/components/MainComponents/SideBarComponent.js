import React, { Component } from 'react';
import {Actions} from "react-native-router-flux";
import {images} from "../../general/Images";

import {
    StyleSheet,
    Text,
    TouchableOpacity,
    Button,
    Alert,
    Image,
    View
} from 'react-native';


export default class SideBarComponent extends Component{

    constructor(props) {
        super(props);
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={{flex: 0, flexDirection: 'column'}}>

                        <TouchableOpacity
                            style={this.props.actualScene.toString() === "main_scene" ? styles.containerButtonDisabled : styles.containerButtonEnabled}
                            disabled={this.props.actualScene.toString() === "main_scene"}
                            onPress={() => {
                                Actions.main_scene({actualScene: this.props.actualScene, type: 'reset'})
                            }}
                        >
                         <Image style={{width: 100, height: 100}} source={images.home}/>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={this.props.actualScene.toString() === "about" ? styles.containerButtonDisabled : styles.containerButtonEnabled}
                            disabled={this.props.actualScene.toString() === "about"}
                            onPress={() => {
                                Actions.about({actualScene: this.props.actualScene, type: 'reset'})
                            }}
                        >
                          <Image style={{width: 90, height: 90, top: 5}} source={images.about}/>
                       </TouchableOpacity>

                        <TouchableOpacity
                            style={this.props.actualScene.toString() === "contact" ? styles.containerButtonDisabled : styles.containerButtonEnabled}
                            disabled={this.props.actualScene.toString() === "contact"}
                            onPress={() => {
                                Actions.contact({actualScene: this.props.actualScene, type: 'reset'})
                            }}
                        >
                          <Image style={{width: 90, height: 90}} source={images.contact}/>
                        </TouchableOpacity>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        width: 110,
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
    containerButtonEnabled: {
        opacity: 1,
        width: 100,
        height: 100,
        flex: 0,
        alignItems: 'center',
        borderColor: '#303030',
        borderWidth: 1,
        backgroundColor: "white",
    },
    containerButtonDisabled: {
        opacity: 0.3,
        width: 100,
        height: 100,
        flex: 0,
        alignItems: 'center',
        borderColor: '#303030',
        borderWidth: 1,
        backgroundColor: "#474749",
    },
});
