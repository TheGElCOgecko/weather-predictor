import axios from 'axios';
import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [message, setMessage] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/')
      .then(response => {
        setMessage(response.data);
      })
      .catch(err => {
        console.error('There was an error making the request!', err);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>Message: {message}</p>
        <div class="a-box">
          <h2>This is a box</h2>
          <ul class="a-list">
            <li class = "list-stuff">This</li>
            <li class = "list-stuff">is</li>
            <li class = "list-stuff">a</li>
            <li class = "list-stuff">list!!!!!! !!!!!</li>
          </ul>
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
