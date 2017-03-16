import Cart from '../views/Cart.vue';
import Home from '../views/Home.vue';

export default [
  { path: '/', redirect: '/home' },
  { path: '/cart', component: Cart },
  { path: '/home', component: Home }
];
