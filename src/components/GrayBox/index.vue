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
  height: 250px;
  background-color: #eeeff3;
  display: flex;
  align-items: center;
}
</style>