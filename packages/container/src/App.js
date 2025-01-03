import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {createGenerateClassName} from '@material-ui/core/styles';
import {StylesProvider} from '@material-ui/core';

import Header from './components/Header';
import MarketingApp from './components/MarketingApp';
import AuthApp from './components/AuthApp';

const generateClassName = createGenerateClassName({
  prefix: 'co',
});

export default () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header/>
          <Switch>
            <Route path="/auth" component={AuthApp}/>
            <Route path="/" component={MarketingApp}/>
          </Switch>
        </div>
      </StylesProvider>
    </BrowserRouter>
  )
}
