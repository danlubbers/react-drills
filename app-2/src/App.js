import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state={
      gear: ['backpack', 'rain jacket', 'trekking pole', 'water purifier']
    }
  }


  render() {
    let gearToDisplay = this.state.gear.map((element, index) => {
      return (
        <h2 key={index}>{element}</h2>
      )
    })
    

    return (
      <div className="App">
    <p>{gearToDisplay}</p>
      </div>
    );
  }
}

export default App;
