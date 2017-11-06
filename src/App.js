import React, { Component } from 'react';
import './App.css';
import List from './List'

class App extends Component {

  render() {

    return (
      <div className="App">
        <List name="list1" />
        <List name="list2" />
      </div>
    );
  }
}

export default App;
