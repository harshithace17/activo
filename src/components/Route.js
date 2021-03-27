import React from 'react';
import { hot } from 'react-hot-loader/root';
import {createBrowserHistory} from 'history';
import {Router, Route, useRouteMatch} from 'react-router-dom';

import Dashboard from '../views/Dashboard';
import App from '../views/app';
import Blog from '../views/BlogFullContent';
import About from '../views/About';


function Routes(){
    const hist = createBrowserHistory();
    return(
        <Router history={hist}>
             <Route exact path="/" component={Dashboard} />
              <Route path='/app' component={App} />
              <Route exact path="/blog" component={ Dashboard} />
              <Route exact path="/blog/:id" component={Blog} />
              <Route path="/about" component={About} />
         </Router>
    )
}

export default hot(Routes);