import React, { Component } from 'react';
import Navbar from './components/nav/Navbar';
import MemphisVideo from './components/videos/MemphisVideo';
import Footer from './components/footer/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-8">
              Text going here
            </div>
            <div className="col-sm-4">
              <MemphisVideo />
            </div>
          </div>
          <hr />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
