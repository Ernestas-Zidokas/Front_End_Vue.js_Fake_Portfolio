<template>
  <div class="Input-field">
    <label class="Input-field__label" :for="id">{{labelText}}</label>
    <input :id="id" class="Input-field__input" type="text" />
  </div>
</template>

<script>
export default {
  name: "Input-field",
  props: {
    labelText: {
      type: String,
      default: null
    }
  },
  computed: {
    id() {
      return `text-field-${this._uid}`;
    }
  }
};
</script>

<style lang='scss'>
.Input-field {
  display: flex;
  flex-direction: column;

  &__input {
    width: 200px;
  }
}
</style>