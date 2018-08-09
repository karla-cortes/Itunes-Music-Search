import React, { Component } from 'react';
import Data from './components/Data';
import './index.css';



class App extends Component {

  render() {
    return (
      <div className="App">

        <h1>SongSearch</h1>
        <h3>Welcome to SongSearch. Search for your favorite artist and we will do the rest.</h3>
        <Data />
      </div>
    );
    }
  }

export default App;
