import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Newpassword from  './pages/Newpassword';
import Home from './pages/Home';
import Cad_Clientes from './pages/cad_clientes';
import Ficha_cad_cliente from './pages/Ficha_cad_cliente';
import Cad_Produtos from './pages/cad_produtos';
import Ficha_cad_produto from './pages/Ficha_cad_produto';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/home" component={Home} />
                <Route path="/newpassword" component={Newpassword} />
                <Route path="/cad_clientes" component={Cad_Clientes} />
                <Route path="/ficha_cad_cliente" component={Ficha_cad_cliente} />
                <Route path="/cad_produtos" component={Cad_Produtos} />
                <Route path="/ficha_cad_produto" component={Ficha_cad_produto} />
            </Switch>
        </BrowserRouter>
    );
}

