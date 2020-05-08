import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Newpassword from  './pages/Newpassword';
import Home from './pages/Home';
import Cad_Clientes from './pages/cad_clientes';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/home" component={Home} />
                <Route path="/newpassword" component={Newpassword} />
                <Route path="/cad_clientes" component={Cad_Clientes} />
            </Switch>
        </BrowserRouter>
    );
}

