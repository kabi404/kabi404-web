import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Nav from './components/Nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row justify-content-end">
            <div className="col-3 text-center bg-dark fixed-top navigation">
                <Nav/>
            </div>
            <div className="col-9 text-center">
              <h2 className="my-5">Contenido</h2>
              <h2 className="my-5">Contenido</h2>
              <h2 className="my-5">Contenido</h2>
              <h2 className="my-5">Contenido</h2>
              <h2 className="my-5">Contenido</h2>
              <h2 className="my-5">Contenido</h2>
              <h2 className="my-5">Contenido</h2>
              <h2 className="my-5">Contenido</h2>


            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
