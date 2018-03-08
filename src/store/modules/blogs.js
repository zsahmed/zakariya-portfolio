import personalGrowth from '../../blog-data/personalGrowth.js';
import springLearningPart1 from '../../blog-data/springLearningPart1.js';

const state = {
  personalGrowth: null,
  springLearningPart1: null
};

const mutations = {
  'SET_PERSONAL_GROWTH_BLOG' (state, personalGrowth) {
    state.personalGrowth = personalGrowth;
  },
  'SET_SPRING_LEARNING_1_BLOG' (state, springLearningPart1) {
    state.springLearningPart1 = springLearningPart1;
  }
};

const actions = {
  initPersonalGrowthBlogContent: ({commit}) => {
    commit('SET_PERSONAL_GROWTH_BLOG', personalGrowth);
  },
  initSpringLearningPart1BlogContent: ({commit}) => {
    commit('SET_SPRING_LEARNING_1_BLOG', springLearningPart1);
  }
};

const getters = {
  personalGrowth: state => {
    return state.personalGrowth;
  },
  springLearningPart1: state => {
    return state.springLearningPart1;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
