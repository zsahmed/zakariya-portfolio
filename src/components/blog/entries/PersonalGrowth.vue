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

<style lang="css" src="../../../css/blog-entries.css" scoped>

.landingPage {
  background-image: url("../../../assets/blog/personalGrowthHeader.png");
  background-size: cover;
  width: 100%;
  height: 500px;
}

.landingPage-hr {
  margin: 0;
  border-top: 5px solid #34495e;
}

.date {
  margin-top: 24px;
  font-size: 20px;
  padding-top: 5px;
}

.author-note {
  margin-top: 30px;
  font-style: italic;
}

.author-note-span {
  font-weight: 600;
  font-style: normal;
}

.entry-container {
  font-family: 'Muli';
  background-color: #fafafa;
}

.container {
  width: 45%;
}

.quote {
  margin: 25px -20px 25px -25px;
  padding: 5px 20px 5px 20px;
  border-left: 5px solid #34495e;
  background-color: #DCDCDC;

}

.header-content {
  display: inline-block;
  width: 100%;
  height: 150px;
}

.blog-content-p {
  font-size: 17px;
  line-height: 1.8;
}

.body-content {
  margin-bottom: 50px;
}
</style>
