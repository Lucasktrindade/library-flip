<template>
  <div class="product">
    <h3>{{item.title}}</h3>
    <p>{{item.description}}</p>
    <p>{{item.price}}</p>
    <button type="button" name="button">Adicionar ao Carrinho</button>
  </div>
</template>

<script>
  export default {
    name: 'flip-product',
    props: ['item'],
  };
</script>

<style lang="scss" scoped>

</style>
