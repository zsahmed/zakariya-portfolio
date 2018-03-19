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
    height: 550px;
  }

  .blog-container {
    background-color: #fafafa;
  }

  @keyframes line_animation {
     from {
         width: 0%;
     }
     to {
         width:100%;
     }
   }

  hr {
    margin: 0 auto 0 auto;
    border-top: 5px solid #34495e;
    animation-name: line_animation;
    animation-duration: 1s;
    animation-timing-function: linear;
  }
</style>
