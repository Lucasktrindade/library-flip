<template>
    <div class="cart">
      <library-menu :cartDisplay="false"></library-menu>
      <h1>Carrinho</h1>
      <div v-for="product in cartProducts">
        <pre>{{ product }}</pre>
        <button type="button" name="button" @click="removeFromCart(product.id)">Excluir</button>
      </div>
    </div>
</template>

<script>
  import LibraryMenu from '../components/Menu.vue';
  import { mapGetters, mapActions } from 'vuex';

  export default {
    name: 'Cart',
    components: { LibraryMenu },
    computed: {
      ...mapGetters([
        'cartProducts'
      ])
    },
    methods: {
      ...mapActions([
        'removeFromCart'
      ])
    }
  };
</script>

<style lang="scss" scoped>
  .cart{
    display: block;
    .cart-product {
      display: table;
    }
  }
</style>
