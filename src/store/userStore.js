const { observable } = require('mobx');

const userStore = observable({
  isLoggingIn: false,
  currentUser: null,
  token: null,
  level: null,
  photoURL: null,
  email: null

  // logIn(data) {
  //   this.isLoggingIn = true;
  //   setTimeout(() => {
  //     this.data = data;
  //     this.isLoggingIn = false;
  //     postStore.data.push(1);
  //   }, 2000);
  // },
  // logOut() {
  //   this.data = null;
  // }
});

export default userStore;
