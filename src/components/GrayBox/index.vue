<template>
  <div class="GrayBox">
    <slot />
  </div>
</template>

<script>
export default {
  name: "GrayBox"
};
</script>

<style lang='scss'>
.GrayBox {
  width: 1075px;
  height: 250px;
  background-color: #eeeff3;
}
</style>