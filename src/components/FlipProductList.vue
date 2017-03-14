<template>
  <div class="product-list">
    <p v-if="loading">Carregando...</p>
    <flip-product v-for="item in products" :item="item"></flip-product>
  </div>
</template>

<script>
  import FlipProduct from './FlipProduct.vue';

  export default {
    name: 'flip-product-list',
    components: {
      FlipProduct
    },
    data() {
      return {
        loading: true,
        products: [],
      }
    },
    methods: {
      listProducts() {
        this.$http.get('./mock/products.json')
        .then(response => {
          this.products = response.body || [];
        })
        .catch(error => {
          console.log(error);
        });
      }
    },
    mounted (){
      this.listProducts();
      this.loading = false;
    }
  };
</script>

<style lang="scss" scoped>

</style>
