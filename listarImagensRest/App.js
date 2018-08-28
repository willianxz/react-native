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
    Image,
    ScrollView,
    Button,
    Alert,
    View
} from 'react-native';




export default class App extends Component<Props> {

    constructor(props){
        super(props);

        this.state = {
            page: 1,
            total_pages: '',
            previousPage: true,
            nextPage: false,
            idPerson: '',
            first_name: '',
            last_name: '',
            avatar: '',
            data: [],
        }
    }



    getUsersFromApiAsync() {
        return fetch('https://reqres.in/api/users?page='+this.state.page)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({page: responseJson.page});
                this.setState({total_pages: responseJson.total_pages});
                this.setState({data: responseJson.data});

                if(parseInt(this.state.page) === 1){
                    this.setState({previousPage: true});
                }else{
                    this.setState({previousPage: false});
                }

                if(parseInt(this.state.page) === parseInt(this.state.total_pages)){
                    this.setState({nextPage: true});
                }else{
                    this.setState({nextPage: false});
                }

            })
            .catch((error) => {
                console.error(error);
            });
    }




    renderMovies(){
        if(this.state.data.length > 0){
            return(
                this.state.data.map((data)=> {
                    return (
                        <View key={data.id} style={{backgroundColor: "#00897B"}}>
                                <View style={{width: 300, height: 200, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: 'black'}}>
                                    <Text style={{fontSize: 18}}>{'ID Person: '+data.id}</Text>
                                    <Image
                                        style={{width: 100, height: 100}}
                                        source={{uri: data.avatar}}
                                    />
                                    <Text style={{fontSize: 18}}>{'First Name: '+data.first_name}</Text>
                                    <Text style={{fontSize: 18}}>{'Last Name: '+data.last_name}</Text>
                                </View>
                        </View>
                    )
                })
            )
        }else{
            return(
                <Text>Sem dados.</Text>
            )
        }
    }


    nextPage(){
        var page = parseInt(this.state.page);
        page++;
        this.setState({page: page});
        return fetch('https://reqres.in/api/users?page='+page)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({page: responseJson.page});
                this.setState({total_pages: responseJson.total_pages});
                this.setState({data: responseJson.data});

                if(parseInt(this.state.page) === 1){
                    this.setState({previousPage: true});
                }else{
                    this.setState({previousPage: false});
                }

                if(parseInt(this.state.page) === parseInt(this.state.total_pages)){
                    this.setState({nextPage: true});
                }else{
                    this.setState({nextPage: false});
                }

            })
            .catch((error) => {
                console.error(error);
            });
    }

    previousPage(){
        var page = parseInt(this.state.page);
        page--;
        this.setState({page: page});
        return fetch('https://reqres.in/api/users?page='+page)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({page: responseJson.page});
                this.setState({total_pages: responseJson.total_pages});
                this.setState({data: responseJson.data});

                if(parseInt(this.state.page) === 1){
                    this.setState({previousPage: true});
                }else{
                    this.setState({previousPage: false});
                }

                if(parseInt(this.state.page) === parseInt(this.state.total_pages)){
                    this.setState({nextPage: true});
                }else{
                    this.setState({nextPage: false});
                }

            })
            .catch((error) => {
                console.error(error);
            });
    }


    componentDidMount(){
        this.getUsersFromApiAsync();
    }


    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                        <Text style={styles.welcome}>
                            Welcome to React Native.
                        </Text>
                        <Text style={{fontSize: 25}}>{'Página: '+this.state.page}</Text>

                        {this.renderMovies()}

                        <View  style={{flexDirection: 'row', flex: 0, top: 15}}>
                            <View style={{width: 130, height: 50, left: - 20}}>
                                <Button
                                    onPress={() => {
                                        this.previousPage();
                                    }}
                                    title="Previous page"
                                    color="#2E7D32"
                                    disabled={this.state.previousPage}
                                    accessibilityLabel="Learn more about this purple button"
                                />
                            </View>

                            <View style={{width: 130, height: 50, left: 15}}>
                                <Button
                                    onPress={() => {
                                        this.nextPage();
                                    }}
                                    title="Next Page"
                                    color="#2E7D32"
                                    disabled={this.state.nextPage}
                                    accessibilityLabel="Learn more about this purple button"
                                />
                            </View>
                        </View>


                </View>
            </ScrollView>
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
