const state = {
  playingSong: null,
  songVolume: 0.5,
  sliderValue: 0,
  counterInterval: null
};

const getters = {
  getPlayingSong: state => state.playingSong,
  getSongVolume: state => state.songVolume,
  getSliderValue: state => state.sliderValue
};

const mutations = {
  playingSong: (state, playingSong) => (state.playingSong = playingSong),
  setSongVolume: (state, volume) => (state.songVolume = volume),
  startCounter: state => {
    state.counterInterval = setInterval(() => {
      state.sliderValue++;
    }, 1000);
  },
  stopCounter: state => {
    clearInterval(state.counterInterval);
  },
  resetCounter: state => {
    state.sliderValue = 0;
    clearInterval(state.counterInterval);
  },
  changeDuration: (state, payload) => {
    state.sliderValue = payload;
  }
};

const actions = {
  playingSong: ({ commit }, playingSong) => commit("playingSong", playingSong),
  setSongVolume: ({ commit }, volume) => commit("setSongVolume", volume),
  startCounter: ({ commit }) => commit("startCounter"),
  stopCounter: ({ commit }) => commit("stopCounter"),
  resetCounter: ({ commit }) => commit("resetCounter"),
  changeDuration: ({ commit }, payload) => commit("changeDuration", payload)
};

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced: true
};
