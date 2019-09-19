<template>
  <div class="Home">
    <h3>Projects</h3>
    <div class="Home--cards">
      <Card
        v-for="data in photoArray"
        :key="data.name"
        :photo="data.photo"
        :projectName="data.name"
      />
    </div>
  </div>
</template>

<script>
import Card from "../../components/Card";
import photo1 from "../../assets/banana.gif";
import photo2 from "../../assets/bananas.jpg";
import photo3 from "../../assets/friends.gif";

export default {
  name: "HomeView",
  components: {
    Card
  },
  data() {
    return {
      photos: []
    };
  },
  computed: {
    photoArray() {
      return [
        { name: "Banana project", photo: photo1 },
        { name: "Banana sign", photo: photo2 },
        { name: "Friends project", photo: photo3 }
      ];
    }
  }
};
</script>

<style lang="scss">
.Home {
  padding: 50px;

  &--cards {
    display: flex;
    justify-content: space-between;
  }
}
</style>