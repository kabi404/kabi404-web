import React, { Component } from 'react';
import './App.css';

import Nav from './components/nav/Nav';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';


class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-sm-2 text-center bg-dark">   
              <Nav/>
            </div>
            <div className="col-10">
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
