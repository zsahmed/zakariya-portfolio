<template lang="html">
  <div class="col-container gray">
    <div class="col-md-6 content gray">
        <h1>HomeAdvisor - SameDay Service</h1>
        <h3>April 2017 - August 2017</h3>
        <p>
          My team was tasked with rolling out HomeAdvisor's SameDay Service offering nationally. HomeAdvisor's main matching experience, known as
          "Market Match", provided homeowner's with 3 - 4 Service Providers' contact information which the user could then call and request a quote with.
          The purpose of SameDay Service was to provide a more real-time experience. The API would determine which Service Providers were available and
          schedule an appointment for the request the day of.
        </p>
        <p>
          Before this project I was a little averse to back-end development. I enjoyed building front-end features because I could visabily see my progress,
          and Chrome Developer Tools also made front-end debugging a lot friendlier. With the back-end, server logs were difficult for me to read, and I
          wasn't very knowledgable about Java Spring. To my suprise, this project showed me that I actually prefer working with business logic and server-side
          technologies, I just needed to get out of my comfort zone.
        </p>
        <p>
          In order to launch this service nationally, we needed to build a pool of eligible Service Providers. HomeAdvisor only wants their best providers
          filling SameDay requests. Using JDBC, we created SQL queries to find eligible Service Providers based on the requirements we were given. We then
          built RESTful API endpoints to maintain the list of eligible Service Providers in the database.
        </p>
        <p>
          I also got to try my hand at devops on this project. We would use Jenkins to build our micro-service to testing enviornments, and when bugs arose
          I would have to SSH into HomeAdvisor's remote servers to read the logs and identify which part of the service was failing.
        </p>
        <p>
          Besides development, I was also in charge of creating testing scenarios for QA. We used Confluence to document all testing scenarios, and JIRA
          was our agile tool of choice to keep track of the features we were building.
        </p>

        <h2>Technologies Used</h2>

        <div class="row">
          <span class="col-md-4">Spring Boot</span>
          <span class="col-md-4">Maven</span>
          <span class="col-md-4">Oracle SQL</span>
        </div>

        <div class="row">
          <span class="col-md-4">Jenkins</span>
          <span class="col-md-4">Apache Kafka</span>
          <span class="col-md-4">ElasticSearch</span>
        </div>

        <div class="row">
          <span class="col-md-4">Coherence</span>
          <span class="col-md-4">Groovy</span>
          <span class="col-md-4">JIRA</span>
        </div>

        <div class="row">
          <span class="col-md-4">Confluence</span>
          <span class="col-md-4 col-md-offset-4">Git</span>
        </div>

        <span class="source-code"> Source Code Available Upon Request.</span>
    </div>

    <div class="image-container col-md-6">
        <img
          class="ha-logo"
          src="../../../assets/projects/homeadvisor.png">
        </img>
    </div>

  </div>
</template>

<script>
export default {
}
</script>

<style src="../../../css/work-entries.css" scoped>

.col-container {
  display: table; /* Make the container element behave like a table */
  width: 100%; /* Set full-width to expand the whole page */
  height: 700px;
}
</style>
