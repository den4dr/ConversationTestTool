import Vuex from 'vuex'; // eslint-disable-line import/no-extraneous-dependencies

const store = () => new Vuex.Store({
  state: {
    authObject: {
      username: '',
      password: '',
    },
    isLogin: true,
    workSpaceList: [],
    currentWorkSpace: {},
  },
  mutations: {
    setAuthObject(state, username, password) {
      state.authObject.username = username;
      state.authObject.password = password;
      state.isLogin = true;
    },
    logout(state) {
      state.authObject.username = '';
      state.authObject.password = '';
      state.isLogin = false;
      state.workSpaceList = [];
    },
    setWorkSpaceList(state, workSpaceList) {
      state.workSpaceList = workSpaceList;
    },
    setWorkSpace(state, workSpace) {
      state.currentWorkSpace = workSpace;
    },
  },
});

export default store;
