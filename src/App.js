import React, { Component } from 'react';
import HogwartsContainer from './containers/HogwortsContainer'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <HogwartsContainer />
      </div>
    );
  }
}

export default App;
