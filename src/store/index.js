import { createStore } from 'vuex'

export default createStore({
  state: {
    projectModal: null,
  },
  mutations: {
    TOGGLE_PROJECT(state) {
      state.projectModal = !state.projectModal;
    }
  },
  actions: {
  },
  modules: {
  }
})
