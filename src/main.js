import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import { routes } from './routes';
import AppData from './shared/appData';

import { store } from './store/store';

// require('../index.html');
require('../semantic/dist/semantic.min.css');
require('../semantic/dist/semantic.min');

Vue.use(AppData);
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history',
});

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});
