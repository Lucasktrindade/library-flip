import { store_data, get_data } from '../utils/localstorage.util'

function storeCart(data) {
  store_data(data, 'cart');
};


function getCart() {
  return get_data('cart');
};

export { storeCart, getCart }
