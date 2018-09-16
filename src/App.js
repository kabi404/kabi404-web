import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Nav from './components/Nav';
import Content from './components/Content';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <div className="col-3 text-center bg-dark">
              <Nav/>
            </div>
            <div className="col-9">
              <Content/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
