import Vue from 'vue'
import Vuex from 'vuex'
// import { state, mutations } from './mutations.js'
import * as getters from './getters.js'
import {state, actions, mutations} from './root.js';

import count from './modules/count'
import todo from './modules/todo'
import shop from './modules/shop'
import open1999 from './modules/open1999'
Vue.use( Vuex );

export default new Vuex.Store({

    state,
    actions,
    mutations,
    getters,

    modules: {
        count,
        todo,
        shop,
        open1999
    },

    strict:true //禁止直些修改state
})