import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, Image} from "react-native";
import {images} from "../../general/Images";

const alertHabilitado = images.ic_alert_red_small;
const alertDesabilitado = images.ic_alert_gray_small;

export default class AlertComponent extends Component{

    constructor(props){
        super(props);

        this.state = {
            'estadoDoAlert': this.props.enable ? alertHabilitado : alertDesabilitado,
            'corDeFundo': this.props.enable ? '#212121' : '#474749'
        }
    }

    render(){
        return(
            <TouchableOpacity
                style={[styles.container,{backgroundColor: this.state.corDeFundo}]}

                onPress={() => {
                    if(this.state.estadoDoAlert == alertDesabilitado){
                        this.setState({'estadoDoAlert' : alertHabilitado});
                        this.setState({'corDeFundo': '#212121'});
                    }else{
                        this.setState({'estadoDoAlert' : alertDesabilitado});
                        this.setState({'corDeFundo': '#474749'});
                    }
                }}>
                <Image style={{width: 110, height: 110}} source={this.state.estadoDoAlert}/>
            </TouchableOpacity>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        width: 130,
        height: 130,
        flex: 0,
        alignItems: 'center',
        borderColor: '#303030',
        borderWidth: 1
    },
});