import React, { Component } from 'react';
import './App.css';

import Nav from './components/Nav';
import Content from './components/Content';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-3 text-center bg-dark">   
              <Nav/>
            </div>
            <div className="col-9">
              <Content/>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
