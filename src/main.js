import Vue from 'vue';
import App from './App.vue';
import http from './services';
import router from './router';
import store from './store';

const app = new Vue({
  el: '#app',
  http,
  store,
  router,
  render: h => h(App)
});
