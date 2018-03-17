<template lang="html">
  <div class="entry-container">
    <div class="landingPage"></div>
    <hr class="landingPage-hr">
    <div class="container">

      <div class="header-content">
        <h1 class="col-md-8">Personal Growth</h1>
        <h3 class="col-md-4 date">November 15, 2016</h3>
      </div>

      <hr>

      <div class="body-content">
        <p
          v-for="paragraph in paragraphs"
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
    computed: {
      paragraphs() {
        let blog = this.$store.getters.personalGrowth;
        return blog[0].paragraphs;
      }
    }
  }
</script>

<style lang="css" scoped>

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
  font-size: 20px;
  padding-top: 5px;
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

.body-content {
  margin-bottom: 50px;
}

h3 {
  margin-top: 24px;
}

p {
  font-size: 17px;
  line-height: 1.8;
}

</style>
