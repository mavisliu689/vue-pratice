import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

import HelloWorld from '@/pages/HelloWorld'
import Pratice from '@/pages/Pratice'
import Compute from '@/pages/Compute'
import learnComponent from '@/pages/learnComponent'
import count from '@/pages/count'
import todo from '@/pages/todo'
import shop from '@/pages/shop'
import open1999 from '@/pages/open1999'
import cart from '@/pages/cart';
import login from '@/pages/login';
import filter from '@/pages/demoFilter';
import App from '@/App.vue'


export default new VueRouter({
  // 使用 HTML 5 模式
  mode: 'history',
  base: __dirname,
  // routre 表
  routes: [
    {
      path: '/hello',
      name: 'hello',
      meta: { requiresAuth: true }, // 需驗證
      component: HelloWorld,

    },
    {
      path: '/pratice',
      name: 'pratice',
      meta: { requiresAuth: true }, // 需驗證
      component: Pratice
    },
    {
      path: '/compute',
      name: 'compute',
      meta: { requiresAuth: true }, // 需驗證
      component: Compute
    },
    {
      path: '/learnComponent',
      name: 'learnComponent',
      meta: { requiresAuth: true }, // 需驗證
      component: learnComponent
    },
    {
      path: '/count',
      name: 'count',
      meta: { requiresAuth: true }, // 需驗證
      component: count
    },
    {
      path: '/todo',
      name: 'todo',
      meta: { requiresAuth: true }, // 需驗證
      component: todo
    },
    {
      path: '/shop',
      name: 'shop',
      meta: { requiresAuth: false }, // 需驗證
      component: shop,
      children: [ // 將會把對應到 path 的 component 放到 shop 的 <router-view />
        {
          path: 'cart', // url= shop/cart
          component: cart,
          meta: { requiresAuth: false },
        },
        {
          path: 'todo', // url= shop/todo
          component: todo,
          meta: { requiresAuth: false },
        },
        {
          path: 'hello', // url= shop/hello
          component: HelloWorld,
          meta: { requiresAuth: false },
        },
      ],
    },
    {
      path: '/cart',
      name: 'cart',
      meta: { requiresAuth: true }, // 需驗證
      component: cart
    },
    // router 轉址
    {
      path: '/open1999',
      name: 'open1999',
      meta: { requiresAuth: true }, // 需驗證
      component: open1999
    },
    {
      path: '/login',
      name: 'login',
      meta: { requiresAuth: false }, // no需驗證
      component: login
    },
    {
      path: '/multiple',
      name: 'multiple',
      components: {
        viewLeft: shop,
        viewRight: cart,
      },
      meta: { requiresAuth: false },
    },
    {
      path: '/filter',
      name: 'filter',
      meta: { requiresAuth: false }, // no需驗證
      component: filter
    },
    { path: '/*', redirect: '/login' }
  ]
});

