import { get_data } from '../utils/localStorage.util.js';

export default {
  ADD_ITEM (state, payload) {
    state.cart.push(payload);
  }
}
