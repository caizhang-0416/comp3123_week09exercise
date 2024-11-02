import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [info, setInfo] = useState({
    message: "Welcome to Fullstack Development! React JS Programming Week09 Lab exercise",
    author: "Cai Zhang, ID: 101464891",
    college: "George Brown College, Toronto"
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>{info.message}</p>
        <p>Created by: {info.author}</p>
        <p>Institution: {info.college}</p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
