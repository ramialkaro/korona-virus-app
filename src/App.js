import React, { useState, useEffect } from 'react';
import './App.css';
import Stats from './components/Stats'
import CountrySelector from './components/CountrySelector'


function App() {

  const [timer, setTimer] = useState( new Date(Date.now()).toLocaleString())
  setTimeout(()=>{
    setTimer(new Date(Date.now()).toLocaleString())
  },1000)
  useEffect(()=>{
      setTimer(new Date(Date.now()).toLocaleString())
  },[timer])

  return (
    <div className="container">
      <div className="display-4 bg-dark text-info m-3 p-3 rounded"><strong className="text-white">Time:</strong> {timer}</div>
      
      <div className="mt-5 mb-5">
        <h2>All world:</h2>
        <Stats url="https://covid19.mathdro.id/api" />
      </div>
      <CountrySelector />
    </div>
  );
}

export default App;
