<template>
  <nav>
    <h2>Livraria Flip</h2>
      <router-link to="/cart" v-if="cartDisplay">Carrinho</router-link>
      <pre>Quantidade: {{ quantityCart }}</pre>
      <pre>Valor Total: {{ totalPrice }}</pre>
      <router-link to="/home" v-if="homeDisplay">Home</router-link>
  </nav>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'flip-menu',
    computed: {
      ...mapGetters([
        'quantityCart',
        'totalPrice'
      ])
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
