<template>
  <div class="Contacts">
    <h3>Contacts</h3>
    <Input labelText="Name" />
    <AppTextArea labelText="Message" />
    <AppButton>Send</AppButton>
  </div>
</template>

<script>
import Input from "../../components/Input";
import AppTextArea from "../../components/AppTextArea";
import AppButton from "../../components/AppButton";

export default {
  name: "AboutContactsView",
  components: {
    Input,
    AppTextArea,
    AppButton
  }
};
</script>

<style lang='scss'>
.Contacts {
  padding: 50px;
}
</style>