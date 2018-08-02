// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import 'lib-flexible'
import Toast from 'vue-toast-component';

Vue.config.productionTip = false

Vue.use(Toast);
Vue.use(ElementUI);
Vue.use(VueRouter)
Vue.use(Vuex)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
