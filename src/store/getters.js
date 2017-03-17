export default {

  quantityCart: state => {
    return state.cart.products.length;
  },
  cartProducts: state => {
    return state.cart.products;
  }
}
