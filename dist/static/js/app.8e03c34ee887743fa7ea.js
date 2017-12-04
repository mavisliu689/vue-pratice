webpackJsonp([0],{

/***/ "A+cO":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "BcEq":
/***/ (function(module, exports) {



/***/ }),

/***/ "F+UM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/pages/Compute.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Compute = ({
  data() {
    return {
      userInput: 0,
      // 增加此變數紀錄目前是什麼模式。
      isCelsius: false
    };
  },
  computed: {
    fahrenheit() {
      return this.userInput * 9 / 5 + 32;
    },
    celsius() {
      return (this.userInput - 32) * 5 / 9;
    },
    toggleTemperature() {
      return this.isCelsius ? "攝氏 轉換 華氏" : "華氏 轉換 攝氏";
    }
  },
  methods: {
    temperatureConversio(val) {
      // val 是從 click 傳進來的 userInput 這是示範 function 傳值。
      // 如果不傳值，直接使用 this.userInput 也可以。
      // alert 的內容直接使用 computed 已經幫我計算好的結果。
      if (this.isCelsius) {
        alert('攝氏: ' + this.celsius);
      } else {
        alert('華氏: ' + this.fahrenheit);
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-63aa9020","hasScoped":true,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/pages/Compute.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_c('h1',[_vm._v("Temperature Conversion")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.isCelsius),expression:"isCelsius"}],attrs:{"id":"toggleTemperature","type":"checkbox"},domProps:{"checked":Array.isArray(_vm.isCelsius)?_vm._i(_vm.isCelsius,null)>-1:(_vm.isCelsius)},on:{"change":function($event){var $$a=_vm.isCelsius,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.isCelsius=$$a.concat([$$v]))}else{$$i>-1&&(_vm.isCelsius=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.isCelsius=$$c}}}}),_vm._v(" "),_c('label',{attrs:{"for":"toggleTemperature"}},[_vm._v("切換："+_vm._s(_vm.toggleTemperature))]),_vm._v(" "),(_vm.isCelsius)?_c('h2',[_vm._v("攝氏："+_vm._s(_vm.celsius)+" °C")]):_vm._e(),_vm._v(" "),(!_vm.isCelsius)?_c('h2',[_vm._v("華氏："+_vm._s(_vm.fahrenheit)+" °F")]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"celsius"},[_c('span',{directives:[{name:"show",rawName:"v-show",value:(!_vm.isCelsius),expression:"!isCelsius"}]},[_vm._v("攝氏：")]),_vm._v(" "),_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.isCelsius),expression:"isCelsius"}]},[_vm._v("華氏：")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.userInput),expression:"userInput"}],attrs:{"type":"number"},domProps:{"value":(_vm.userInput)},on:{"input":function($event){if($event.target.composing){ return; }_vm.userInput=$event.target.value}}}),_vm._v(" °C\n  ")]),_vm._v(" "),_c('button',{on:{"click":function($event){_vm.temperatureConversio( _vm.userInput );}}},[_vm._v("\n    Temperature Conversio\n  ")])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var pages_Compute = (esExports);
// CONCATENATED MODULE: ./src/pages/Compute.vue
function injectStyle (ssrContext) {
  __webpack_require__("I3pi")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-63aa9020"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  Compute,
  pages_Compute,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_pages_Compute = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "HJuh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-0a4f7c33","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/navbar.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{staticClass:"nabar nabar-inverse navbar-top"},[_c('div',{staticClass:"container"},[_vm._m(0,false,false),_vm._v(" "),_c('div',{staticClass:"navbar-collapse collapse",attrs:{"id":"navbar"}},[_c('form',{staticClass:"nabar-form navbar-left"},[_vm._t("right"),_vm._v(" "),_vm._t("left")],2)])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"navbar-header"},[_c('button',{staticClass:"navbar-toggle collapsed",attrs:{"type":"button","data-toggle":"collapse","data-target":"#navbar","aria-expanded":"false","aria-controls":"navbars"}},[_c('span',{staticClass:"sr-only"},[_vm._v("????")]),_vm._v(" "),_c('span',{staticClass:"icon-bar"}),_vm._v(" "),_c('span',{staticClass:"icon-bar"})])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var navbar = (esExports);
// CONCATENATED MODULE: ./src/components/navbar.vue
var normalizeComponent = __webpack_require__("VU/8")
/* script */
var __vue_script__ = null
/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  navbar,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var components_navbar = (Component.exports);

// EXTERNAL MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/jumbotron.vue
var jumbotron = __webpack_require__("ZkY0");
var jumbotron_default = /*#__PURE__*/__webpack_require__.n(jumbotron);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-6dbcfad3","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/jumbotron.vue
var jumbotron_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0,false,false)}
var jumbotron_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"jumbotron"},[_c('div',{staticClass:"container"},[_c('h1',[_vm._v("Hello, world!")]),_vm._v(" "),_c('p',[_vm._v("This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.")]),_vm._v(" "),_c('p',[_c('a',{staticClass:"btn btn-primary btn-lg",attrs:{"href":"#","role":"button"}},[_vm._v("Learn more »")])])])])}]
var jumbotron_esExports = { render: jumbotron_render, staticRenderFns: jumbotron_staticRenderFns }
/* harmony default export */ var components_jumbotron = (jumbotron_esExports);
// CONCATENATED MODULE: ./src/components/jumbotron.vue
function injectStyle (ssrContext) {
  __webpack_require__("rXZA")
}
var jumbotron_normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var jumbotron___vue_template_functional__ = false
/* styles */
var jumbotron___vue_styles__ = injectStyle
/* scopeId */
var jumbotron___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var jumbotron___vue_module_identifier__ = null
var jumbotron_Component = jumbotron_normalizeComponent(
  jumbotron_default.a,
  components_jumbotron,
  jumbotron___vue_template_functional__,
  jumbotron___vue_styles__,
  jumbotron___vue_scopeId__,
  jumbotron___vue_module_identifier__
)

