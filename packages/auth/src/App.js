import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

// import Landing from './components/Landing';
// import Pricing from './components/Pricing';

const generateClassName = createGenerateClassName({
  productionPrefix: 'auth',
});

export default () => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router>
          <Switch></Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
