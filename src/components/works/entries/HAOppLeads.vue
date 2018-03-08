<template lang="html">
  <div class="col-container">
    <div class="image-container col-md-6"></div>
    <div class="col-md-6 content">
        <h1>HomeAdvisor - Opportunity Leads</h1>
        <h3>September 2017 - April 2018</h3>
        <p>
          Despite having a network of 150,000+ Service Providers, nearly 75% of service requests have zero or one accept because Service Providers in
          the matching pool are either out of marketing spend budget, have their leads turned off, or aren't profiled for the exact task/zip
          code combination of the service request. To address this, HomeAdvisor engaged Credera to help implement a new product that improves its
          ability to monetize the ~23MM open accept slots that otherwise go unfilled.
        </p>
        <p>
          This is my favorite project to date. We had an aggressive deadline, and this was a high impact project for the client now that they are a
          public company. My team got to build the micro-service that would handle this experience from the ground up. The Opportunity Leads API would
          be responsible for creating and managing the state of the service requests, allowing Service Providers and Consumers to opt-in to the request,
          and it would need to manage the eligibility of Service Providers for this experience (similar to the work done on SameDay Service).
        </p>
        <p>
          I touched a lot of different technologies on this project. I created RESTful API endpoints for the micro-service, implemented JDBC to allow
          our service to communicate with HomeAdvisor's Oracle SQL database. We also implemented a Coherence caching layer to improve performance when
          calls to the database were required. I was also responsible for updating the ElasticSearch index mappings to account for this new type of
          experience, so this project required some scripting as well.
        </p>
        <p>
          This project was also a great growing experience for me because my Project Director gave me more leadership opportunities. Since I have been
          working with in my client's domain for over a year now, I was also responsible for code reviewing the festures built by our junior developes in
          order to make sure their code adhered to HomeAdvisor's best-practices. This was on top of my own development responsibilities and assiting QA
          with end to end testing.
        </p>
        <p>
          Opportunity Leads was an extremly challanging, yet rewarding project. This project pushed me to my limits and made me grow and learn at a rate I
          didn't think was possible. The team is still working on continuous improvements to the product, but I can happily say it is currently out in
          production generating revenue for the client!
        </p>
        <span> Technologies Used: Spring Boot, Maven, Oracle SQL, Jenkins, Apache Kafka, ElasticSearch, Coherence, Groovy, JIRA, Confluence, Git</span>
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
