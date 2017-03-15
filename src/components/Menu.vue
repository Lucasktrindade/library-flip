<template>
  <nav>
    <h2>Livraria Flip</h2>
      <router-link to="/cart" v-if="cartDisplay">Carrinho</router-link>
      <pre>{{ cart }}</pre>
      <router-link to="/home" v-if="homeDisplay">Home</router-link>
  </nav>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: 'flip-menu',
    computed: {
      ...mapState({
        cart: state => state.cart,
      })
    },
    props: {
      cartDisplay: {
        type: Boolean,
        default: true,
        required: false
      },
      homeDisplay: {
        type: Boolean,
        default: true,
        required: false
      }
    }
  };
</script>

<style lang="scss" scoped>

</style>
