<template lang="html">
  <div class="col-container">
    <div class="image-container col-md-6"></div>
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
        <span> Technologies Used: JavaScript, CSS (LESS), Jade, Jenkins, Git, Grunt</span>
        <span> Source Code Available Upon Request.</span>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>

.col-container {
  display: table; /* Make the container element behave like a table */
  width: 100%; /* Set full-width to expand the whole page */
  height: 700px;
}

.image-container {
  background-image: url("../../../assets/projects/vizient.jpg");
  background-size: cover;
  height: 100%;
  display: table-cell;
}

.content {
  background-color: white;
  padding-left: 25px;
  display: table-cell;
  height: 100%;
}

h1 {
  font-size: 32px;
}

p {
  width: 100%;
}

span {
  display: block;
  margin-bottom: 15px;
}

</style>
