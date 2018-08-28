import React from 'react';
import {Router, Scene} from "react-native-router-flux";
import Main from "./itens/main/Main";
import About from "./itens/about/About";
import Contact from "./itens/contact/Contact";


// Define todas as rotas do aplicativo
const RouterScenes = () => (
    <Router>
        <Scene key="root">
            <Scene key="main_scene" component={Main} hideNavBar={true} initial/>
            <Scene key="about" component={About} hideNavBar={true}/>
            <Scene key="contact" component={Contact} hideNavBar={true}/>
        </Scene>
    </Router>
);

export default RouterScenes;
