<template>
  <nav>
    <h2>Livraria Flip</h2>
    <router-link to="/cart" v-if="cart">Carrinho</router-link>
    <router-link to="/home" v-if="home">Home</router-link>
  </nav>
</template>

<script>
  export default {
    name: 'flip-menu',
    props: {
      cart:{
        type: Boolean,
        default: true,
        required: false
      },
      home:{
        type: Boolean,
        default: true,
        required: false
      }
    }
  };
</script>

<style lang="scss" scoped>

</style>
