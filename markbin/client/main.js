import React from 'react';
import ReactDOM from 'react-dom';
// react-router -> react-router-dom, Router -> BrowserRouter as Router in React-Router 4
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/app';
import BinsMain from './components/bins/bins_main';
import BinsList from './components/bins/bins_list';
import { Bins } from '../import/collections/bins';

// the Key idea to remember is that react router displays different sets of components based on the current url
const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="/bins" component={BinsMain} />
        </Route>
    </Router>
);

Meteor.startup(() => {
    ReactDOM.render(routes, document.querySelector('.render-target'));
});
