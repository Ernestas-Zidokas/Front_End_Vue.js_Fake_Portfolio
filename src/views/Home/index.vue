<template>
  <div class="Home">
    <h3>PROJECTS</h3>
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
        { name: "PROJECT 1", photo: photo1 },
        { name: "PROJECT 2", photo: photo2 },
        { name: "PROJECT 3", photo: photo3 }
      ];
    }
  }
};
</script>

<style lang="scss">
.Home {
  padding: 50px;

  h3 {
    font-size: 24px;
    font-weight: 600;
  }

  &--cards {
    display: flex;
    justify-content: space-between;
  }
}
</style>