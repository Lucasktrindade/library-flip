import Vue from 'vue';

function allProducts() {
  return Vue.http.get('./mock/products.json')
     .then(response => response.body)
     .catch(error => error.ok);
};

export { allProducts }
