<template>
  <div class="product">
    <h4 class="product--name">{{item.name}}</h4>
    <p>{{item.description}}</p>
    <p>R$ {{item.price}}</p>
    <img v-bind:src="item.thumb" alt="">
    <button type="button" name="button" @click="addToCart(item)">Adicionar ao Carrinho</button>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    name: 'flip-product',
    methods: {
      ...mapActions([
        'addToCart'
      ]),
    },
    props: ['item']
  };
</script>

<style lang="scss" scoped>
  .product {
    border: 1px solid #7f8c8d;
    border-radius: 2px;
    max-width: 250px;
    margin-bottom: .2em;
    margin-left: .375em;
    margin-right: .375em;
    margin-top: .2em;

    .product--name {
      display: block;
      text-align: center;
    }
  }
</style>
