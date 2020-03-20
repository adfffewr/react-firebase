import { auth } from '../firebase/firebase';

const { observable } = require('mobx');

const userStore = observable({
  isLoggingIn: false,
  currentUser: null,

  // logIn(data) {
  //   this.isLoggingIn = true;
  //   setTimeout(() => {
  //     this.data = data;
  //     this.isLoggingIn = false;
  //     postStore.data.push(1);
  //   }, 2000);
  // },
  logOut() {
    // this.data = null;
    const logoutClick = async () => {
      try {
        await auth.signOut();
        this.currentUser = null;
      } catch (e) {
        console.log(e);
      }
    };
    logoutClick();
  }
});

export default userStore;
