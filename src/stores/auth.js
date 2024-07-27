import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    loggedIn: false,
  }),
  getters: {
    isLoggedIn: (state) => state.loggedIn,
  },
  actions: {
    doLogIn() {
      this.loggedIn = true;
    },
    doLogOut() {
      this.loggedIn = false;
    },
  },
});
