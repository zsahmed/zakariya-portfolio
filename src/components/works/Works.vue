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

    <transition-group  name="slide" mode="out-in">

        <app-opp-leads-project v-if="professional" key="OL"></app-opp-leads-project>
        <app-same-day-service-project v-if="professional" key="SDS"></app-same-day-service-project>
        <app-easy-pay-project v-if="professional" key="easyPay"></app-easy-pay-project>
        <app-vizient-project v-if="professional" key="vizient"></app-vizient-project>

        <app-gunpla-webscraper-project v-if="personal" key="gunpla"></app-gunpla-webscraper-project>
        <app-spring-exception-project v-if="personal" key="spring"></app-spring-exception-project>
        <app-rick-and-morty-project v-if="personal" key="rm"></app-rick-and-morty-project>
        <app-romo-project v-if="personal" key="romo"></app-romo-project>

    </transition-group>

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
    height: 550px;
  }

  .toggle-container {
    background-color: #fafafa;
    z-index: 1;
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
    border-bottom: 5px solid #345e49;
  }

  .professional {
    border-bottom: 5px solid #34495e;
  }

  .personal {
    border-bottom: 5px solid #5e3449;
  }

  .landingPage-hr {
    margin: 0 auto 0 auto;
    border-top: 5px solid #34495e;
    animation-name: line_animation;
    animation-duration: 1s;
    animation-timing-function: linear;
  }

  @keyframes line_animation {
     from {
         width: 0%;
     }
     to {
         width:100%;
     }
   }

  .toggle-container-hr {
    margin-bottom: 0;
  }

  .slide-enter {
    opacity: 0;
  }

  .slide-enter-active {
    animation: slide-in 1s ease-out forwards;
    transition: opacity 0.5s;
  }

  .slide-leave {

  }

  .slide-leave-active {
    animation: slide-out 1s ease-out forwards;
    transition: opacity 0.5s;
    opacity: 0;
    position: absolute;
  }

  .slide-move {
    transition: transform 1s;
  }

  @keyframes slide-in {
    from {
      transform: translateY(-100px);
    }
    to {
      transform: translateY(0);
    }
  }

  @keyframes slide-out {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-100px);
    }
  }
</style>
