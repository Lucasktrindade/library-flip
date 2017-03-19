<template>
  <nav class="menu">
    <router-link to="/" class="menu--link home">Home</router-link>
    <h2 class="menu--title">Livraria Flip</h2>
    <router-link to="/cart" class="menu--link cart">Carrinho</router-link>
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
  .menu {
    align-items: center;
    background-color: #3498db;
    border-bottom: 1px solid #c0c0c0;
    color: #fff;
    display: flex;
    flex-flow: row nowrap;
    height: 80px;
    width: 100%;

    .menu--title {
      align-self: center;
      display:block;
      text-align: center;
    }
    
    .menu--link {
      cursor: pointer;
      text-decoration: none;
    }
  }
</style>
