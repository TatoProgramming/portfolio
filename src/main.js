import Vue from 'vue'
import App from './App.vue'
import AppData from './appData';

import { store } from './store/store';

// require('../index.html'); // TODO look into how to create an index.html on the fly with webpack
require('../semantic/dist/semantic.min.css');
require('../semantic/dist/semantic.min');

Vue.use(AppData);

new Vue({
  el: '#app',
  store,
  render: h => h(App)
});
