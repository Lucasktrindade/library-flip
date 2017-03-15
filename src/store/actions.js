export default {
  addCart({commit}, id) {
    commit('ADD_ITEM', id);
  }
};
