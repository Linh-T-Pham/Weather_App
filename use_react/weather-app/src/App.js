import React from 'react';
import logo from './logo.svg';
import './App.css';
import Weather from './components/weather';
import weather from 'weather-gov-api';



// api call 

function App() {
  return (
    <div className="App">
      <Weather/>
    </div>
  );
};

export default App;
