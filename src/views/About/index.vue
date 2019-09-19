<template>
  <div class="About">
    <h3>About</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id mauris vel mauris consequat pharetra. Donec semper turpis nisi, at tincidunt enim faucibus vitae. Praesent iaculis quis lectus aliquam volutpat. Cras in ultricies nisl, sit amet imperdiet velit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque tincidunt porttitor eros in tincidunt. Morbi quam mi, tincidunt in justo in, posuere laoreet ipsum. Vestibulum facilisis metus tempor, volutpat odio a, posuere dolor. Suspendisse potenti. Etiam venenatis tristique erat ut iaculis. Aliquam erat volutpat. Donec consequat erat erat, id finibus dolor interdum sed. Morbi dui mi, ultricies eu erat in, efficitur rutrum nisi. Nam pellentesque commodo magna, sit amet euismod urna commodo sed. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
    <Navigation :routes="children" :invert="true" />
    <GrayBox>
      <RouterView />
    </GrayBox>
  </div>
</template>

<script>
import GrayBox from "../../components/GrayBox";
import routes from "../../routes";
import Navigation from "../../components/Navigation";

export default {
  name: "AboutView",
  components: {
    GrayBox,
    Navigation
  },
  computed: {
    children() {
      return routes.find(route => route.path === this.$route.matched[0].path)
        .children;
    }
  }
};
</script>

<style lang="scss">
.About {
  padding: 50px;
}
</style>