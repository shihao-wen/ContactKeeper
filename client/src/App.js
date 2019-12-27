import React, { Fragment } from 'react';
import './App.css';
import Home from './compnents/pages/Home';
import About from './compnents/pages/About';
import Navbar from './compnents/layout/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Fragment className='App'>
        <Navbar />
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
          </Switch>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
