
import { useState } from 'react'
import './App.css'
import './index.css'


// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import TrainerDashboard from './TrainerDashboard';
import TraineeDashboard from './TraineeDashboard';
import Login from './Login';
import Signup from './Signup';
import AddWorkout from './Workouts'

const App = () => {
  return (
    <Router>
      <Switch>
    
        <Route exact path="/home" component={Home} />
        <Route path="/Signup" component={Signup} />
        <Route path="/Login" component={Login} />
        <Route path="/workouts" component={AddWorkout}/>
        <Route path="/trainer-dashboard" component={TrainerDashboard} />
        <Route path="/trainee-dashboard" component={TraineeDashboard} />
      </Switch>
    </Router>
  );
};

export default App;
