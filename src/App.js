import React, { Component } from 'react';
import Data from './components/Data';
import './index.css';



class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Welcome to Song Search</h1>
        <h3>Search for your favorite artist and we give you our recommendations</h3>
        <Data />
      </div>
    );
    }
  }

export default App;
