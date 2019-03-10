import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyInfo from './components/MyInfo';
import Footer from './components/Footer';
import Nav from './components/Nav';

class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <MyInfo/>
        <Footer/>
      </div>

    );
  }
}

export default App;
