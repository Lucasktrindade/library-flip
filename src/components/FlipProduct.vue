<template>
  <div class="product">
    <h4 class="product--name">{{item.name}}</h4>
    <div class="product--detail">
      <div class="product--image">
        <img v-bind:src="item.thumb" alt="" class="product--image--thumb">
      </div>
      <div class="product--text">
        <p>{{item.description}}</p>
        <p>R$ {{item.price}}</p>
      </div>
    </div>
    <button type="button" name="button" @click="addToCart(item)" class="product--button">Adicionar ao Carrinho</button>
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
    border: 1px solid #bdc3c7;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    width: 250px;
    max-width: 350px;
    margin-bottom: .2em;
    margin-left: .375em;
    margin-right: .375em;
    margin-top: .2em;

    .product--detail {
      -webkit-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -webkit-flex-flow: row wrap;
      -ms-flex-flow: row wrap;
              flex-flow: row wrap;
      -webkit-box-flex: 1;
      -webkit-flex-grow: 1;
      -ms-flex-positive: 1;
              flex-grow: 1;
      margin-bottom: .750em;
      margin-top: .750em;
      padding: 0em .375em;
    }
    .product--image {
      -webkit-flex-basis:50%;
      -ms-flex-preferred-size:50%;
      flex-basis:50%;

      .product--image--thumb {
        border-radius: 5px;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
        display: block;
        margin-left: auto;
        margin-right: auto;
      }
    }
    .product--text {
      flex-basis: 50%;
      text-align: center;
    }
    .product--name {
      display: block;
      text-align: center;
    }
    .product--button {
      background-color: #dddddd;
      border: none;
      border-top: 1px solid #bdc3c7;
      cursor: pointer;
      padding: .5em 0em;
      width: 100%;

      &:hover, &:focus {
        background-color:darken(#dddddd, 10%);
      }
    }
  }
</style>
