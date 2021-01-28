import { createStore } from "vuex";
import signUpModal from "./modules/signUpModal";

export default createStore({
  state: {
    jwt: localStorage.getItem("jwt"),
    user: JSON.parse(localStorage.getItem("user"))
  },
  mutations: {
    setToken: (state, token) => (state.jwt = token),
    setUser: (state, user) => (state.user = user)
  },
  actions: {
    setToken: ({ commit }, token) => commit("setToken", token),
    setUser: ({ commit }, user) => commit("setUser", user)
  },
  modules: {
    signUpModal
  }
});
