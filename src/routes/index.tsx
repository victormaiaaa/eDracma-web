import React from 'react';
import { Switch } from 'react-router-dom';
import Login from '../pages/Login';
import Pontos from '../pages/Pontos';
import Vendas from '../pages/Vendas';
import Route from './Route';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/home" exact component={Vendas} isPrivate />
    <Route path="/pontos" exact component={Pontos} isPrivate />
  </Switch>
);

export default Routes;
