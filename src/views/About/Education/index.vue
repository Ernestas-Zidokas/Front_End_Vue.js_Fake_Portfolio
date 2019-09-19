<template>
  <div>
    <ol>
      <li v-for="item in info" :key="item">{{item}}</li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "AboutEducationView",
  data() {
    return {
      info: ["School", "High school", "University"]
    };
  }
};
</script>

<style>
</style>