<template lang="html">
  <div class="blog-container">
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

  .blog-container {
    background-color: #fafafa;
  }

  hr {
    margin: 0 0 25px 0;
    border-top: 5px solid #34495e;
  }
</style>
