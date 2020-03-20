import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { firestore } from '../firebase/firebase';
import { userStore } from '../store';
import { useObserver } from 'mobx-react';
import PostList from '../components/home/PostList';
import LoggedIn from '../components/common/LoggedIn';

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
      // console.log(res);
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

  return useObserver(() => (
    <Container>
      {userStore.currentUser && userStore.currentUser.level === 0 && (
        <LoggedIn />
      )}
      <h1>Home</h1>
      <ol>
        <PostList lists={lists} />
      </ol>
    </Container>
  ));
};

export default HomeContainer;
