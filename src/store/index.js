import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loggedIn: false,
    user: null,
    token: null,
    url:"https://gentle-mesa-28063.herokuapp.com/api/",
     
  },
  plugins: [new VuexPersistence().plugin],
  mutations: {
    SET_user(state, payload) {
      state.user = payload;
    },
    SET_token(state, payload) {
      state.token = payload;
    },
    SET_loggedIn(state, payload) {
      state.loggedIn = payload;
    }
  },
  actions: {
    performLoginAction({ commit,state }, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(state.url+"auth/login", {
            username: payload.username,
            password: payload.password
          })
          .then(res => {
            commit("SET_token", res.data.access_token);
            commit("SET_user", res.data.user);
            commit("SET_loggedIn", true);
            console.log()
             
            resolve(res);
          })
          .catch(err => {
            reject(err);
             
          });
      });
    },
    performLogoutAction({ commit, state }) {
      return new Promise((resolve, reject) => {
        axios
          .post(state.url+"auth/logout", {
            token: state.token
          })

          .then(res => {
            commit("SET_token", null);
            
            commit("SET_loggedIn", false);
            commit("SET_user", null);
            resolve(res);
          })
          .catch(err => {
            reject(err);
          });
          commit("SET_token", null);
            
          commit("SET_loggedIn", false);
          commit("SET_user", null);
           
          
      });
    },
  },
  getters: {
    get_loggedIn(state) {
      return state.loggedIn;
    },
    get_user(state) {
      return state.user;
    },
    get_token(state) {
      return state.token;
    },
    get_url(state) {
      return state.url;
    },
     
     
  }
});
