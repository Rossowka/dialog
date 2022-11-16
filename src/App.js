import './App.css';
import React, { useState } from 'react';
import { Dialog } from './components/Dialog';


function App() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (e) => {
    setIsActive(e => !e);
  };

  return (
    <div>
      <button onClick={handleClick}>DELETE</button>
      {isActive ? <Dialog /> : console.log(false) }
    </div>
  );
}

export default App;
