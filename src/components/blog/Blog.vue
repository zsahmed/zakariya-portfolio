<template lang="html">
  <div v-cloak>
    <div class="landingPage"></div>
    <hr>
    <router-view>
    </router-view>

  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
  .landingPage {
    background-image: url("../../assets/blog/blogLandingPage.png");
    background-size: cover;
    width: 100%;
    height: 500px;
  }

  hr {
    margin: 0 0 50px 0;
    border-top: 5px solid #34495e;
  }
</style>
