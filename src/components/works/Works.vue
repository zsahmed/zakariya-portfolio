<template lang="html">
  <div class="works-container">
    <div class="landingPage"></div>
    <app-opp-leads-project></app-opp-leads-project>
    <app-same-day-service-project></app-same-day-service-project>
    <app-easy-pay-project></app-easy-pay-project>
    <app-vizient-project></app-vizient-project>
    <app-gunpla-webscraper-project></app-gunpla-webscraper-project>
    <app-spring-exception-project></app-spring-exception-project>
    <app-rick-and-morty-project></app-rick-and-morty-project>
    <app-romo-project></app-romo-project>

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
    margin-bottom: 50px;
  }
</style>
