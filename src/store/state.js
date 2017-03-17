import { get_data } from '../utils/localStorage.util.js'

export default {

   cart: get_data('cart') || {
     products: [],
     total: 0,
   }

};
