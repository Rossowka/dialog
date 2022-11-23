import './App.css';
import React, { useState } from 'react';
import { Dialog } from './components/Dialog';
import { Button } from './components/Button';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e) => {
    setIsOpen(e => !e);
  };

  return (
    <div>
      <Button onClick={handleClick}>DELETE</Button>
      { isOpen ? <Dialog isOpen={isOpen} onClose={handleClick} /> : false }
    </div>
  );
}

export default App;
