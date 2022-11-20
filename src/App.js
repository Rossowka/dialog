import './App.css';
import React, { useState } from 'react';
import { Dialog } from './components/Dialog';


function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e) => {
    setIsOpen(e => !e);
  };

  return (
    <div>
      <button onClick={handleClick}>DELETE</button>
      {isOpen ? <Dialog isOpen={isOpen} onClose={handleClick} /> : console.log(false) }
    </div>
  );
}

export default App;
