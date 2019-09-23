<template>
  <div id="app">
    <AppHeader />
    <WhiteBox>
      <RouterView />
    </WhiteBox>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import WhiteBox from "./components/WhiteBox";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
    WhiteBox
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,600,700");

* {
  box-sizing: border-box;
}

#app {
  font-family: "Open sans";
  background-color: #f5f5f5;
}
</style>