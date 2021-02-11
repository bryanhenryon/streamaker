const state = {
  apiRoot: process.env.VUE_APP_API_URL
};

const getters = {
  getApiRoot: state => state.apiRoot
};

export default {
  state,
  getters,
  namespaced: true
};
