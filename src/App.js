import React, { Component } from 'react';
import Parent from './Component/ParentComponent/Parent'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App"> 
      <Parent />
      </div>
    );
  }
}

export default App;
