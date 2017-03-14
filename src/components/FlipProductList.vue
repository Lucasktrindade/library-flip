<template>
  <div class="product-list">
    <p v-if="loading">Carregando...</p>
    <flip-product v-for="item in products" :key="item.id" :item="item"></flip-product>
  </div>
</template>

<script>
  import FlipProduct from './FlipProduct.vue';
  import { allProducts } from '../services/ProductService'
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
    mounted (){
      Promise.resolve(allProducts()).then(data => this.products = data);
      this.loading = false;
    }
  };
</script>

<style lang="scss" scoped>

</style>
