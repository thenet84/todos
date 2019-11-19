import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import { Header } from './components/layout/Header';
import { About } from './components/pages/About';
import { Home } from './components/pages/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Header />
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
