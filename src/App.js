import React, { useState, useEffect } from 'react';
import { firestore } from './firebase';
import logo from './logo.svg';
import './App.css';

function App() {
  const [lists, setLists] = useState([]);
  const data = async () => {
    try {
      const res = await firestore
        .collection('docs')
        .orderBy('createdAt', 'desc')
        .limit(20)
        .get();
      console.log(res);
      setLists(res.docs.map(e => e.data()));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    // console.log(firebase.firestore())
    data();
  }, []);
  console.log(lists);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
