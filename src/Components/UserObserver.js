import React, { useEffect } from 'react';
import { auth } from '../firebase/firebase';
// import { useObserver, useLocalStore } from 'mobx-react';
import { userStore } from '../store';

const userState = async user => {
  try {
    const token = await user.getIdToken();
    const { claims } = await user.getIdTokenResult();
    const { photoURL, email } = user;

    userStore.currentUser = { token, claims, photoURL, email };
    // console.log(userStore.currentUser.token);
    const { user_id, level } = claims;
    localStorage.setItem('__palette_user__', JSON.stringify({ user_id, level, token }));
  } catch (e) {
    // console.log(e);
  }
};

const UserObserver = () => {
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        userState(user);
      } else {
        // $currentUser = null;
        // $isLoadComplete = true;
        userStore.currentUser = null;
        localStorage.removeItem('__palette_user__');
      }
    });
  }, []);
  return <></>;
};

export default UserObserver;
