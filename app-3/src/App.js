import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state={
      filterString: [],
      gear: ['backpack', 'rain jacket', 'trekking pole', 'water purifier']
    }
  }

  handleChange(val) {
    this.setState({filterString: val})
  }

  render() {
    let gearToDisplay = this.state.gear.filter((e, i)=>{
      return e.includes( this.state.filterString);
    }).map((e, i)=>{
      return <h2 key={i}>{e}</h2>
    })
    return (
      <div className="App">
      <input onChange={(e)=>this.handleChange(e.target.value)}/>
      <h2>{gearToDisplay}</h2>
      </div>
    );
  }
}

export default App;
