import React, { Component } from 'react';
import Todo from './Todo'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Do Some Things</h2>
        </div>

        <Todo />
      </div>
    );
  }
}

export default App;
