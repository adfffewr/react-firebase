import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { firestore } from '../firebase/firebase';

import PostList from '../Components/home/PostList';

const Container = styled.div`
  display: block;
  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 2rem;
  }
`;

const HomeContainer = () => {
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
  // console.log(lists);

  return (
    <Container>
      <h1>Home</h1>
      <ol>
        <PostList lists={lists} />
      </ol>
    </Container>
  );
};

export default HomeContainer;
