<template>
  <div>
    <library-menu :homeDisplay="false"></library-menu>
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
