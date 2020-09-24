import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Coaches from './Coaches/Coaches';
import Coach from './Coach/Coach';
import Header from './Header';

const App = () => {
  return (
    <div id="wrapper" className={'flex relative'}>
      <Header />
      <Switch>
        <Route exact path="/" component={Coaches} />
        <Route exact path="/coaches/:slug" component={Coach} />
      </Switch>
    </div>
  );
};

export default App;
