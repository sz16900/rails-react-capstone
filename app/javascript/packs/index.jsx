// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import App from '../components/App';
import { HashRouter as Router, Route } from 'react-router-dom';
import ReviewList from '../components/ReviewList';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Router>
      {/* <Route path="/" component={App} /> */}
      <Route exact path="/" component={ReviewList} />
    </Router>,
    document.body.appendChild(document.createElement('div'))
  );
});
