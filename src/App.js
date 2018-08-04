import React, { Component } from 'react';
import './App.css';
import Home from './component/home/Home';
import Header from './inc/Header'
import './assets/css/bootstrap.css';
import './assets/css/mdb.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
      </div>
    );
  }
}
export default App;
