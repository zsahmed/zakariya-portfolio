import personalGrowth from '../../blog-data/personalGrowth.js';
import springLearningPart1 from '../../blog-data/springLearningPart1.js';
import survivingLifeAfterCollege from '../../blog-data/survivingLifeAfterCollege.js';

const state = {
  personalGrowth: null,
  springLearningPart1: null,
  survivingLifeAfterCollege: null
};

const mutations = {
  'SET_PERSONAL_GROWTH_BLOG' (state, personalGrowth) {
    state.personalGrowth = personalGrowth;
  },
  'SET_SPRING_LEARNING_1_BLOG' (state, springLearningPart1) {
    state.springLearningPart1 = springLearningPart1;
  },
  'SET_LIFE_AFTER_COLLEGE_BLOG' (state, survivingLifeAfterCollege) {
    state.survivingLifeAfterCollege = survivingLifeAfterCollege;
  }
};

const actions = {
  initPersonalGrowthBlogContent: ({commit}) => {
    commit('SET_PERSONAL_GROWTH_BLOG', personalGrowth);
  },
  initSpringLearningPart1BlogContent: ({commit}) => {
    commit('SET_SPRING_LEARNING_1_BLOG', springLearningPart1);
  },
  initSurvivingLifeAfterCollegeContent: ({commit}) => {
    commit('SET_LIFE_AFTER_COLLEGE_BLOG', survivingLifeAfterCollege);
  }
};

const getters = {
  personalGrowth: state => {
    return state.personalGrowth;
  },
  springLearningPart1: state => {
    return state.springLearningPart1;
  },
  survivingLifeAfterCollege: state => {
    return state.survivingLifeAfterCollege;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
