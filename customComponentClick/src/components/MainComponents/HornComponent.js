import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, Image} from "react-native";
import {images} from "../../general/Images";

export default class HornComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hornStatus: false,
            bgColor: "#474749",
            imageHorn: images.ic_horn_gray_small,
        };
        this.timer = null;
        this.makeNoise = this.makeNoise.bind(this);
        this.stopNoise = this.stopNoise.bind(this);
    };

    makeNoise() {
        this.timer = setTimeout(this.makeNoise, 200);
        this.setState({
            hornStatus: true,
            bgColor: "#212121",
            imageHorn: images.ic_horn_orange_small
        });        
    };

    stopNoise() {
        this.setState({
            hornStatus: false,
            bgColor: "#474749",
            imageHorn: images.ic_horn_gray_small
        });        
        clearTimeout(this.timer);
    };

    render() {
        return (
            <TouchableOpacity
                style={[styles.container, {backgroundColor: this.state.bgColor}]}
                onPressIn={this.makeNoise}
                onPressOut={this.stopNoise}>
                <Image style={{width: 110, height: 110}} source={this.state.imageHorn}/>
            </TouchableOpacity>
        );
    };

}

const styles = StyleSheet.create({
    container: {
        width: 130,
        height: 130,
        flex: 0,
        alignItems: 'center',
        borderColor: '#303030',
        borderWidth: 1,
    },
});
