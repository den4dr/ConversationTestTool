import Vuex from 'vuex'; // eslint-disable-line import/no-extraneous-dependencies

const store = () => new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    authObject: {
      username: '',
      password: '',
      area: '',
    },
    isLogin: true,
    workSpaceList: [
      {
        name: 'Pizza app',
        created: '2015-12-06T23:53:59.153Z',
        language: 'en',
        metadata: {},
        updated: '2015-12-06T23:53:59.153Z',
        description: 'Pizza app',
        workspace_id: 'pizza_app-e0f3',
        learning_opt_out: false,
      },
      {
        name: 'Pizza app2',
        created: '2015-12-06T23:53:59.153Z',
        language: 'en',
        metadata: {},
        updated: '2015-12-06T23:53:59.153Z',
        description: 'Pizza app2',
        workspace_id: 'pizza_app-e0f6',
        learning_opt_out: false,
      },
      {
        name: 'Pizza app3',
        created: '2015-12-06T23:53:59.153Z',
        language: 'en',
        metadata: {},
        updated: '2015-12-06T23:53:59.153Z',
        description: 'Pizza app4',
        workspace_id: 'pizza_app-e0f9',
        learning_opt_out: false,
      },
    ],
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
