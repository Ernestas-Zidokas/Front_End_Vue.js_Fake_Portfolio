<template>
  <header class="Header">
    <Navigation :routes="links" />
    <div class="Header--title">
      <h2>ERNESTAS ŽIDOKAS</h2>
      <h3>PORTFOLIO</h3>
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
    display: flex;
    flex-direction: column;
    text-align: center;
    color: #fff;

    h2,
    h3 {
      font-weight: 600;
      margin: 10px 0 px;
    }

    h2 {
      font-size: 32px;
    }

    h3 {
      font-size: 18px;
    }
  }
}
</style>