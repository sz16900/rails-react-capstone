import React from 'react';
import { Provider } from 'react-redux';

import 'components/FontAwesomeIcons';
import { Route, Switch } from 'react-router-dom';
import Coaches from './Coaches/Coaches';
import Coach from './Coach/Coach';
import Header from './Header';
import Appointments from './Appointments/Appointments';
import configureStore from '../redux/configureStore';

const store = configureStore();

const App = () => (
  <div id="wrapper" className="flex relative">
    <Provider store={store}>
      <Header />
      <Switch>
        <Route exact path="/" component={Coaches} />
        <Route exact path="/coaches/:slug" component={Coach} />
        <Route exact path="/appointments" component={Appointments} />
      </Switch>
    </Provider>
  </div>
);

export default App;
