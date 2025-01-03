import React from 'react';
import MarketingApp from './components/MarketingApp';
import Header from './components/Header';
import {BrowserRouter} from 'react-router-dom';
import {createGenerateClassName} from '@material-ui/core/styles';
import {StylesProvider} from '@material-ui/core';

const generateClassName = createGenerateClassName({
  prefix: 'co',
});

export default () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header/>
          <MarketingApp/>
        </div>
      </StylesProvider>
    </BrowserRouter>
  )
}
