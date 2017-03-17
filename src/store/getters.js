export default {

  quantityCart: state => {
    return state.cart.products.reduce((total, obj) => { return total + obj.quantity},0);
  },
  cartProducts: state => {
    return state.cart.products;
  },
  getProduct: state => id =>{
    return state.cart.products.filter(p => p.id == id)[0];
  },
  totalPrice: state =>{
    return state.cart.products.reduce((total, obj) => { return total + (obj.quantity* obj.price)},0);
  }
}
