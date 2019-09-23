<template>
  <div class="Contacts">
    <h3>CONTACTS</h3>
    <Input labelText="NAME" />
    <AppTextArea labelText="MESSAGE" />
    <AppButton>SEND</AppButton>
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

  h3 {
    font-size: 24px;
    font-weight: 600;
  }

  .Input-field {
    label,
    input {
      margin: 5px 0px;
      border-radius: 3px;
    }

    input {
      padding: 5px;
    }
  }

  .Text-area {
    label,
    textarea {
      margin: 5px 0px;
      border-radius: 3px;
    }
  }
}
</style>