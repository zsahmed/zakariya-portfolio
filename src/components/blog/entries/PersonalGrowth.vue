<template lang="html">
  <div class="entry-container">
    <div class="landing-page personal-growth-background"></div>
    <hr class="landingPage-hr">
    <div class="container">

      <div class="header-content">
        <div class="row">
          <h1 class="col-md-8">Personal Growth</h1>
          <h3 class="col-md-4 date">November 15, 2016</h3>
        </div>


        <p class="author-note">
          <span class="author-note-span">Author's Note:</span>
          This was my first blog for Credera. The original post can be found <a :href="blogLink">here</a>.
          I'm happy to say I did achieve my goal of becoming AWS certified! Next up, Solutions Architect.
        </p>
      </div>

      <hr>

      <div class="body-content">
        <p
          v-for="paragraph in paragraphs"
          class="blog-content-p"
          :class="{quote: paragraph.quote}">
          {{ paragraph.content }}
        </p>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    created() {
      this.$store.dispatch('initPersonalGrowthBlogContent');
    },
    data() {
      return {
        blogLink: 'https://www.credera.com/blog/management-consulting/personal-growth-is-essential/'
      }
    },
    computed: {
      paragraphs() {
        let blog = this.$store.getters.personalGrowth;
        return blog[0].paragraphs;
      }
    }
  }
</script>

<style lang="css" src="../../../css/blog-entries.css" scoped></style>