/* harmony default export */ var src_components_jumbotron = (jumbotron_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/container.vue
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var container = ({
  // vue option 當中有 props 開發區域
  props: {
    // attribute name: Type
    list: Array
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-0baf88b7","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/container.vue
var container_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',_vm._l((_vm.list),function(item){return _c('div',{staticClass:"col-md-4"},[_c('h2',[_vm._v(_vm._s(item.title))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(item.info))]),_vm._v(" "),_c('p',[_c('a',{staticClass:"btn btn-default",attrs:{"href":"#","role":"button"}},[_vm._v(_vm._s(item.btntext))])])])}))}
var container_staticRenderFns = []
var container_esExports = { render: container_render, staticRenderFns: container_staticRenderFns }
/* harmony default export */ var components_container = (container_esExports);
// CONCATENATED MODULE: ./src/components/container.vue
var container_normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var container___vue_template_functional__ = false
/* styles */
var container___vue_styles__ = null
/* scopeId */
var container___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var container___vue_module_identifier__ = null
var container_Component = container_normalizeComponent(
  container,
  components_container,
  container___vue_template_functional__,
  container___vue_styles__,
  container___vue_scopeId__,
  container___vue_module_identifier__
)

/* harmony default export */ var src_components_container = (container_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/pages/learnComponent.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var learnComponent = ({
  components: {
    NavBar: components_navbar,
    Jumbotron: src_components_jumbotron,
    Container: src_components_container
  },
  data() {
    return {
      list: [{
        title: 'Heading',
        info: 'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. ',
        btntext: 'View details »'
      }, {
        title: 'Heading',
        info: 'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. ',
        btntext: 'View details »'
      }, {
        title: 'Heading',
        info: 'Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
        btntext: 'View details »'
      }]
    };
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-0f4781b5","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/pages/learnComponent.vue
var learnComponent_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"jumbotron"}},[_c('nav-bar',[_c('div',{attrs:{"slot":"left"},slot:"left"},[_c('div',{staticClass:"form-group"},[_c('input',{staticClass:"form-control",attrs:{"type":"text","placeholder":"Email"}})]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('input',{staticClass:"form-control",attrs:{"type":"password","placeholder":"Password"}})]),_vm._v(" "),_c('button',{staticClass:"btn btn-success",attrs:{"type":"submit"}},[_vm._v("Sign in")])])]),_vm._v(" "),_c('jumbotron'),_vm._v(" "),_c('container',{attrs:{"list":_vm.list}})],1)}
var learnComponent_staticRenderFns = []
var learnComponent_esExports = { render: learnComponent_render, staticRenderFns: learnComponent_staticRenderFns }
/* harmony default export */ var pages_learnComponent = (learnComponent_esExports);
// CONCATENATED MODULE: ./src/pages/learnComponent.vue
function learnComponent_injectStyle (ssrContext) {
  __webpack_require__("SZfz")
}
var learnComponent_normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var learnComponent___vue_template_functional__ = false
/* styles */
var learnComponent___vue_styles__ = learnComponent_injectStyle
/* scopeId */
var learnComponent___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var learnComponent___vue_module_identifier__ = null
var learnComponent_Component = learnComponent_normalizeComponent(
  learnComponent,
  pages_learnComponent,
  learnComponent___vue_template_functional__,
  learnComponent___vue_styles__,
  learnComponent___vue_scopeId__,
  learnComponent___vue_module_identifier__
)

/* harmony default export */ var src_pages_learnComponent = __webpack_exports__["a"] = (learnComponent_Component.exports);


/***/ }),

/***/ "I3pi":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "M93x":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/App.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var App = ({
  name: 'app'
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-565e16dc","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/App.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('nav',{staticClass:"navbar navbar-default "},[_c('div',{staticClass:"container-fluid"},[_c('div',{staticClass:"navbar-header"}),_vm._v(" "),_c('div',{staticClass:"collapse navbar-collapse",attrs:{"id":"bs-example-navbar-collapse-1"}},[_c('ul',{staticClass:"nav navbar-nav"},[_c('li',[_c('router-link',{attrs:{"to":{path: '/hello'}}},[_vm._v("嗨嗨")])],1),_vm._v(" "),_c('li',[_c('router-link',{attrs:{"to":{path: 'pratice'}}},[_vm._v("練習一下")])],1),_vm._v(" "),_c('li',[_c('router-link',{attrs:{"to":{path: 'compute'}}},[_vm._v("溫度轉換")])],1),_vm._v(" "),_c('li',[_c('router-link',{attrs:{"to":{path: 'learnComponent'}}},[_vm._v("使用component")])],1),_vm._v(" "),_c('li',[_c('router-link',{attrs:{"to":{path: 'count'}}},[_vm._v("來加減")])],1)])])])]),_vm._v(" "),_c('router-view'),_vm._v(" "),_c('div',{staticClass:"row"},[_c('router-view',{staticClass:"col-md-6 viewLeft",attrs:{"name":"viewLeft"}}),_vm._v(" "),_c('router-view',{staticClass:"col-md-6 viewRight",attrs:{"name":"viewRight"}})],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_src_App = (esExports);
// CONCATENATED MODULE: ./src/App.vue
function injectStyle (ssrContext) {
  __webpack_require__("dOx+")
  __webpack_require__("qRur")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  App,
  selectortype_template_index_0_src_App,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_App = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "NHnr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var getters_namespaceObject = {};
__webpack_require__.d(getters_namespaceObject, "getCount", function() { return getCount; });
var actions_namespaceObject = {};
__webpack_require__.d(actions_namespaceObject, "actionIcrease", function() { return actionIcrease; });
__webpack_require__.d(actions_namespaceObject, "actionDecrease", function() { return actionDecrease; });

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm.js
var vue_esm = __webpack_require__("7+uW");

// EXTERNAL MODULE: ./src/App.vue + 2 modules
var App = __webpack_require__("M93x");

// EXTERNAL MODULE: ./src/router/index.js
var router = __webpack_require__("YaEn");

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("NYxO");

// EXTERNAL MODULE: ./src/assets/css/bootstrap/stylesheets/_bootstrap.scss
var _bootstrap = __webpack_require__("dNJ4");
var _bootstrap_default = /*#__PURE__*/__webpack_require__.n(_bootstrap);

// EXTERNAL MODULE: ./src/store/mutations.js
var mutations = __webpack_require__("ukYY");
var mutations_default = /*#__PURE__*/__webpack_require__.n(mutations);

// CONCATENATED MODULE: ./src/store/getters.js
const getCount = state => {
  return state.count;
};
// EXTERNAL MODULE: ./src/store/mutations_type.js
var mutations_type = __webpack_require__("BcEq");
var mutations_type_default = /*#__PURE__*/__webpack_require__.n(mutations_type);

// CONCATENATED MODULE: ./src/store/actions.js




const actionIcrease = ({ commit }) => {
    console.log('actionIncrease');
    commit(type.INCRESASE);
};

const actionDecrease = ({ commit }) => {
    console.log('actionDecrease');
    commit(type.DECREASE);
};
// CONCATENATED MODULE: ./src/store/index.js






vue_esm["a" /* default */].use(vuex_esm["a" /* default */]);

/* harmony default export */ var store = (new vuex_esm["a" /* default */].Store({
    state: mutations["state"],
    mutations: mutations["mutations"],
    getters: getters_namespaceObject,
    actions: actions_namespaceObject,

    strict: true //禁止直些修改state
}));
// CONCATENATED MODULE: ./src/main.js
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.







//要在js import scss要先改Webpack conf的設定
// 告訴 Vue 使用 vuex
vue_esm["a" /* default */].use(vuex_esm["a" /* default */]);
vue_esm["a" /* default */].config.productionTip = false;

/* eslint-disable no-new */
new vue_esm["a" /* default */]({
  el: '#app',
  router: router["a" /* default */],
  store: store,
  template: '<App/>',
  components: { App: App["a" /* default */] }
});

/***/ }),

/***/ "SZfz":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "U1uR":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "YaEn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__("/ocq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_HelloWorld__ = __webpack_require__("sK4E");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_Pratice__ = __webpack_require__("idmT");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_Compute__ = __webpack_require__("F+UM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_learnComponent__ = __webpack_require__("HJuh");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_count__ = __webpack_require__("quk+");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__App_vue__ = __webpack_require__("M93x");



__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);








/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  // 使用 HTML 5 模式
  mode: 'history',
  base: __dirname,
  // routre 表
  routes: [{
    path: '/hello',
    name: 'hello',
    component: __WEBPACK_IMPORTED_MODULE_2__pages_HelloWorld__["a" /* default */]
  }, {
    path: '/pratice',
    name: 'pratice',
    component: __WEBPACK_IMPORTED_MODULE_3__pages_Pratice__["a" /* default */]
  }, {
    path: '/compute',
    name: 'compute',
    component: __WEBPACK_IMPORTED_MODULE_4__pages_Compute__["a" /* default */]
  }, {
    path: '/learnComponent',
    name: 'learnComponent',
    component: __WEBPACK_IMPORTED_MODULE_5__pages_learnComponent__["a" /* default */]
  }, {
    path: '/count',
    name: 'count',
    component: __WEBPACK_IMPORTED_MODULE_6__pages_count__["a" /* default */]
  },
  // router 轉址
  { path: '/*', redirect: '/hello' }]
}));
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, "/"))

