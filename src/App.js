import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import './App.css';

function App() {
  const [title, setTitle] = useState("");

  useEffect(() => {
    setTitle(()=>'事件代办')
  }, [])
  
  return (
    <div className="App">
      <Header title={title} />
    </div>
  );
}

export default App;
