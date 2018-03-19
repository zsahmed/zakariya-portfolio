import Home from './components/Home.vue';
import Blog from './components/blog/Blog.vue';
import Works from './components/works/Works.vue';

import BlogSelect from './components/blog/BlogSelect.vue';
import PersonalGrowth from './components/blog/entries/PersonalGrowth.vue';
import SpringLearningPart1 from './components/blog/entries/SpringLearningPart1.vue';
import LifeAfterCollege from './components/blog/entries/LifeAfterCollege.vue';


export const routes = [
  { path: '/', component: Home },
  { path: '/works', component: Works },

  { path: '/blog', component: Blog, children: [
    { path: '', component: BlogSelect }
  ] },

  { path: '/blog/personal-growth',
    component: PersonalGrowth,
    beforeEnter: (to, from, next) => {
      setTimeout(() => {
        window.scrollTo(0,0);
      }, 500);
      next();
    }
   },
  { path: '/blog/spring-learning-part-1',
    component: SpringLearningPart1,
    beforeEnter: (to, from, next) => {
      setTimeout(() => {
        window.scrollTo(0,0);
      }, 500);
      next();
    }
   },
  { path: '/blog/surviving-life-after-college',
    component: LifeAfterCollege,
    beforeEnter: (to, from, next) => {
      setTimeout(() => {
        window.scrollTo(0,0);
      }, 500);
      next();
    }
  }
];
