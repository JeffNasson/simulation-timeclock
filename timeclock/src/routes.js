import React,{Component} from 'react';
import {Route,Link,Switch} from 'react-router-dom';

import Home from './Components/Home/Home.js';
import EditPunch from './Components/EditPunch/EditPunch.js';
import NewPunch from './Components/NewPunch/NewPunch.js';


export default(
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/edit' component={EditPunch} />
        <Route path='/new' component={NewPunch} />
    </Switch>
)