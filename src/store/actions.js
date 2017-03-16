import { store_data } from '../utils/localStorage.util.js'

export default {
  addCart({commit, state}, id) {
    commit('ADD_ITEM', id);
    store_data(state.cart, 'cart');
  }
};
