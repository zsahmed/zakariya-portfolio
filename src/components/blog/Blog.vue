<template lang="html">
  <div v-cloak>
    <div class="landingPage"></div>

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
    margin-bottom: 50px;
  }
</style>
