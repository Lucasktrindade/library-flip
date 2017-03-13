<template>
  <nav>
    <h2>Livraria Flip</h2>
    <router-link to="/cart">Carrinho</router-link>
  </nav>
</template>

<script>
  export default {
    name: 'LibraryMenu',
    props: ['page']
  };
</script>

<style lang="scss" scoped>

</style>
