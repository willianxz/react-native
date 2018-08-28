import React, { Component } from 'react';
import {Actions} from "react-native-router-flux";
import {images} from "../../general/Images";
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  Alert,
  Image,
  TouchableHighlight,
  TextInput,
  Modal,
  View
} from 'react-native';



export default class Main extends Component{
	
  constructor(props) {
	super(props);

	this.state = {
	  mail: '',
      password: '',
      name: '',
      phone: '',
      modalNovoUsuarioVisible: false,
      modalEsqueceuASenhaVisible: false,
    }
  };

    setModalNovoUsuarioVisible(visible) {
        this.setState({modalNovoUsuarioVisible: visible});
    }

    setModalEsqueceuASenhaVisible(visible){
        this.setState({modalEsqueceuASenhaVisible: visible});
    }

  verificarLogin(){

       var loginEncontrado = false;
       var camposPreenchidos = true;

      //Verificação se é vazio os campos
      if(isNaN(this.state.mail.charCodeAt(0)) === true || this.state.mail.charCodeAt(0) === 32){
        alert('Favor preencher o campo Email.');
        camposPreenchidos = false;
      }

      if(isNaN(this.state.password.charCodeAt(0)) === true || this.state.password.charCodeAt(0) === 32){
          alert('Favor preencher o campo Password.');
         camposPreenchidos = false;
      }

      //Verificação se encontrou o login.
      if(this.state.mail === 'willian.duarte@sc.senai.br' && this.state.password === '123'){
          loginEncontrado = true;
          Actions.about({type: 'reset'});
      }

      if(loginEncontrado === false && camposPreenchidos === true){
        alert('Login não encontrado.');
      }

  }

