import React, { useEffect } from 'react';
import { auth } from '../firebase/firebase';

const userState = async user => {
  try {
    const token = await user.getIdToken();
    const { claims } = await user.getIdTokenResult();
    // const { photoURL, email } = user;
    // $currentUser = { token, claims, photoURL, email };
    // console.log(token);
    const { user_id, level } = claims;
    localStorage.setItem(
      '__palette_user__',
      JSON.stringify({ user_id, level, token })
    );
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
        localStorage.removeItem('__palette_user__');
      }
    });
  }, []);
  return <></>;
};

export default UserObserver;
