import { getField, updateField } from "vuex-map-fields";

const state = {
  username: null,
  password: null,
  errorMessage: null
};

const getters = {
  getErrorMessage: state => state.errorMessage,
  getField
};

const mutations = {
  resetForm(state) {
    (state.username = null),
      (state.password = null),
      (state.errorMessage = null);
  },
  setErrorMessage: (state, payload) => (state.errorMessage = payload),
  updateField
};

const actions = {
  resetForm: ({ commit }) => commit("resetForm"),
  setErrorMessage: ({ commit }, payload) => commit("setErrorMessage", payload)
};

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced: true
};
