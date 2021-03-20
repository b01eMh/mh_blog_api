import axios from 'axios'
import { createStore } from 'vuex'

const store = createStore({
  state(){
    return {
      authenticated: false,
      user: null
    }
  },
  getters: {
    authenticated(state){
      return state.authenticated
    },
    user(state){
      return state.user
    }
  },
  mutations: {
    setAuthenticated(state, payload) {
      state.authenticated = payload
    },
    setUser(state, payload) {
      state.user = payload
    }
  },
  actions: {
    async loginUser( {dispatch}, payload ){
      try {
        
        await axios.get('/sanctum/csrf-cookie')
          const res = await axios.post('/api/authenticate', payload)

          if (res.data.status_code != 200) {
            throw res.message
          }
          // correct creden.
          return dispatch('getUser')
              
      } catch (e) {
        throw 'User can not be authenticated!'
      }
    },

    async getUser({commit}){
      await axios.get('/api/user')
      .then(res => {
        commit('setAuthenticated', true)
        commit('setUser', res.data)
      })
      .catch( () => {
        commit('setAuthenticated', false)
        commit('setUser', null)
      })
    },

    async logout( {commit} ){
      await axios.post('/api/logout')
        .then( res => {
          commit('setAuthenticated', false)
          commit('setUser', null)
        })
        .catch(() => {
          commit('setAuthenticated', false)
          commit('setUser', null)
        })
    }

  }
})

export default store