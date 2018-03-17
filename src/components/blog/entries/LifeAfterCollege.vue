<template lang="html">
  <div class="entry-container">
    <div class="landing-page life-after-college-background"></div>
    <hr class="landingPage-hr">
    <div class="container">

      <div class="header-content">
        <div class="row">
          <h1 class="col-md-8">Surviving Life After College</h1>
          <h3 class="col-md-4 date">March 16, 2018</h3>
        </div>


        <p class="author-note">
          <span class="author-note-span">Author's Note:</span>
          This is a post I created for marketing's "My Credera" initiative. I wanted to speak to the challanges and opportunities I faced
          while transitioning from student to professional consultant. The original article can be found <a :href="blogLink">here</a>.
        </p>
      </div>

      <hr>

      <div class="body-content">
        <p
          v-for="paragraph in paragraphs"
          class="blog-content-p"
          :class="{quote: paragraph.quote, 'content-section-header': paragraph.isHeader}">
          {{ paragraph.content }}
        </p>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    created() {
      this.$store.dispatch('initSurvivingLifeAfterCollegeContent');
    },
    data() {
      return {
        blogLink: 'https://www.credera.com/blog/technology-solutions/life-after-college-4-technology-consultant-survival-tips/'
      }
    },
    computed: {
      paragraphs() {
        let blog = this.$store.getters.survivingLifeAfterCollege;
        console.log('blog', blog);
        return blog.paragraphs;
      }
    }
  }
</script>

<style lang="css" src="../../../css/blog-entries.css" scoped></style>
