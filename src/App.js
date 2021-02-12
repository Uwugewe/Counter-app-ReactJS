import React from 'react';
import './App.css';
import Counter from './Counter';
import ChangeColor from './ChangeColor';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='App-title'>Counter App in ReactJS</h1>
      </header>
      <Counter initValue={0}/>
      <ChangeColor />
    </div>
  );
}

export default App;
