import React, { Component } from 'react';
import './App.css';
import Image from './Image.js';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h2>Steamboat</h2>
      <Image myImage={'https://github.com/danlubbers/danlubbers.com/blob/gh-pages/img/scenic/danlubbers-scenic-portfolio-1.jpg?raw=true'} />

     </div>
    );
  }
}

export default App;
