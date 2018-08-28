import React from 'react';
import {Router, Scene} from "react-native-router-flux";
import Main from "./itens/main/Main";


// Define todas as rotas do aplicativo
const RouterScenes = () => (
    <Router>
        <Scene key="root">
            <Scene key="main_scene" component={Main} hideNavBar={true} initial/>            
        </Scene>
    </Router>
);

export default RouterScenes;
