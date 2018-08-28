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
    Alert,
    View
} from 'react-native';




export default class App extends Component<Props> {

    constructor(props){
        super(props);

        this.state = {
            titleBoxOFMovies: '',
            descriptionBoxMovies: '',
            movies: [],
        }
    }



    getMoviesFromApiAsync() {
        return fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({movies: responseJson.movies});
                this.setState({titleBoxOFMovies: responseJson.title});
                this.setState({descriptionBoxMovies: responseJson.description});
            })
            .catch((error) => {
                console.error(error);
            });
    }

    renderMovies(){
        console.log(this.state.movies.length);   //this.state.movies.length
        if(this.state.movies.length > 0){
            return(
                this.state.movies.map((movie)=> {
                    return (
                        <View key={movie.title}>
                          <Text style={{fontSize: 25}}>{'Titulo: '+movie.title}</Text>
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

    componentDidMount(){
        this.getMoviesFromApiAsync();
    }


    render() {
        return (
            <View style={styles.container}>
              <Text style={styles.welcome}>
                Welcome to React Native.
              </Text>
              <Text style={{fontSize: 25}}>{'Titulo da caixa de filmes: '+this.state.titleBoxOFMovies}</Text>
              <Text style={{fontSize: 25}}>{'Descrição da caixa de filmes: '+this.state.descriptionBoxMovies}</Text>
                {this.renderMovies()}
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
