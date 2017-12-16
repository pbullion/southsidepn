import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router'

import Home from './home';
import App from './App';
import LandingPage from './components/landing_page';
import Visitors from './components/visitors';
import WeBelieve from './components/we_believe';



//Imports specific to Dashboard



import './index.css';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Home}>
       <IndexRoute component={LandingPage}/>
       <Route path='visitors' component={Visitors}/>
       <Route path='webelieve' component={WeBelieve}/>
    </Route>
</Router>,
  document.getElementById('root')
);
