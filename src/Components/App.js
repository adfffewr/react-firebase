import React, { useState, useEffect } from 'react';
import GlobalStyles from './GlobalStyles';
import Router from './Router';
import { firestore } from '../firebase/firebase';
// import logo from './logo.svg';

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
    <>
      <GlobalStyles />
      <Router />
    </>
  );
}

export default App;
