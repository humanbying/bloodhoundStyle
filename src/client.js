import React from 'react';
import {render} from 'react-dom'
import {Router, Route,IndexRoute, browserHistory} from 'react-router'
import Title from './components/Title'
import Registration from './components/Registration'
import Home from './components/Home'
import SearchDonors from './components/SearchDonors'
import './css/style.css'


render(
  <Router history = {browserHistory}>
    <Route path = '/' component ={Title}>
      <Route path = 'registration' component ={Registration}/>
      <Route path = 'home' component ={Home}/>
      <Route path = 'searchdonors' component ={SearchDonors}/>
    
    </Route>
  </Router>,
 document.getElementById('root')
);
