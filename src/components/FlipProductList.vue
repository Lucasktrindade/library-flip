<template>
  <div>
    <div class="product-list">
      <p v-if="loading">Carregando...</p>
      <flip-product v-for="item in products" :key="item.id" :item="item"></flip-product>
    </div>
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
        errorMessage: null,
      }
    },
    mounted (){
      allProducts().then((data) => {
        this.products = data;
        this.loading = false;
      }).catch((err) => {
        console.log(this.err)
      });
    }
  };
</script>

<style lang="scss" scoped>
  .product-list {
    -webkit-align-content: center;
    -ms-flex-line-pack: center;
    align-content: center;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-flow: row wrap;
    -ms-flex-flow: row wrap;
            flex-flow: row wrap;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
            justify-content: center;
  }
</style>
