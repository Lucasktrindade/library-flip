import { store_data } from '../utils/localStorage.util.js'

export default {
  addToCart({commit, state}, id) {
    commit('ADD_ITEM', id);
    store_data(state.cart, 'cart');
  },
  removeFromCart({commit, state}, id) {
    let idx;
    state.cart.products.forEach((p, index) => {
      if(p.id == id){
        idx = index;
      }
    });
    commit('REMOVE_ITEM', idx);
    store_data(state.cart, 'cart');
  }
};
