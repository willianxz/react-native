import React from 'react';
import {Router, Scene} from "react-native-router-flux";
import Main from "./itens/main/Main";
import Telatal2 from "./itens/telatal2/Telatal2";
import Telatal3 from "./itens/telatal3/Telatal3";


// Define todas as rotas do aplicativo
const RouterScenes = () => (
    <Router>
        <Scene key="root">
            <Scene key="main_scene" component={Main} hideNavBar={true} initial/>
            <Scene key="tela_tal_2" component={Telatal2} hideNavBar={true}/>
            <Scene key="tela_tal_3" component={Telatal3} hideNavBar={true}/>            
        </Scene>
    </Router>
);

export default RouterScenes;
