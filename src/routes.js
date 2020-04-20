import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Newpassword from  './pages/Newpassword';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/newpassword" component={Newpassword} />
            </Switch>
        </BrowserRouter>
    );
}

