<template>
  <div class="container">
    <ul class="list-group">
              <router-link
                            to="/blog/spring-learning-part-1"
                            style="cursor: pointer">
                            <app-blog-card :info="springLearningPart1Info"></app-blog-card>
                </router-link>
                <router-link
                             to="/blog/personal-growth"
                             style="cursor: pointer">
                             <app-blog-card :info="personalGrowthInfo"></app-blog-card>
                 </router-link>
    </ul>
  </div>
</template>

<script>
  import BlogCard from './BlogCard.vue';

  export default {
    data() {
      return {
        personalGrowthInfo: {
          title: 'Personal Growth',
          imageLink: require('../../assets/blog/personalGrowthHeader.png')
        },
        springLearningPart1Info: {
          title:'Spring Learning: Part I',
          imageLink: require('../../assets/blog/springLearningPart1Header.png')
        }
      }
    },
    components: {
      appBlogCard: BlogCard
    }
  }

</script>

<style lang="css" scoped>

 a {
   text-decoration: none;
 }
</style>
