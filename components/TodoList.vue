<template lang="pug">
  .flex.flex-col.p-5.bg-white.border.border-border
    h1.title Todo List
    .item.flex.items-center
      label.select-none.cursor-pointer.checkbox-wrapper
          input.hidden(type="checkbox")
          .border.border-border.checkbox.flex.justify-center.items-center
            .checkmark.hidden.text-primary v
      .px-2.flex-grow.truncate Proident excepteur do laborum enim sint.
      img.trash-can(class="cursor-pointer" src="~/assets/trashcan.png")

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.checkbox{
  border-radius: 2px;
  width: 22px;
  height: 20px;
}
input:checked {

  +.checkbox{
      .checkmark{
        display: block;
      }
    @apply border-primary;
  }
}

</style>