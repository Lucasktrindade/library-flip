import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import router from './router';

Vue.use(VueResource);

const app = new Vue({
  el: '#app',
  http: {
    root: './',
  },
  router,
  render: h => h(App)
});
