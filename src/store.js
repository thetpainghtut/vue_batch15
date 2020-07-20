import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user : {}
  },
  mutations: {
    auth_request(state){
      state.status = 'loading'
    },
    auth_success(state, token, user){
      state.status = 'success'
      state.token = token
      state.user = user
    },
    auth_error(state){
      state.status = 'error'
    },
    logout(state){
      state.status = ''
      state.token = ''
    },
  },
  actions: {
    login({commit}, user){
      return new Promise((resolve, reject) => {
        user.grant_type = 'password'
        user.client_id = 2
        user.client_secret  = '27dEoP0zhDGnrh0ZhazboZfg8HrI5howCtqyIHxR'
        commit('auth_request')
        axios({url: 'http://ecommerce.thetpainghtut.com/oauth/token', data: user, method: 'POST' })
        .then(resp => {
          // const token = resp.data.token
          // const user = resp.data.user
          console.log(resp)
          const token = resp.data.access_token

          localStorage.setItem('token', token)
          axios.defaults.headers.common['Authorization'] = token

          axios({url: 'http://ecommerce.thetpainghtut.com/api/user',headers: { Authorization: `Bearer ${token}` } , method: 'GET'})
          .then(uresp => {
            const user = uresp.data
            console.log(user)
          })

          commit('auth_success', token, user)
          resolve(resp)
        })
        .catch(err => {
          commit('auth_error')
          localStorage.removeItem('token')
          reject(err)
        })
      })
    },
    register({commit}, user){
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios({url: 'http://ecommerce.thetpainghtut.com/api/register', data: user, method: 'POST' })
        .then(resp => {
          console.log(resp)
          const token = resp.data.access_token
          console.log(token)
          // const user = resp.data.user
          localStorage.setItem('token', token)
          axios.defaults.headers.common['Authorization'] = token
          
          axios({url: 'http://ecommerce.thetpainghtut.com/api/user',headers: { Authorization: `Bearer ${token}` } , method: 'GET'})
          .then(uresp => {
            const user = uresp.data
            console.log(user)
          })

          commit('auth_success', token, user)
          resolve(resp)
        })
        .catch(err => {
          commit('auth_error', err)
          localStorage.removeItem('token')
          reject(err)
        })
      })
    },
    logout({commit}){
      return new Promise((resolve, reject) => {
        commit('logout')
        localStorage.removeItem('token')
        delete axios.defaults.headers.common['Authorization']
        resolve()
      })
    }
  },
  getters : {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
  }
})