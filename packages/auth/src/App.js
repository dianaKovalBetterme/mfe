import React from 'react';
import {createGenerateClassName, StylesProvider} from '@material-ui/core/styles';
import {Route, Router, Switch} from 'react-router-dom';
import SignIn from './components/Signin';
import SignUp from './components/Signup';

const generateClassName = createGenerateClassName({
  productionPrefix: 'au',
});

export default ({history}) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route path="/auth/signin" component={SignIn}/>
            <Route path="/auth/signup" component={SignUp}/>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  )
}
