import React from 'react';
import {createGenerateClassName, StylesProvider} from '@material-ui/core/styles';
import {Router, Switch} from 'react-router-dom';

const generateClassName = createGenerateClassName({
  productionPrefix: 'au',
});

export default ({history}) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  )
}
