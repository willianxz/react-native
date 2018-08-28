/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    Alert,
    Button,
    TextInput,
    Picker,
    ScrollView,
    View
} from 'react-native';



var SQLite = require('react-native-sqlite-storage');
var db = SQLite.openDatabase({name: 'test.db', createFromLocation: '~meuBanco.db'});


var myAnimals = [];


export default class App extends Component<Props> {

    constructor(props) {
        super(props)

        this.state = {
            animais: [],
            tipo: "",
            apelido: "",
            id: null,
            porte: "Pequeno",
        };
    }

    componentWillMount() {
        db.transaction((tx) => {
            tx.executeSql('SELECT * FROM animal ORDER BY id DESC', [], (tx, results) => {
                var len = results.rows.length;
                if (len > 0) {
                    //Se houver algum John, pegamos apenas o primeiro:

                    var contWhile = 0;

                    while (results.rows.item(contWhile) !== undefined) {
                        var row = results.rows.item(contWhile);

                        console.log(row);
                        myAnimals.push(row);
                        contWhile++;
                    }
                    this.setState({animais: myAnimals});
                }
            });
        });
    }

    componentDidMount(){

    }

    selectFromAnimal(){
        var animal = {
            apelido: this.state.apelido,
            id: this.state.id,
            porte: this.state.porte,
            tipo: this.state.tipo
        };

       myAnimals.push(animal);
       this.setState({animais: myAnimals});
       this.setState({apelido: ""});
       this.setState({porte: ""});
       this.setState({tipo: ""});
    }

    insertDb(){
        var retorno;
        try{
            db.transaction((tx) => {
               tx.executeSql("INSERT INTO animal (tipo, apelido, porte) VALUES ('"+this.state.tipo+"', '"+this.state.apelido+"', '"+this.state.porte+"')");
            });
            retorno = 'Cadastrado com sucesso.';
        }catch (error){
            retorno = error;
        }

        return retorno;
    }

    renderNames() {
        //Se não tiver esse if, verificando a existencia de elementos, irá resultar em um crash do aplicativo, pois ao rodar o state entra como undefined.
        if (this.state.animais.length > 0) {
            return (
                //Quebra o objeto em elementos.
                this.state.animais.map((animais) => {
                    return (
                        <View key={animais.id} style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: 'gray', width: 500}}>
                            <Text style={{fontSize: 15}} key={animais.id}>{'Tipo: '+animais.tipo}</Text>
                            <Text style={{fontSize: 15}} key={animais.id}>{'Apelido: '+animais.apelido}</Text>
                            <Text style={{fontSize: 15}} key={animais.id}>{'Porte: '+animais.porte}</Text>
                        </View>
                    )
                })
            )
        } else {
            return (
                <Text>No name</Text>
            )
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >

                    <View>
                        <Text style={{fontSize: 30, textAlign: 'center'}}>Lista de Animais</Text>
                    </View>

                    {this.renderNames()}

                   <View style={{left: 100}}>
                        <View style={{flex: 0, flexDirection: 'row', paddingTop: 10}}>
                            <Text style={{left: 30}}>Tipo: </Text>
                            <Text style={{left: 100}}>Apelido: </Text>
                            <Text style={{left: 140}}>Porte: </Text>
                        </View>

                       <View style={{flex: 0, flexDirection: 'row'}}>
                            <TextInput
                                autoFocus={true}
                                maxLength={10}
                                style={{height: 40, width: 100, borderColor: 'gray', borderWidth: 1}}
                                onChangeText={(tipo) => this.setState({tipo})}
                                value={this.state.tipo}
                            />
                            <TextInput
                                style={{height: 40, width: 100, borderColor: 'gray', borderWidth: 1}}
                                onChangeText={(apelido) => this.setState({apelido})}
                                value={this.state.apelido}
                            />
                           <View style={{borderWidth: 1, borderColor: 'gray'}}>
                               <Picker
                                   mode={'dropdown'}
                                   selectedValue={this.state.porte}
                                   style={{ height: 38, width: 100}}
                                   onValueChange={(itemValue, itemIndex) => this.setState({porte: itemValue})}>
                                   <Picker.Item label="Pequeno" value="Pequeno" />
                                   <Picker.Item label="Médio" value="Médio" />
                                   <Picker.Item label="Grande" value="Grande" />
                               </Picker>
                           </View>
                       </View>
                   </View>

                    <View style={{top: 10, height: 100}}>
                      <Button
                          onPress={() => {
                             alert(this.insertDb());
                              this.selectFromAnimal();
                          }}
                          title="Cadastrar"
                          color="#64B5F6"
                          accessibilityLabel="Cadastrar"
                      />
                    </View>
                </ScrollView>
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
