<template>
  <div class="product-list">
    <flip-product></flip-product>
  </div>
</template>

<script>
  import FlipProduct from './FlipProduct.vue';

  export default {
    name: 'flip-product-list',
    components: { FlipProduct }
  };
</script>

<style lang="scss" scoped>

</style>
