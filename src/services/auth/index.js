const auth = {
  isAuthenticated: true,
  authenticate() {
    this.isAuthenticated = true;
  },
  signout() {
    this.isAuthenticated = false;
  }
};

export default auth;