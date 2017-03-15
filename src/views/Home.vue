<template>
  <div>
    <library-menu :home="false"></library-menu>
    <h1>Home Flip</h1>
    <flip-product-list></flip-product-list>
  </div>
</template>

<script>
  import LibraryMenu from '../components/Menu.vue';
  import FlipProductList from '../components/FlipProductList.vue';

  export default {
    name: 'Home',
    components: {
      LibraryMenu,
      FlipProductList
    }
  };
</script>

<style lang="scss" scoped>

</style>
