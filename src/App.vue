<template lang="html">
  <div class="app-container">
    <app-header></app-header>
    <transition name="fade" mode="out-in" appear>
      <router-view></router-view>
    </transition>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    appHeader: Header,
    appFooter: Footer
  },
}
</script>

<style scoped>
  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    transition: opacity 1s;
  }

  .fade-leave {

  }

  .fade-leave-active {
    transition: opacity .5s;
    opacity: 0;
  }


</style>
