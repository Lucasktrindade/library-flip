import Vue from 'vue'
import Router from 'vue-router'
import Cart from '../views/Cart.vue';
import Home from '../views/Home.vue';

Vue.use(Router);

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/cart', component: Cart },
  { path: '/home', component: Home }
];

export default new Router({
  mode:'history',
  routes: routes
});
