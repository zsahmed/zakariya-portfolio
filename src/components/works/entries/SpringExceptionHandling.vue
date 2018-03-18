<template lang="html">
  <div class="spring-col-container">
    <div class="col-md-6 content">
        <h1>Custom Spring Exception Handling</h1>
        <h3>October 2017</h3>
        <p>
          When I first started at Credera I was working on the front-end of our clients' web applications. The back-end services
          were all Java Spring microservices. It was hard for me to get into back-end development at first. The main barrier to entry
          for me was how to understand and debug 500 errors that originated from these services. I could set up remote debugging, but when
          an application had an api call that would call into one microservice, which would then call into another, and another, and so on, it
          was difficult to tell which microservice had the bug when all I got back was a 500 response.
        </p>
        <p>
          Then I found out about custom exception handling for Spring. Basically, you can create your own exceptions, and when you catch a bug
          in the service, we can throw our own custom exception instead of a generic 500 Internal Server Error. This really helped me get into
          server-side development, and I try to add custom exception handling to any back-end Spring Boot project I'm working on to help both the
          front and back-end developers digest what's wrong with our application when debugging.
        </p>
        <p>
          This is still a work in progress side project, but the purpose is to create a generic CRUD microservice that uses custom exception handling
          to inform the caller of any bugs or actions that are not allowed. I want to make this into a sort of tutorial that other developers may use
          to set up their own Spring exception handling.
        </p>
        <h2>Technologies Used</h2>

        <div class="row">
          <span class="tech-span-dubs col-md-2 col-md-offset-3">Spring Boot</span>
          <span class="tech-span-dubs col-md-2 col-md-offset-3">Java</span>
        </div>

        <div class="button-row">
          <a class="btn btn-success" href="https://github.com/zsahmed/spring-exception-handling">View Code</a>
        </div>

    </div>
    <div class="image-container col-md-6">
      <img src="../../../assets/projects/spring.png" class="spring-logo">
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style src="../../../css/work-entries.css" scoped></style>
