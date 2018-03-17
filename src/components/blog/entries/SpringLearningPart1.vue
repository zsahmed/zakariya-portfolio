<template lang="html">
  <div class="entry-container">
    <div class="landing-page spring-learning-1-background"></div>
    <hr class="landingPage-hr">
    <div class="container">

      <div class="header-content">
        <div class="row">
          <h1 class="col-md-8">Spring Learning: Part I</h1>
          <h3 class="col-md-4 date">April 17, 2017</h3>
        </div>
      </div>

      <hr>

      <div class="body-content">
        <p
          v-for="paragraph in paragraphs"
          class="blog-content-p">
          {{ paragraph.content }}
        </p>
      </div>

      </div>
  </div>
</template>

<script>
  export default {
    created() {
      this.$store.dispatch('initSpringLearningPart1BlogContent');
    },
    computed: {
      paragraphs() {
        let blog = this.$store.getters.springLearningPart1;
        return blog[0].paragraphs;
      }
    }
  }
</script>

<style lang="css" src="../../../css/blog-entries.css" scoped></style>
