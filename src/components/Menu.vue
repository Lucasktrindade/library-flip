<template>
  <div class="wrapper">
    <nav class="menu">
      <div class="menu--home">
        <router-link to="/" v-if="homeDisplay" class="menu--link">
          <img src="../assets/back-arrow-white.png" alt="Home" class="menu--icon">
        </router-link>
      </div>
      <h2 class="menu--title">Livraria Flip</h2>
      <div class="menu--cart">
        <router-link to="/cart" v-if="cartDisplay" class="menu--link">
          <img src="../assets/shopping-cart-white.png" alt="Carrinho" class="menu--icon">
        </router-link>
        <p v-if="cartDisplay" class="menu--cart--quantity">{{quantityCart}}</p>
      </div>
  </nav>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'flip-menu',
    computed: {
      ...mapGetters([
        'quantityCart'
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
  .wrapper {
    display: block;
    position: relative;
    height: 80px;
  }
  .menu {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: #3498db;
    border-bottom: 1px solid #c0c0c0;
    color: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-flow: row wrap;
            flex-flow: row wrap;
    height: auto;
    position: fixed;
    width: 100%;

    .menu--title {
      -webkit-align-self: center;
      -ms-flex-item-align: center;
      -ms-grid-row-align: center;
        align-self: center;
      -webkit-flex-basis: 60%;
      -ms-flex-preferred-size: 60%;
              flex-basis: 60%;
      text-align: center;
    }
    .menu--home, .menu--cart{
      -webkit-flex-basis: 20%;
      -ms-flex-preferred-size: 20%;
      flex-basis: 20%;
    }
    .menu--cart {
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
      -webkit-flex-flow: row nowrap;
      -ms-flex-flow: row nowrap;
              flex-flow: row nowrap;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
              justify-content: center;
    }
    .menu--cart--quantity {
      background-color: #e74c3c;
      border-radius: 100%;
      display: inline-block;
      line-height: 15px;
      height: 30px;
      margin: .2em;
      padding: .5em;
      text-align: center;
      vertical-align: middle;
      width: 30px;
    }
    .menu--link {
      cursor: pointer;
      text-decoration: none;

      .menu--icon {
        display: block;
        margin-left: auto;
        margin-right: auto;
      }
    }
  }
</style>
