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


//Conserta o bug ao inserir uma nota e edita-la sem atualizar o aplicativo.
//Para conserta isso tenho que desvincular os campos de inserção, criando estado pros dois e depois ao clicar no adicionar notas, manda jogar esses valores para o estado verdadeiro.

var SQLite = require('react-native-sqlite-storage');
var db = SQLite.openDatabase({name: 'test.db', createFromLocation: '~tarefas.db'});


var myTarefas = [];


export default class App extends Component<Props> {

    constructor(props) {
        super(props)

        this.state = {
            tarefas: [],
            id: null,
            titulo: "",
            comentario: "",
            tituloCampo: "",
            comentarioCampo: "",
            cor: "#40C4FF",
            border: [2, 0, 0, 0, 0, 0, 0, 0, 0],
        };
    }

    componentWillMount() {
        var minhasTarefas = [];
        db.transaction((tx) => {
            tx.executeSql('SELECT * FROM tarefa ORDER BY id DESC', [], (tx, results) => {
                var len = results.rows.length;
                if (len > 0) {
                    //Se houver algum John, pegamos apenas o primeiro:

                    var contWhile = 0;

                    while (results.rows.item(contWhile) !== undefined) {
                        var row = results.rows.item(contWhile);


                        minhasTarefas.push(row);
                        contWhile++;
                    }
                    this.setState({tarefas: minhasTarefas});
                }
            });
        });
    }

    componentDidMount(){

    }

    selectFromDb(){
        var minhasTarefas = [];
        db.transaction((tx) => {
            tx.executeSql('SELECT * FROM tarefa ORDER BY id ASC', [], (tx, results) => {
                var len = results.rows.length;
                if (len > 0) {
                    //Se houver algum John, pegamos apenas o primeiro:

                    var contWhile = 0;

                    while (results.rows.item(contWhile) !== undefined) {
                        var row = results.rows.item(contWhile);

                        minhasTarefas.push(row);
                        contWhile++;
                    }
                    this.setState({tarefas: minhasTarefas});
                }
            });
        });
    }


    updateDb(id){

        var msg = 'Não a nada a ser alterado na nota.';

        if(this.state.titulo !== "" && this.state.comentario !== ""){
            try{
                db.transaction((tx) => {
                    tx.executeSql("UPDATE tarefa set titulo = '"+this.state.titulo+"', comentario = '"+this.state.comentario+"' where id = "+id+"");
                });
                msg = 'A tarefa foi atualizada.';
            }catch (error){
                msg = error;
            }
        }else if(this.state.titulo !== "" && this.state.comentario === ""){
            try{
                db.transaction((tx) => {
                    tx.executeSql("UPDATE tarefa set titulo = '"+this.state.titulo+"' where id = "+id+"");
                });
                msg = 'A tarefa foi atualizada.';
            }catch (error){
                msg = error;
            }
        }else if(this.state.titulo === "" && this.state.comentario !== ""){
            try{
                db.transaction((tx) => {
                    tx.executeSql("UPDATE tarefa set comentario = '"+this.state.comentario+"' where id = "+id+"");
                });
                msg = 'A tarefa foi atualizada.';
            }catch (error){
                msg = error;
            }
        }



        alert(msg);
    }


    deleteDb(id){
        var msg;
        var posicao = 0;
        var posicaoEncontrada;


        try{
            db.transaction((tx) => {
                tx.executeSql("DELETE FROM tarefa where id = "+id+"");
            });
            msg = 'A tarefa foi excluida.';
        }catch (error){
            msg = error;
        }

        this.selectFromDb(); //Atualiza a lista.
        alert(msg);
    }


    insertDb(){
        var msg;

        try{
            db.transaction((tx) => {
                tx.executeSql("INSERT INTO tarefa (titulo, comentario, cor) VALUES ('"+this.state.titulo+"', '"+this.state.comentario+"', '"+this.state.cor+"')");
                this.setState({tituloCampo: ""});
                this.setState({comentarioCampo: ""});
            });
            msg = 'A tarefa foi adicionada.';
        }catch (error){
            msg = error;
        }

        this.selectFromDb(); //Atualiza a lista.
        alert(msg);
    }



