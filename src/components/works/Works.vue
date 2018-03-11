<template lang="html">
  <div class="works-container">
    <div class="landingPage"></div>
    <hr class="landingPage-hr">

    <div class="toggle-container">
      <div class="row">
        <ul class="nav-tabs">
          <li
            class="tab"
            :class="{all: dynamicCss.attachAll}"
            @click="showAll">
            All Projects
          </li>
          <li
            class="tab"
            :class="{professional: dynamicCss.attachProfessional}"
            @click="showProfessional">
            Professional</li>
          <li
            class="tab"
            :class="{personal: dynamicCss.attachPersonal}"
            @click="showPersonal">
            Personal</li>
        </ul>
      </div>
      <hr class="toggle-container-hr">
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
      professional: true,
      dynamicCss: {
        attachAll: true,
        attachProfessional: false,
        attachPersonal: false
      }
    }
  },
  methods: {
    showPersonal() {
      this.personal = true;
      this.professional = false;

      this.updateTabCss(false, false, true);
    },
    showProfessional() {
      this.personal = false;
      this.professional = true;

      this.updateTabCss(false, true, false);
    },
    showAll() {
      this.personal = true;
      this.professional = true;

      this.updateTabCss(true, false, false);
    },
    updateTabCss(attachAll, attachProfessional, attachPersonal) {
      this.dynamicCss.attachAll = attachAll;
      this.dynamicCss.attachProfessional = attachProfessional;
      this.dynamicCss.attachPersonal = attachPersonal;
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
    font-family: 'Muli';
  }

  .landingPage {
    background-image: url("../../assets/projects/worksLandingPage.png");
    background-size: cover;
    width: 100%;
    height: 500px;
  }

  .toggle-container {
    background-color: #fafafa;
  }

  .row {
    margin: auto;
    padding: 50px 0 50px 0;
  }

  .nav-tabs {
    list-style: none;
    border-bottom: none;
    padding: 0;
    margin: 0 auto;
  }

  .tab {
    font-size: 18px;
    float: none;
    display: inline;
    padding-left: 100px;
    padding-right: 10px;
  }

  .all {
    border-bottom: 5px solid #2E8B57;
  }

  .professional {
    border-bottom: 5px solid #2F4F4F;
  }

  .personal {
    border-bottom: 5px solid #4B0082;
  }

  .landingPage-hr {
    margin: 0;
    border-top: 5px solid #34495e;
  }

  .toggle-container-hr {
    margin-bottom: 0;
  }

  /* hr {

    #eaeaea
  } */

  body {

  }
</style>
