import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutation-types'
const {
  SET_ACTIVE_IMAGE
} = mutations

Vue.use(Vuex)

export interface stateInterface {
  activeImage?: null | string
}

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    activeImage: null
  } as stateInterface,
  mutations: {
    [SET_ACTIVE_IMAGE] (state, newImage) {
      state.activeImage = newImage
    }
  },
  actions: {
    activateImage({commit}, newImage) {
      commit(SET_ACTIVE_IMAGE, newImage)
    }
  },
  modules: {
  }
})