    renderNames() {
        //Se não tiver esse if, verificando a existencia de elementos, irá resultar em um crash do aplicativo, pois ao rodar o state entra como undefined.
        if (this.state.tarefas.length > 0) {
            return (
                //Quebra o objeto em elementos.
                this.state.tarefas.map((tarefas) => {
                    return (
                        <View key={tarefas.id} style={{paddingBottom: 100}}>

                            <View style={{flex: 1, flexDirection: 'row', left: 40}}>
                                <View style={{left: 71, width: 150}}>
                                    <Button
                                        onPress={() => {
                                            this.updateDb(tarefas.id);
                                        }}
                                        title="Editar"
                                        color="#FFD600"
                                        accessibilityLabel="Editar"
                                    />
                                </View>

                                <View style={{left: 70, width: 150}}>
                                    <Button
                                        onPress={() => {
                                            this.deleteDb(tarefas.id);
                                        }}
                                        title="Excluir"
                                        color="#DD2C00"
                                        accessibilityLabel="Excluir"
                                    />
                                </View>
                            </View>

                            <View key={tarefas.id} style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 10, borderWidth: 1, borderColor: 'gray', backgroundColor: tarefas.cor, width: 500}}>
                                <TextInput
                                    onChangeText={(titulo) => {
                                        this.setState({titulo});
                                    }}
                                    maxLength={58}
                                    multiline={true}
                                    editable={true}
                                    style={{fontSize: 30, fontFamily: 'sans-serif',  textAlignVertical: "top"}}
                                    key={tarefas.id}
                                >
                                    {tarefas.titulo}
                                </TextInput>

                                <View style={{borderBottomColor: 'black', borderBottomWidth: 1, borderWidth: 1, width: 500}}/>
                                <TextInput
                                    onChangeText={(comentario) => {
                                        this.setState({comentario});
                                    }}
                                    multiline={true}
                                    editable={true}
                                    style={{fontSize: 20, fontFamily: 'sans-serif'}}
                                    key={tarefas.id}
                                >
                                    {tarefas.comentario}
                                </TextInput>
                                <TextInput multiline={true} editable={false} style={{fontSize: 15}} key={tarefas.id}>{'Cor: '+tarefas.cor}</TextInput>
                            </View>

                        </View>
                    )
                })
            )
        } else {
            return (
                <Text>No data</Text>
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
                        <Text style={{fontSize: 30, left: - 33, textAlign: 'center', paddingBottom: 30}}>Lista de Tarefas</Text>
                    </View>

                    {this.renderNames()}

                    <View style={{width: 600}}>
                        <Text style={{fontSize: 20}}>Titulo</Text>
                        <TextInput
                            maxLength={58}
                            autoFocus={true}
                            style={{height: 40, width: 500, borderColor: 'gray', borderWidth: 1, fontSize: 16}}
                            onChangeText={(tituloCampo) => this.setState({tituloCampo})}
                            value={this.state.tituloCampo}
                        />
                    </View>

                    <View style={{width: 50, height: 5, flex: 1, flexDirection: 'column', left: 500, top: 32}}>

                        <View style={{borderWidth: this.state.border[0], borderColor: 'black'}}>
                            <Button
                                style={{width: 50, height: 85}}
                                onPress={() => {

                                    let newArray = this.state.border;
                                    newArray.splice(0, 1, 2);
                                    newArray.splice(1, 1, 0);
                                    newArray.splice(2, 1, 0);
                                    newArray.splice(3, 1, 0);
                                    newArray.splice(4, 1, 0);
                                    newArray.splice(5, 1, 0);
                                    newArray.splice(6, 1, 0);
                                    newArray.splice(7, 1, 0);
                                    newArray.splice(8, 1, 0);
                                    this.setState({border: newArray});
                                    this.setState({cor: "#40C4FF"});
                                }}
                                title=""
                                color="#40C4FF"
                                accessibilityLabel="Blue"

                            />
                        </View>

                        <View style={{borderWidth: this.state.border[1], borderColor: 'black'}}>
                            <Button
                                style={{width: 50, height: 85}}
                                onPress={() => {
                                    let newArray = this.state.border;
                                    newArray.splice(0, 1, 0);
                                    newArray.splice(1, 1, 2);
                                    newArray.splice(2, 1, 0);
                                    newArray.splice(3, 1, 0);
                                    newArray.splice(4, 1, 0);
                                    newArray.splice(5, 1, 0);
                                    newArray.splice(6, 1, 0);
                                    newArray.splice(7, 1, 0);
                                    newArray.splice(8, 1, 0);
                                    this.setState({border: newArray});
                                    this.setState({cor: "#0091EA"});
                                }}
                                title=""
                                color="#0091EA"
                                accessibilityLabel="DarkBlue"
                            />
                        </View>


                        <View style={{borderWidth: this.state.border[2], borderColor: 'black'}}>
                            <Button
                                style={{width: 50, height: 85}}
                                onPress={() => {
                                    let newArray = this.state.border;
                                    newArray.splice(0, 1, 0);
                                    newArray.splice(1, 1, 0);
                                    newArray.splice(2, 1, 2);
                                    newArray.splice(3, 1, 0);
                                    newArray.splice(4, 1, 0);
                                    newArray.splice(5, 1, 0);
                                    newArray.splice(6, 1, 0);
                                    newArray.splice(7, 1, 0);
                                    newArray.splice(8, 1, 0);
                                    this.setState({border: newArray});
                                    this.setState({cor: "#76FF03"});
                                }}
                                title=""
                                color="#76FF03"
                                accessibilityLabel="Green"
                            />
                        </View>

                        <View style={{borderWidth: this.state.border[3], borderColor: 'black'}}>
                            <Button
                                style={{width: 50, height: 85}}
                                onPress={() => {
                                    let newArray = this.state.border;
                                    newArray.splice(0, 1, 0);
                                    newArray.splice(1, 1, 0);
                                    newArray.splice(2, 1, 0);
                                    newArray.splice(3, 1, 2);
                                    newArray.splice(4, 1, 0);
                                    newArray.splice(5, 1, 0);
                                    newArray.splice(6, 1, 0);
                                    newArray.splice(7, 1, 0);
                                    newArray.splice(8, 1, 0);
                                    this.setState({border: newArray});
                                    this.setState({cor: "#2E7D32"});
                                }}
                                title=""
                                color="#2E7D32"
                                accessibilityLabel="DarkGreen"
                            />
                        </View>

                        <View style={{borderWidth: this.state.border[4], borderColor: 'black'}}>
                            <Button
                                style={{width: 50, height: 85}}
                                onPress={() => {
                                    let newArray = this.state.border;
                                    newArray.splice(0, 1, 0);
                                    newArray.splice(1, 1, 0);
                                    newArray.splice(2, 1, 0);
                                    newArray.splice(3, 1, 0);
                                    newArray.splice(4, 1, 2);
                                    newArray.splice(5, 1, 0);
                                    newArray.splice(6, 1, 0);
                                    newArray.splice(7, 1, 0);
                                    newArray.splice(8, 1, 0);
                                    this.setState({border: newArray});
                                    this.setState({cor: "#FFEA00"});
                                }}
                                title=""
                                color="#FFEA00"
                                accessibilityLabel="Yellow"
                            />
                        </View>

                        <View style={{borderWidth: this.state.border[5], borderColor: 'black'}}>
                            <Button
                                style={{width: 50, height: 85}}
                                onPress={() => {
                                    let newArray = this.state.border;
                                    newArray.splice(0, 1, 0);
                                    newArray.splice(1, 1, 0);
                                    newArray.splice(2, 1, 0);
                                    newArray.splice(3, 1, 0);
                                    newArray.splice(4, 1, 0);
                                    newArray.splice(5, 1, 2);
                                    newArray.splice(6, 1, 0);
                                    newArray.splice(7, 1, 0);
                                    newArray.splice(8, 1, 0);
                                    this.setState({border: newArray});
                                    this.setState({cor: "#FF9100"});
                                }}
                                title=""
                                color="#FF9100"
                                accessibilityLabel="Orange"
                            />
                        </View>

                        <View style={{borderWidth: this.state.border[6], borderColor: 'black'}}>
                            <Button
                                style={{width: 50, height: 85}}
                                onPress={() => {
                                    let newArray = this.state.border;
                                    newArray.splice(0, 1, 0);
                                    newArray.splice(1, 1, 0);
                                    newArray.splice(2, 1, 0);
                                    newArray.splice(3, 1, 0);
                                    newArray.splice(4, 1, 0);
                                    newArray.splice(5, 1, 0);
                                    newArray.splice(6, 1, 2);
                                    newArray.splice(7, 1, 0);
                                    newArray.splice(8, 1, 0);
                                    this.setState({border: newArray});
                                    this.setState({cor: "#FF3D00"});
                                }}
                                title=""
                                color="#FF3D00"
                                accessibilityLabel="Red"
                            />
                        </View>

                        <View style={{borderWidth: this.state.border[7], borderColor: 'black'}}>
                            <Button
                                style={{width: 50, height: 85}}
                                onPress={() => {
                                    let newArray = this.state.border;
                                    newArray.splice(0, 1, 0);
                                    newArray.splice(1, 1, 0);
                                    newArray.splice(2, 1, 0);
                                    newArray.splice(3, 1, 0);
                                    newArray.splice(4, 1, 0);
                                    newArray.splice(5, 1, 0);
                                    newArray.splice(6, 1, 0);
                                    newArray.splice(7, 1, 2);
                                    newArray.splice(8, 1, 0);
                                    this.setState({border: newArray});
                                    this.setState({cor: "#D500F9"});

                                }}
                                title=""
                                color="#D500F9"
                                accessibilityLabel="Pink"
                            />
                        </View>

                        <View style={{borderWidth: this.state.border[8], borderColor: 'black'}}>
                            <Button
                                style={{width: 50, height: 85}}
                                onPress={() => {
                                    let newArray = this.state.border;
                                    newArray.splice(0, 1, 0);
                                    newArray.splice(1, 1, 0);
                                    newArray.splice(2, 1, 0);
                                    newArray.splice(3, 1, 0);
                                    newArray.splice(4, 1, 0);
                                    newArray.splice(5, 1, 0);
                                    newArray.splice(6, 1, 0);
                                    newArray.splice(7, 1, 0);
                                    newArray.splice(8, 1, 2);
                                    this.setState({border: newArray});
                                    this.setState({cor: "#4527A0"});
                                }}
                                title=""
                                color="#4527A0"
                                accessibilityLabel="Purple"
                            />
                        </View>
                    </View>

                    <View style={{width: 500, height: 320}}>
                        <Text style={{fontSize: 20}}>Comentario</Text>
                        <TextInput
                            multiline={true}
                            style={{height: 300, width: 500, borderColor: 'gray', borderWidth: 1, textAlignVertical: "top", fontSize: 16}}
                            onChangeText={(comentarioCampo) => {
                                this.setState({comentarioCampo});
                            }}
                            value={this.state.comentarioCampo}
                        />
                    </View>


                    <View style={{width: 500, paddingBottom: 50}}>
                        <Button
                            onPress={() => {
                                this.setState({titulo: this.state.tituloCampo});
                                this.setState({comentario: this.state.comentarioCampo});
                                this.insertDb();
                            }}
                            title="Adicionar Tarefa"
                            color="#2E7D32"
                            accessibilityLabel="Adicionar Tarefa"
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
