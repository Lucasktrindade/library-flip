import { store_data } from '../utils/localStorage.util.js'

export default {
  addToCart({commit, state, getters}, {id, description, price}) {
    let product = getters.getProduct(id);
    if(product){
      commit('INCREMENT_ITEM_QUANTITY', product);
    }else {
      product = {
        'id':id,
        'description':description,
        'price': price,
        'quantity':1
      };
      commit('ADD_ITEM', product);
    }
    store_data(state.cart, 'cart');
  },

  removeFromCart({commit, state, getters}, id) {
    let product = getters.getProduct(id);
    if(product.quantity > 1){
      commit('DECREMENT_ITEM_QUANTITY', product);
    }else {
      let idx;
      getters.cartProducts.forEach((p, index) => {
        if(p.id == id){
          idx = index;
        }
      });
      commit('REMOVE_ITEM', idx);
    }
    store_data(state.cart, 'cart');
  }
};
