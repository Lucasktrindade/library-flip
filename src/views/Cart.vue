<template>
    <div class="cart">
      <library-menu :cartDisplay="false"></library-menu>
      <h3>Carrinho</h3>
      <table>
        <thead>
          <td>Descrição</td>
          <td>Quantidade</td>
          <td>Subtotal</td>
        </thead>
        <tbody>
          <tr v-for="product in cartProducts">
            <td>{{ product.description }}</td>
            <td>{{ product.quantity }}</td>
            <td>{{ product.quantity * product.price }}</td>
            <td><button type="button" name="button" @click="removeFromCart(product.id)">Excluir</button></td>
          </tr>
        </tbody>
      </table>
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
    
  }
</style>
