import React, { useState } from 'react';
import './App.scss';
import Dashboard from './modules/dashboard/Dashboard'


function App () {

  const [count, setCount] = useState(0);
    
  return (
    <div id="App">
      <Dashboard/>
      <div>Count: {count}</div>
      <button onClick={() => {
        setCount(count + 1)
      }}>
        Increase Count
      </button>
    </div>
  );
}

export default App;
