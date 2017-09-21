import Vuex from 'vuex'; // eslint-disable-line import/no-extraneous-dependencies

const store = () => new Vuex.Store({

  state: {
    counter: 0,
  },
  mutations: {
    increment(state) {
      state.counter += 1; // eslint-disable-line no-param-reassign
    },
  },
});

export default store;
