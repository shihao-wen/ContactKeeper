import React, { Fragment } from 'react';
import './App.css';
import Home from './compnents/pages/Home';
import About from './compnents/pages/About';
import Navbar from './compnents/layout/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ContactStates from './context/contact/ContactStates';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';

import Register from './compnents/auth/Register';
import Login from './compnents/auth/Login';
import Alerts from './compnents/layout/Alerts';
function App() {
  return (
    <AuthState>
      <ContactStates>
        <AlertState>
          <Router>
            <Fragment className='App'>
              <Navbar />
              <div className='container'>
                <Alerts />
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/about' component={About} />
                  <Route exact path='/register' component={Register} />
                  <Route exact path='/login' component={Login} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertState>
      </ContactStates>
    </AuthState>
  );
}

export default App;
