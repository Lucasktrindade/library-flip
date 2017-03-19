<template>
    <div class="cart">
      <library-menu :cartDisplay="false"></library-menu>
      <div class="cart--text">
        <h3>Carrinho</h3>
        <p v-if="cartProducts.length <= 0">Não há produtos no carrinho.</p>
      </div>
      <div class="wrapper" v-if="cartProducts.length > 0">
        <table class="table">
          <thead>
            <th class="table--description">Descrição</th>
            <th class="table--quantity">Quantidade</th>
            <th class="table--subtotal">Subtotal</th>
            <th class="table--action"></th>
          </thead>
          <tbody>
            <tr v-for="product in cartProducts">
              <td>{{ product.description }}</td>
              <td>{{ product.quantity }}</td>
              <td>R$ {{ product.quantity * product.price }}</td>
              <td><img src="../assets/icon-red.png" alt="Excluir Produto" @click="removeFromCart(product.id)" class="product--delete"></td>
            </tr>
            <tr>
              <td colspan="2">Total</td>
              <td>R$ {{totalPrice}}</td>
              <td></td>
            </tr>
          </tbody>
        </table>
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
        'cartProducts',
        'totalPrice'
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
  .cart--text {
    text-align: center;
  }
  .wrapper {
    overflow-x: auto;
  }
  .table {
    border-collapse: collapse;
    display: block;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    width: 98%;

    th, td{
      border: 1px solid #000;
      padding: 1.2em .375em;
    }

    .table--description, .table--subtotal {
      width: 40%;
    }
    .table--quantity, .table--action {
      width: 40%;
    }
  }
  .product--delete {
    cursor: pointer;
    padding: .5em;
  }
  @media (min-width: 768px) {
    .table{
      width: 80%;
    }
  }
</style>
