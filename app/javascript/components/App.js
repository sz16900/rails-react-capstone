import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Coaches from './Coaches/Coaches';
import Coach from './Coach/Coach';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Coaches} />
      <Route exact path="/coaches/:slug" component={Coach} />
    </Switch>
  );
};

export default App;
