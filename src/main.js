import Vue from 'vue'
import Vuex from 'vuex'
import VueI18n from 'vue-i18n';
import router from './router'
import store from './store'

import 'bootstrap'
import './assets/css/bootstrap/stylesheets/_bootstrap.scss'

Vue.use( Vuex )
Vue.use( VueI18n );

import en from './i18n/en.json'; // 存放英文翻譯
import tw from './i18n/tw.json'; // 存放繁體中文翻譯

//要在js import scss要先改Webpack conf的設定
// 告訴 Vue 使用 vuex
const locales = {
  en,
  tw,
};


// Vue.config.lang = store.state.lang; // 從 state 獲取預設語言設定。

var i18n = new VueI18n({
  locale: store.state.lang,
  messages: locales[store.state.lang]
})

Vue.config.productionTip = false
/* eslint-disable no-new */


import App from './App'

// import { router } from './router'

import './directive/directive.js';
import './filter/filter.js';
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  i18n: i18n
})


router.beforeEach((to, from, next) => {
  // 如果 router 轉跳的頁面需要驗證 requiresAuth: true
  console.log('to=', to.fullPath, '| from=', from.fullPath);
  if (to.matched.some(record => {
    console.log(record.name, record.meta.requiresAuth);
    return record.meta.requiresAuth;
  })) {
    // 如果沒有 token
    console.log('token?', store.state.token);
    if (store.state.token === '') {
      // 轉跳到 login page
      next({ path: '/login' });
    } else {
      next(); // 往下繼續執行
    }
  } else {
    next(); // 往下繼續執行
  }
});