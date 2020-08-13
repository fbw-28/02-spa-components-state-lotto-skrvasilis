import React from 'react';
import RandomNum from './RandomNum'
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>Lotto 6 / 49</h1>
      <h2>Generating lucky Numbers</h2>
      <RandomNum/>
    </div>
  );
}


export default App;