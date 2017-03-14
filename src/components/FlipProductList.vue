<template>
  <div class="product-list">
    <flip-product></flip-product>
  </div>
</template>

<script>
  import Product from './ProductList.vue';

  export default {
    name: 'flip-product-list',
    components: { Product }
  };
</script>

<style lang="scss" scoped>

</style>
