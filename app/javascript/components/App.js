import React from 'react';
import 'components/FontAwesomeIcons';
import { Route, Switch } from 'react-router-dom';
import Coaches from './Coaches/Coaches';
import Coach from './Coach/Coach';
import Header from './Header';
import Appointments from './Appointments/Appointments';

const App = () => {
  return (
    <div id="wrapper" className={'flex relative'}>
      <Header />
      <Switch>
        <Route exact path="/" component={Coaches} />
        <Route exact path="/coaches/:slug" component={Coach} />
        <Route exact path="/appointments" component={Appointments} />
      </Switch>
    </div>
  );
};

export default App;
