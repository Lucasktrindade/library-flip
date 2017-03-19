import { getCart } from '../services/CartService'

export default {

   cart: getCart() || {
     products: [],
     total: 0,
   }

};
