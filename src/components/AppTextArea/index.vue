<template>
  <div class="Text-area">
    <label class="Text-area__label" :for="id">{{ labelText }}</label>
    <textarea :id="id" class="Text-area__input" cols="30" rows="10"></textarea>
  </div>
</template>

<script>
export default {
  name: "Text-area",
  props: {
    labelText: {
      type: String,
      default: null
    }
  },
  computed: {
    id() {
      return `text-area-${this._uid}`;
    }
  }
};
</script>

<style lang='scss'>
.Text-area {
  display: flex;
  flex-direction: column;
  &__input {
    width: 1077px;
  }
}
</style>