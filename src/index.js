import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router'

import Home from './home';
import App from './App';
import LandingPage from './components/landing_page';
import Visitors from './components/visitors';
import WeBelieve from './components/we_believe';
import Contact from './components/contact';
import Staff from './components/staff';
import Calendar from './components/calendar';



//Imports specific to Dashboard



import './index.css';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Home}>
       <IndexRoute component={LandingPage}/>
       <Route path='visitors' component={Visitors}/>
       <Route path='webelieve' component={WeBelieve}/>
       <Route path='contact' component={Contact}/>
       <Route path='staff' component={Staff}/>
       <Route path='calendar' component={Calendar}/>
    </Route>
</Router>,
  document.getElementById('root')
);
