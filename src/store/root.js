import * as types from './mutations_type.js';
import Vue from 'vue';



export const state = {
  loading: false,
  token: '',
  lang: 'en',
}

export const actions = {
  toggleLoading ({ commit }, isLoading) {
    commit(types.LOADING, isLoading);
  },

  actionLogin ({ commit }, { email, password}) {
    console.log('1. action:ogin');
    commit(types.LOADING, true);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === "mavisliu@cloudybay.com.tw" && password === '123456') {
          console.log("2. Promise resoleve");
          commit(types.LOADING, false);
          commit(types.TOKEN, '3345678'); // success 儲存 token
          resolve();
        }
        else {
          commit (types.LOADING, false);
          reject();
        }
      }, 1500);
      });
    },
    setLanguage ({ commit }, lang) {
      commit(types.LANGUAGE, lang);
    },
}


export const mutations = {
  [types.LOADING] (state, isLoading) {
    state.loading = isLoading;
  },
  [types.TOKEN] (state, token) {
    state.token = token;
  },
  [types.LANGUAGE] (state, setlang) {
    state.lang = setlang;
    // 設定 Vue config 將會改變使用的語系
    Vue.config.lang = state.lang;
  },
}
