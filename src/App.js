import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Map from './Map'
import logo from './logo.svg';
import './App.css';

function App() {
  const apiKey = process.env.REACT_APP_API_KEY_TEST; // not real api key
  const [message, setMessage] = useState(null);
  console.log(apiKey);

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
        <div id="map">
          <Map/>
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
