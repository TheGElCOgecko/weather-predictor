import React, { useEffect, useState } from 'react';
import styles from './index.module.css'; // Import CSS Module

import axios from 'axios';
import Map from './Map';
import logo from './logo.svg';

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
    <div className={styles.App}>
      <header className={styles['App-header']}>
        <p>Message: {message}</p>
        <div id="map">
          <Map />
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className={styles['App-link']}
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
