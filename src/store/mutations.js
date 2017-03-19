export default {
  ADD_ITEM (state, product) {
      state.cart.products.push(product);
  },
  REMOVE_ITEM (state, idx) {
    state.cart.products.splice(idx,1);
  },
  INCREMENT_ITEM_QUANTITY (state, product) {
    product.quantity +=1;
  },
  DECREMENT_ITEM_QUANTITY (state, product) {
    product.quantity -=1;
  }

}
