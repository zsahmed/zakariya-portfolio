<template lang="html">
  <div class="vizient-col-container">
    <div class="col-md-6 content">
        <h1>Vizient Savings Actualizer Support</h1>
        <h3>August 2016 - November 2016</h3>
        <p>
          This was the first client project I was assigned to when I started at Credera. This web application was built to allow Vizient's
          clientele (hospitals and health care providers) to buy health care supplies in bulk and analyze the current deals they were getting in
          order to find the best way to save on their purchases and continue to buy at better rates.
        </p>
        <p>
          By the time I rolled on, the project was deployed and delivered. My main responsibility was to handle defects
          found during the warranty period by QA. Most of my time was spent fixing front-end bugs and helping the BI team map data generated
          by the database's stored procedures to the correct front-end views.
        </p>

        <h2>Technologies Used</h2>

        <div class="row">
          <span class="col-md-4">AngularJS</span>
          <span class="col-md-4">HTML</span>
          <span class="col-md-4">CSS</span>
        </div>

        <div class="row">
          <span class="col-md-4">Spring Boot</span>
          <span class="col-md-4">Jenkins</span>
          <span class="col-md-4">Kanban</span>
        </div>

        <div class="button-row">
          <a class="btn btn-success" :href="savingsActualizerRelease">Read About Savings Actualizer</a>
        </div>
    </div>
    <div class="image-container vizient-image-container col-md-6">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      savingsActualizerRelease: 'http://newsroom.vizientinc.com/press-release/vizient/vizient-inc-announces-launch-new-supply-chain-analytics-platform'
    }
  }
}
</script>

<style src="../../../css/work-entries.css" scoped>

.col-container {
  display: table; /* Make the container element behave like a table */
  width: 100%; /* Set full-width to expand the whole page */
  height: 500px;
}

.image-container {
  background-image: url("../../../assets/projects/vizient.jpg");
  background-position: center;
  height: 100%;
  display: table-cell;
}

.content {
  background-color: white;
  padding-left: 25px;
  display: table-cell;
  height: 100%;
}

.row {
  width: 75%;
  margin: 0 auto;
}

h1 {
  font-size: 32px;
}

h2 {
  text-align: center;
  margin-top: 35px;
  margin-bottom: 20px;
}

h3 {
  font-size: 20px;
  margin-top: 5px;
  margin-bottom: 20px;
}

p {
  width: 100%;
}

span {
  display: block;
  margin-bottom: 15px;
  text-align: center;
}

</style>
