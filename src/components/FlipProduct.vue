<template>
  <div class="product">
    <h3>{{item.name}}</h3>
    <p>{{item.description}}</p>
    <p>{{item.price}}</p>
    <button type="button" name="button" @click="addToCart(item.id)">Adicionar ao Carrinho</button>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    name: 'flip-product',
    methods: {
      ...mapActions({
        addToCart: 'addCart'
      }),
    },
    props: ['item']
  };
</script>

<style lang="scss" scoped>

</style>
