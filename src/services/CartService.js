import { store_data } from '../utils/localStorage.util.js'

function storeCart(data) {
  store_data(data, 'cart');
};

export { storeCart }
