
import './App.css';

import React, { Component } from 'react'
import Navbar from './compnent/Navbar';
import News from './compnent/News'

export default class App extends Component {
 
  render() {
    return (
      <div>
       <Navbar/>
       <News/>
      </div>
    )
  }
}

