<template lang="html">
  <div class="works-container">
    <div class="landingPage"></div>
    <hr>

    <div class="toggle-container">
      <div class="row">
        <button class="btn btn-success" @click="showAll">All Projects</button>
        <button class="btn btn-danger" @click="showProfessional">Professional</button>
        <button class="btn btn-danger" @click="showPersonal">Personal</button>
      </div>
    </div>


    <template v-if="professional">
      <app-opp-leads-project></app-opp-leads-project>
      <app-same-day-service-project></app-same-day-service-project>
      <app-easy-pay-project></app-easy-pay-project>
      <app-vizient-project></app-vizient-project>
    </template>

    <template v-if="personal">
      <app-gunpla-webscraper-project></app-gunpla-webscraper-project>
      <app-spring-exception-project></app-spring-exception-project>
      <app-rick-and-morty-project></app-rick-and-morty-project>
      <app-romo-project></app-romo-project>
    </template>

  </div>
</template>

<script>
import TonyRomoJsProject from './entries/TonyRomoJsProject.vue';
import RMAndroidProject from './entries/RMAndroidProject.vue';
import SpringExceptionHandling from './entries/SpringExceptionHandling.vue';
import GunplaWebscraper from './entries/GunplaWebscraper.vue';

import Vizient from './entries/Vizient.vue';
import HAEasyPay from './entries/HAEasyPay.vue';
import HASameDayService from './entries/HASameDayService.vue';
import HAOppLeads from './entries/HAOppLeads.vue';

export default {
  data() {
    return {
      personal: true,
      professional: true
    }
  },
  methods: {
    showPersonal() {
      this.personal = true;
      this.professional = false;
    },
    showProfessional() {
      this.personal = false;
      this.professional = true;
    },
    showAll() {
      this.personal = true;
      this.professional = true;
    }
  },
  components: {
    appRomoProject: TonyRomoJsProject,
    appRickAndMortyProject: RMAndroidProject,
    appSpringExceptionProject: SpringExceptionHandling,
    appGunplaWebscraperProject: GunplaWebscraper,
    appVizientProject: Vizient,
    appEasyPayProject: HAEasyPay,
    appSameDayServiceProject: HASameDayService,
    appOppLeadsProject: HAOppLeads
  }
}
</script>

<style lang="css" scoped>
  .works-container {
    overflow-x: hidden;
  }

  .landingPage {
    background-image: url("../../assets/projects/worksLandingPage.jpg");
    background-size: cover;
    width: 100%;
    height: 500px;
  }

  .toggle-container {
    width: 90%;
    margin: auto;
    margin-bottom: 50px;
  }

  hr {
    margin: 0 0 40px 0;
    border-top: 5px solid #34495e;
  }
</style>
