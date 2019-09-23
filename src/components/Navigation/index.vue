<template>
  <nav>
    <ul :class="['Navigation', {'Navigation__invert': invert}]">
      <li v-for="route in routes" :key="route.name">
        <RouterLink
          :class="['Navigation--link', {'Navigation--link__invert': invert}]"
          exact-active-class="Navigation--link__active"
          :to="{name: route.name || route.meta.defaultName}"
          exact
        >{{route.meta.displayName}}</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
  props: {
    routes: {
      type: Array,
      default: null
    },
    invert: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss">
nav {
  max-width: 1196px;
  margin: 0 auto;
}
.Navigation {
  display: flex;
  justify-content: flex-end;
  padding: 20px 0px;
  &__invert {
    justify-content: unset;
  }

  li {
    list-style: none;
  }

  &--link {
    margin: 10px;
    color: #fff;

    &__invert {
      color: #000;
    }

    &__active {
      color: #37e9b8;
    }
  }
}
</style>