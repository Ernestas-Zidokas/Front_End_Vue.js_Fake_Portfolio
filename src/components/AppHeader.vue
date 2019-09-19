<template>
  <header class="Header">
    <Navigation :routes="links" />
    <div class="Header--title">
      <h2>Ernestas Židokas</h2>
      <h3>Portfolio</h3>
    </div>
  </header>
</template>

<script>
import Navigation from "./Navigation";
import routes from "../routes";

export default {
  name: "AppHeader",
  components: {
    Navigation
  },
  data() {
    return {
      routes
    };
  },
  computed: {
    links() {
      return this.routes.filter(route => route.meta.displayName);
    }
  }
};
</script>

<style lang="scss">
.Header {
  background: #3252e5;
  height: 300px;
  width: 100%;

  &--title {
    text-align: center;
    color: #fff;
  }
}
</style>