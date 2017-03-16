import Vue from 'vue';

function allProducts() {
  return Vue.http.get('./mock/products.json')
     .then(response => Promise.resolve(response.body))
     .catch(error => Promise.reject(error));
};

export { allProducts }
