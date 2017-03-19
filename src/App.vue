<template>
  <div class="container">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'LibraryFlip',
}
</script>

<style>
  @import "../node_modules/normalize.css/normalize.css";

  *{
    box-sizing: border-box;
  }
  body {
    background-color: #ecf0f1;
  }
  .container {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }
  @media and screen min-width(768px){
    .container {
      width: 97.5%;
    }
  }
</style>
