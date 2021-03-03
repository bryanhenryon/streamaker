import { createStore } from "vuex";
import global from "./modules/global";
import signUpModal from "./modules/signUpModal";
import signInModal from "./modules/signInModal";
import prodsList from "./modules/prodsList";
import navbar from "./modules/navbar";
import player from "./modules/player";
export default createStore({
  state: {
    jwt: localStorage.getItem("jwt"),
    user: JSON.parse(localStorage.getItem("user")),
    successfulTransaction: false,
    purchasedSong: null
  },
  getters: {
    getSuccessfulTransaction: state => state.successfulTransaction,
    getPurchasedSong: state => state.purchasedSong
  },
  mutations: {
    setToken: (state, token) => (state.jwt = token),
    setUser: (state, user) => (state.user = user),
    setSuccessfulTransaction: (state, payload) =>
      (state.successfulTransaction = payload),
    setPurchasedSong: (state, payload) => (state.purchasedSong = payload)
  },
  actions: {
    setToken: ({ commit }, token) => commit("setToken", token),
    setUser: ({ commit }, user) => commit("setUser", user),
    setSuccessfulTransaction: ({ commit }, payload) =>
      commit("setSuccessfulTransaction", payload),
    setPurchasedSong: ({ commit }, payload) =>
      commit("setPurchasedSong", payload)
  },
  modules: {
    global,
    signUpModal,
    signInModal,
    prodsList,
    navbar,
    player
  }
});
