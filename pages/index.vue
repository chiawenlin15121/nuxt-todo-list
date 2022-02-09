<template lang="pug">
  .h-screen.w-screen.bg-background
    .h-full.container.mx-auto.flex.justify-center.items-center
      TodoList(class="lg:w-1/2 w-full")
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>

<style lang="scss">
html, body{
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
}
h1, h2, h3, h4, h5, h6{
  font-size: 1rem;
  font-weight: inherit;
  margin: 0;
  padding: 0;
  display: inline-block;
  line-height: inherit;
}
</style>
