<template>
  <div class="WhiteBox">
    <h3 v-if="WhiteBoxTitle">{{ WhiteBoxTitle }}</h3>
    <div class="WhiteBox--content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "WhiteBox",
  props: {
    WhiteBoxTitle: {
      type: String,
      default: null
    },
    WhiteBoxText: {
      type: String,
      default: null
    }
  }
};
</script>

<style lang="scss">
.WhiteBox {
  height: 640px;
  width: 1196px;
  background-color: #fff;
  margin: 0 auto;
  margin-top: -50px;
}
</style>