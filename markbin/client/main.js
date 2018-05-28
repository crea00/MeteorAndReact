import React from 'react';
import ReactDOM from 'react-dom';
// react-router -> react-router-dom
import { BrowserRouter as Router, Route, IndexRoute, browserHistory } from 'react-router-dom';

import App from './components/app';
import { Bins } from '../import/collections/bins';

// the Key idea to remember is that react router displays different sets of components based on the current url
const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
        </Route>
    </Router>
);

Meteor.startup(() => {
    ReactDOM.render(routes, document.querySelector('.render-target'));
});
