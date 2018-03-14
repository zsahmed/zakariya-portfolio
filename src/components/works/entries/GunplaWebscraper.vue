<template lang="html">
  <div class="col-container">
    <div class="image-container col-md-6">
    </div>
    <div class="col-md-6 content">
        <h1>Gunpla Webscraper</h1>
        <h3>November 2017</h3>
        <p>
          To be fair, don't give me too much credit for this one. This is a webscraper designed to pull information about
          Gundam model kits from a wiki page. Most of the work was completed by Jorick Caberio (view his Medium article about webscraping
          <a :href="mediumLink">here</a>).
        </p>
        <p>
          I'm a huge fan of the Japanese <i>Gundam</i> franchise, as well as building their model kits. I wanted to build a project using information on
          the kits, so I started looking around for an API that might exist. I stumbled upon Jorick's webscraper and decided to pull it down.
          Once I got it working, I noticed that it was only giving me information on the first 5 kits. The wiki page had been modified since
          Jorick originally created this webscraper, so it was no longer functioning as designed.
        </p>
        <p>
          Here was my problem: I wanted to scrape the info on these model kits. I didn't want to do it by hand ( they're 190+ kits! ). I tried
          contacting Jorick to no avail. I could try learning Python and Selenium, but with a 40 hour work week and other responsibilities, that would
          take too long. The quickest and best option was to attempt to update the existing Pyton script to work for the new wiki page.
        </p>
        <p>
          Thankfully, I was able to get it working with a few edits! After successfully pulling down the data, I created a NodeJS script to iterate
          through the list of kits and assign them ids. From there, I uploaded my data to Firebase to be used as an API.
        </p>

        <h2>Technologies Used</h2>

        <div class="row">
          <span class="col-md-2 col-md-offset-3">Python</span>
          <span class="col-md-2 col-md-offset-3">Git</span>
        </div>

        <div class="row">
          <span class="col-xs-2 col-md-offset-3">NodeJS</span>
          <span class="col-xs-2 col-md-offset-3">Firebase</span>
        </div>

        <div class="button-row">
          <a class="btn btn-success" href="https://github.com/zsahmed/gunpla_webscraper">View Code</a>
          <a class="btn btn-danger" href="https://mg-gunpla-api.firebaseio.com/gunpla.json">View Firebase API</a>
        </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mediumLink:'https://medium.com/@jorick.caberio/building-a-gunpla-api-using-python-selenium-phantomjs-and-firebase-e68143d3fd3c'
    }
  }
}
</script>

<style scoped>

.col-container {
  display: table; /* Make the container element behave like a table */
    width: 100%; /* Set full-width to expand the whole page */
}

.image-container {
  background-image: url("../../../assets/projects/dom.png");
  background-size: cover;
  height: 700px;
  display: table-cell;
}

.content {
  background-color: white;
  padding-left: 25px;
  display: table-cell;
  height: 100%;
}

.button-row {
  margin-top: 20px;
  text-align: center;
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
}

</style>