  chamarModais(){
    return(
        <View>
            <Modal
                animationType="slide"
                transparent={false}
                visible={this.state.modalNovoUsuarioVisible}
                onRequestClose={() => {
                    alert('Modal has been closed.');
                }}>

              <View style={{alignItems: 'center',justifyContent: 'center'}}>
                <View style={{width: 500}}>

                  <Text style={styles.welcome}>SOU NOVO USUARIO</Text>

                  <View style={{flex: 0, flexDirection: 'row'}}>
                    <Text style={{top: 5, fontSize: 16}}>Nome: </Text>
                    <TextInput
                        style={{width: 450, height: 40, left: 30, borderColor: 'gray', borderWidth: 1}}
                        onChangeText={(nome) => this.setState({nome})}
                        value={this.state.nome}
                    />
                  </View>


                  <View style={{flex: 0, flexDirection: 'row', top: 10}}>
                    <Text style={{top: 5, fontSize: 16}}>Telefone: </Text>
                    <TextInput
                        keyboardType={'number-pad'}
                        style={{width: 450, height: 40, left: 11, borderColor: 'gray', borderWidth: 1}}
                        onChangeText={(phone) => this.setState({phone})}
                        value={this.state.phone}
                    />
                  </View>

                  <View style={{flex: 0, flexDirection: 'row', top: 20}}>
                    <Text style={{top: 5, fontSize: 16}}>Email: </Text>

                    <TextInput
                        keyboardType={'email-address'}
                        style={{width: 450, height: 40, left: 31, borderColor: 'gray', borderWidth: 1}}
                        onChangeText={(mail) => this.setState({mail})}
                        value={this.state.mail}
                    />
                  </View>

                  <View style={{flex: 0, flexDirection: 'row', top: 30}}>
                    <Text style={{top: 5, fontSize: 16}}>Password: </Text>

                    <TextInput
                        secureTextEntry={true}
                        style={{width: 450, height: 40, borderColor: 'gray', borderWidth: 1}}
                        onChangeText={(password) => this.setState({password})}
                        value={this.state.password}
                    />
                  </View>



                  <TouchableHighlight
                      style={{width: 120, left: 195, borderWidth: 4, borderColor: '#0277BD', backgroundColor: 'white', top: 40}}
                      onPress={() => {
                          this.setModalNovoUsuarioVisible(!this.state.modalNovoUsuarioVisible);
                      }}>
                    <Text style={{fontSize: 20, padding: 2, color: 'black'}}>Hide Modal</Text>
                  </TouchableHighlight>

                </View>
              </View>
            </Modal>


            <Modal
                animationType="slide"
                transparent={false}
                visible={this.state.modalEsqueceuASenhaVisible}
                onRequestClose={() => {
                    alert('Modal has been closed.');
                }}>

              <View style={{alignItems: 'center',justifyContent: 'center'}}>
                <View style={{width: 500}}>

                  <Text style={styles.welcome}>ESQUECEU A SENHA</Text>

                  <View style={{flex: 0, flexDirection: 'row'}}>
                    <Text style={{top: 5, fontSize: 16}}>Email: </Text>

                    <TextInput
                        keyboardType={'email-address'}
                        style={{width: 450, height: 40, borderColor: 'gray', borderWidth: 1}}
                        onChangeText={(mail) => this.setState({mail})}
                        value={this.state.mail}
                    />

                  </View>

                  <TouchableHighlight
                      style={{width: 120, left: 195, borderWidth: 4, borderColor: '#0277BD', backgroundColor: 'white', top: 20}}
                      onPress={() => {
                          this.setModalEsqueceuASenhaVisible(!this.state.modalEsqueceuASenhaVisible);
                      }}>
                    <Text style={{fontSize: 20, padding: 2, color: 'black'}}>Hide Modal</Text>
                  </TouchableHighlight>

                 </View>
               </View>
             </Modal>
        </View>
    );
  }



	
  render() {
    return (
      <View style={styles.container}>

        {this.chamarModais()}

        <Image style={{width: 1280, height: 800, position: 'absolute'}} source={{uri: "data:image/jpeg;base64,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"}}/>

        <View style={{width: 800, height: 500, top: - 50, borderColor: 'black', borderWidth: 2, backgroundColor: 'white'}}>
          <Text style={styles.welcome}>
            Welcome to Main Page
          </Text>

          <Image style={{left: 350}} source={images.reactNativeLogo}/>

          <View style={{flex: 0, flexDirection: 'row'}}>
          <Text style={{fontSize: 20, top: 42, left: 25}}>Email: </Text>
          <TextInput
              keyboardType={'email-address'}
              style={{left: 89, top: 40, width: 550, height: 40, borderColor: 'gray', borderWidth: 1}}
              onChangeText={(mail) => this.setState({mail})}
              value={this.state.mail}
          />
          </View>

          <View style={{flex: 0, flexDirection: 'row'}}>
            <Text style={{fontSize: 20, top: 90, left: 25}}>Password: </Text>
            <TextInput
                secureTextEntry={true}
                style={{left: 50, top: 90, width: 550, height: 40, borderColor: 'gray', borderWidth: 1}}
                onChangeText={(password) => this.setState({password})}
                value={this.state.password}
            />
          </View>

          <View style={{width: 120, height: 80, top: 150, left: 340}}>
            <Button
                onPress={() => {
                  this.verificarLogin();
                }}
                title="Entrar"
                color="#0288D1"
                accessibilityLabel="Botão de entrar no sistema."
            />
          </View>

          <View style={{width: 140, top: 115, left: 330}}>
            <TouchableHighlight
                onPress={() => {
                    this.setModalEsqueceuASenhaVisible(true);
                }}>
             <Text style={{fontSize: 16}}>Esqueceu a senha?</Text>
            </TouchableHighlight>

            <TouchableHighlight
                onPress={() => {
                    this.setModalNovoUsuarioVisible(true);
                }}>
              <Text style={{fontSize: 16, top: 3, left: 3}}>Sou novo usuario</Text>
            </TouchableHighlight>
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
   subtext: {
    padding: 10,
    fontSize: 15,
    textAlign: 'center'
   },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },

});
