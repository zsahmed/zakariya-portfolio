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
        lifeAfterCollegeInfo: {
          title: 'Surviving Life After College',
          date: 'March 16, 2018',
          imageLink: require('../../assets/blog/lifeAfterCollegeHeader.png')
        },
        personalGrowthInfo: {
          title: 'Personal Growth',
          date: 'November 15, 2016',
          imageLink: require('../../assets/blog/personalGrowthHeader.png')
        },
        springLearningPart1Info: {
          title:'Spring Learning: Part I',
          date:'April 17, 2017',
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
