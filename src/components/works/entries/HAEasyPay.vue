<template lang="html">
  <div class="col-container">
    <div class="image-container easy-pay-background col-md-6">
      <slider class="slider"
        :auto="false"
        :control-btn="false"
        height="545px"
        width="680px">

        <slider-item class="slider-item">
          <img
            class="slider-img"
            src="../../../assets/projects/easy-pay-pages/changeCreditCard.png">
        </slider-item>

        <slider-item class="slider-item">
          <img
            class="slider-img"
            src="../../../assets/projects/easy-pay-pages/editCreditCard.png">
        </slider-item class="clider-item">

        <slider-item class="slider-item">
          <img
            class="slider-img"
            src="../../../assets/projects/easy-pay-pages/newCc.png">
        </slider-item class="clider-item">

        <slider-item class="slider-item">
          <img
            class="slider-img"
            src="../../../assets/projects/easy-pay-pages/editBillingAddress.png">
        </slider-item>

      </slider>
    </div>
    <div class="col-md-6 content">
        <h1>HomeAdvisor - EasyPay</h1>
        <h3>Janurary 2017 - March 2017</h3>
        <p>
          My first assignment for HomeAdvisor was a front-end project known as EasyPay. HomeAdvisor generated their revenue from
          matching professionals ("Service Providers") to homeowners. Service Providers pay pay for leads, or to be matched with homeowners
          which makes this service free for the homeowner. Before EasyPay, the invoicing between the Service Provider and homeowner was handled
          outside of HomeAdvisor's domain. With EasyPay, HomeAdvisor wanted to allow the consumer to pay their invoices on their site. HomeAdvisor
          would take a small portion as a fee and pass the rest onto the Service Provider.
        </p>
        <p>
          Our team was tasked with building out the front-end views that allowed the consumer to manage their payment methods. This project
          presented several challanges for me. HomeAdvisor's front-end single page application was written using the Jade templeting language,
          as opposed to HTML. Also, instead of using jQuery for DOM manipulation, they built their own JS library that we needed to learn very quickly
          to deliver this project on time. This was also my first time working with the CSS pre-proccessor LESS.
        </p>
        <p>
          Since we were dealing with sensitive consumer information such as credit cards, we also needed our users to create PCI compliant passwords.
          I enjoyed working on this aspect of the project because I got to try my hand at requirement gathering, specifically, what counts as PCI
          compliant and how would we implement such a feature. After some research, I learned we could use front-end JS regex validation to confirm
          the consumer was creating a secure password.
        </p>
        <p>
          While this engagement had some unique challanges, I thoughouly enjoyed being on a project from start to finish. Getting to see the
          full SDLC of EasyPay was a great learning opportunity for me, and I was able to take a lot of lessons and apply them to future projects
          with HomeAdvisor.
        </p>

        <h2>Technologies Used</h2>

        <div class="row tech-row">
          <span class="tech-span-trips col-md-4">JavaScript</span>
          <span class="tech-span-trips col-md-4">CSS (LESS)</span>
          <span class="tech-span-trips col-md-4">Jade</span>
        </div>

        <div class="row tech-row">
          <span class="tech-span-trips col-md-4">Jenkins</span>
          <span class="tech-span-trips col-md-4">Git</span>
          <span class="tech-span-trips col-md-4">Grunt</span>
        </div>

        <span class="source-code"> Source Code Available Upon Request.</span>
    </div>
  </div>
</template>

<script>
  import { Slider, SliderItem } from 'vue-easy-slider';

  export default {
    components: {
      Slider,
      SliderItem
    }
  }
</script>

<style src="../../../css/work-entries.css" scoped></style>
