<template>
  <button class="button">
    <slot />
  </button>
</template>

<script>
export default {
  name: "AppButton"
};
</script>

<style lang="scss">
.button {
  background-color: #3252e5;
  padding: 10px 40px;
  color: #fff;
  border-radius: 5px;
  border: unset;
  margin-top: 50px;
  cursor: pointer;
}
</style>
