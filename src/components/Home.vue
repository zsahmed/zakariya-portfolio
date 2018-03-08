<template lang="html">
  <div>
    <div class="landingPage">
      <div class="landingPageText">
        <h3>Full Stack Developer. Technology Consultant.</h3>
        <h3>Gundam Enthusiast.</h3>
      </div>
    </div>

    <div class="home-content">
      <div class="about-me">
        <h1>Hello There!</h1>
        <p class="description">
          Thanks for visiting my page! My name is Zakariya, Zak for short. I gratuated from UT Dallas in 2016, and for the past two years I've
          been working as a full stack developer and technology consultant for Credera. Most of my time is spent working on our clients'
          web applications, helping them solve their toughest technology challanges to meet the demands of 21st century consumers. My main area of
          expertise is SOA (service oriented architecture), building micro-service applications, and front-end technologies such as VueJS and AngularJS.
          I love working in an agile software development lifecycle and getting to constantly iterate and improve upon the features we build for our
          clients.
        </p>
        <p class="description">
          Outside of work I love spending my time reading, eating, and going on walks with my dog. I'm also a massive Star Wars nerd. I'd be more
          than happy to argue with you about why the prequels are masterpieces. I may not be very athletic, but in the fall you can catch me spending
          most of my Sundays watching football from noon to evening.
        </p>
        <p class="description">
          That's my elevator pitch! If you have time I'd love for you to check out some of my previous works or a blog post.
          Do you have a technology challange you're facing? Have any questions for a technology consultant? Please feel free to reach out to me with
          any questions, comments, or concerns, I would love to help!
        </p>
      </div>
      <div class="tech-listings">
        <h1 class="tech-listings-header">Technologies I've Worked With</h1>
        <div class="container">

          <div class="row">
            <div class="col-xs-6 col-sm-4 col-md-2 space-top">
              <img src="../assets/tech/javascript.svg" class="technologies">
              <span>JavaScript</span>
            </div>
            <div class="col-xs-6 col-sm-4 col-md-2 space-top">
              <img src="../assets/tech/html5.svg" class="technologies">
              <span>HTML</span>
            </div>
            <div class="col-xs-6 col-sm-4 col-md-2 space-top">
              <img src="../assets/tech/bootstrap.svg" class="technologies">
              <span>BootStrap</span>
            </div>
            <div class="col-xs-6 col-sm-4 col-md-2 space-top">
              <img src="../assets/tech/less.svg" class="technologies">
              <span>Less</span>
            </div>
            <div class="col-xs-6 col-sm-4 col-md-2 space-top">
              <img src="../assets/tech/vuejs.svg" class="technologies vue">
              <span>VueJs</span>
            </div>
            <div class="col-xs-6 col-sm-4 col-md-2 space-top">
              <img src="../assets/tech/angularjs.svg" class="technologies">
              <span>AngularJS</span>
            </div>
          </div>

          <div class="row">
            <div class="col-xs-6 col-sm-4 col-md-2 space-top">
              <img src="../assets/tech/maven.svg" class="technologies">
              <span>Maven</span>
            </div>
            <div class="col-xs-6 col-sm-4 col-md-2 space-top">
              <img src="../assets/tech/java.svg" class="technologies java">
              <span>Java 8</span>
            </div>
            <div class="col-xs-6 col-sm-4 col-md-2 space-top">
              <img src="../assets/tech/spring.svg" class="technologies">
              <span>Spring</span>
            </div>
            <div class="col-xs-6 col-sm-4 col-md-2 space-top">
              <img src="../assets/tech/elastic.png" class="technologies elastic">
              <span>ElasticSearch</span>
            </div>
            <div class="col-xs-6 col-sm-4 col-md-2 space-top">
              <img src="../assets/tech/kafka.png" class="technologies kafka">
              <span>Kafka</span>
            </div>
            <div class="col-xs-6 col-sm-4 col-md-2 space-top">
              <img src="../assets/tech/junit5.png" class="technologies">
              <span>JUnit</span>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-3  space-top">
              <img src="../assets/tech/mysql.png" class="technologies">
              <span>MySQL</span>
            </div>
            <div class="col-sm-3  space-top">
              <img src="../assets/tech/oracle_sql.png" class="technologies">
              <span>Oracle SQL</span>
            </div>
            <div class="col-sm-3 space-top">
              <img src="../assets/tech/dynamodb.svg" class="technologies">
              <span>Dynamo DB</span>
            </div>
            <div class="col-sm-3 space-top">
              <img src="../assets/tech/oracle_coherence.jpg" class="technologies">
              <span>Oracle Coherence</span>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-4  space-top">
              <img src="../assets/tech/aws.svg" class="technologies">
              <span>AWS</span>
            </div>
            <div class="col-sm-4  space-top">
              <img src="../assets/tech/jenkins.png" class="technologies">
              <span>Jenkins</span>
            </div>
            <div class="col-sm-4  space-top">
              <img src="../assets/tech/gitlab.png" class="technologies">
              <span>GitLab</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
  .landingPage {
    background-image: url("../assets/landingPage.png");
    background-size: cover;
    width: 100%;
    height: 600px;
    margin: 0px;
  }

  .landingPageText {
    position: absolute;
    color: white;
    margin-top: 100px;
    margin-left: 75px;
    background: rgba(0,0,0,0.5);
    height: 75px;
    width: 500px;
  }

  .home-content {
  }

  .about-me {
    background-color: #fafafa;
    padding: 20px 0px 50px 0px;
  }

  .tech-listings {
    padding: 20px 0px 50px 0px;
  }

  .description {
    text-align: center;
    margin: 25px 300px 0px 300px;
    font-family: 'Muli';
  }

  .technologies {
    margin: 0 auto;
    max-height: 80px;
    min-height: 80px;
    max-width: 160px;
    display: inherit;
  }

  .elastic {
    padding-bottom: 30px;
  }

  .space-top {
    margin-top: 60px;
  }

  span {
    display: block;
    margin: 10px;
    text-align: center;
    color: #14466b;
    font-family: 'Muli';
    font-size: 16px;
  }

  h3 {
    font-size: 20px;
    margin-top: 10px;
    margin-left: 10px;
    margin-bottom: -10px;
    position: center;
    color: white;
    opacity: 1;
  }

  h1 {
    text-align: center;
    margin-top: 0px;
    padding-top: 20px;
  }

  body {
    overflow-y: scroll;
    height: 100%;
  }
</style>