/***/ }),

/***/ "Yv+e":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "ZkY0":
/***/ (function(module, exports) {

//
//
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ "dNJ4":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "dOx+":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "idmT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/pages/Pratice.vue
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Pratice = ({
  name: 'pratice',
  data() {
    return {
      msg: 'Welcome to cloudybay web for pratice page XD!!',

      hello: "hello! I'm mavis.....",

      //預設checkbox 是false
      toggle: false
    };
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-46a5c41e","hasScoped":true,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/pages/Pratice.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"hello"},[_c('h1',[_vm._v(_vm._s(_vm.msg))]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.hello),expression:"hello"}],attrs:{"type":"text"},domProps:{"value":(_vm.hello)},on:{"input":function($event){if($event.target.composing){ return; }_vm.hello=$event.target.value}}}),_vm._v(" "),_c('img',{attrs:{"src":__webpack_require__("nLzk")}})])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var pages_Pratice = (esExports);
// CONCATENATED MODULE: ./src/pages/Pratice.vue
function injectStyle (ssrContext) {
  __webpack_require__("Yv+e")
  __webpack_require__("A+cO")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-46a5c41e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  Pratice,
  pages_Pratice,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_pages_Pratice = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "nLzk":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/www.2454f54.jpg";

/***/ }),

/***/ "olU0":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "qRur":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "quk+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("NYxO");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/pages/count.vue
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var count = ({
    // data () {
    //     return {
    //         count: 0,
    //     }
    // },
    // methods: {
    //     increase () {
    //         this.count += 1;
    //     },
    //     decrease () {
    //         this.count -= 1;
    //     }
    // }
    computed: {
        //ES7
        // ...mapGetters({
        // // getCount return value 將會存在別名為 count 的 data 上
        // count: 'getCount',
        // }),
    },
    methods: {}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-0a4a99b2","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/pages/count.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_c('h2',[_vm._v("count:"),_c('span',{staticClass:"count"},[_vm._v(" "+_vm._s(_vm.count))])]),_vm._v(" "),_c('button',{on:{"click":_vm.increase}},[_vm._v(" + ")]),_vm._v(" "),_c('button',{on:{"click":_vm.decrease}},[_vm._v(" - ")])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var pages_count = (esExports);
// CONCATENATED MODULE: ./src/pages/count.vue
function injectStyle (ssrContext) {
  __webpack_require__("olU0")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  count,
  pages_count,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_pages_count = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "rXZA":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "sK4E":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/pages/HelloWorld.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var HelloWorld = ({
  name: 'hello',
  data() {
    return {
      msg: 'Hello!!',

      hello: "So many wired things need to know..!",

      //預設checkbox 是false
      toggle: false
    };
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-9fb178e0","hasScoped":true,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/pages/HelloWorld.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"hello"},[_c('h1',[_vm._v(_vm._s(_vm.msg))]),_vm._v(" "),_c('h2',[_vm._v(_vm._s(_vm.hello))]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.toggle),expression:"toggle"}],attrs:{"type":"checkbox"},domProps:{"checked":Array.isArray(_vm.toggle)?_vm._i(_vm.toggle,null)>-1:(_vm.toggle)},on:{"change":function($event){var $$a=_vm.toggle,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.toggle=$$a.concat([$$v]))}else{$$i>-1&&(_vm.toggle=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.toggle=$$c}}}}),_vm._v(_vm._s(_vm.toggle)+"\n\n  "),_c('h2',[_vm._v("Essential Links")]),_vm._v(" "),_vm._m(0,false,false),_vm._v(" "),_c('h2',[_vm._v("Ecosystem")]),_vm._v(" "),_vm._m(1,false,false)])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',[_c('li',[_c('a',{attrs:{"href":"https://vuejs.org","target":"_blank"}},[_vm._v("Core Docs")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"https://forum.vuejs.org","target":"_blank"}},[_vm._v("Forum")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"https://chat.vuejs.org","target":"_blank"}},[_vm._v("Community Chat")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"https://twitter.com/vuejs","target":"_blank"}},[_vm._v("Twitter")])]),_vm._v(" "),_c('br'),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"http://vuejs-templates.github.io/webpack/","target":"_blank"}},[_vm._v("Docs for This Template")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',[_c('li',[_c('a',{attrs:{"href":"http://router.vuejs.org/","target":"_blank"}},[_vm._v("vue-router")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"http://vuex.vuejs.org/","target":"_blank"}},[_vm._v("vuex")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"http://vue-loader.vuejs.org/","target":"_blank"}},[_vm._v("vue-loader")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"https://github.com/vuejs/awesome-vue","target":"_blank"}},[_vm._v("awesome-vue")])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var pages_HelloWorld = (esExports);
// CONCATENATED MODULE: ./src/pages/HelloWorld.vue
function injectStyle (ssrContext) {
  __webpack_require__("U1uR")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-9fb178e0"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  HelloWorld,
  pages_HelloWorld,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_pages_HelloWorld = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "ukYY":
/***/ (function(module, exports) {



/***/ })

},["NHnr"]);
//# sourceMappingURL=app.8e03c34ee887743fa7ea.js.map