<template lang="pug">
  nav.nav
    .left
      img.cursor-pointer(src='~/assets/menu.svg')
      h1.ml-3.text-white.text-xl HandsUP
    .right
      img.cursor-pointer(src='~/assets/export.svg')
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "./scss/variables.scss";

.nav{
  color: #fff;
  padding: 10px;
  justify-content: space-between;
  width: 100%;
  display: flex;
  position: fixed;
  top: 0;
  background-color: $primary-color;
  .left, .right{
    display: flex;
  }
  h1{
    margin-left: 1em;
    font-size: 1.2em;
  }
}
</style>