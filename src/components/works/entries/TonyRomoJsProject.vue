<template lang="html">
  <div class="col-container">
    <div class="col-md-6 content">
        <h1>Tony Romo's Rushed Unlicensed Adventure</h1>
        <h3>November 2015</h3>
        <p>
          My first attempt at building something outside of the classroom. I was upset when I learned
          Computer Science in school did not teach you actual programming languages outside of Java and C, and I wanted
          to learn the hot web browser language, JavaScript. So I decided to learn on my own. I am heavily investing in playing games
          so the first project I'd make was, well, a game.
        </p>
        <p>
          My mentor recommended I check out PhaserJS, a library specifically built for games on a web browser. I found a tutorial
          for PhaserJS which built the game Asteroids from scratch, and then I decided to add my own little spin on it.
        </p>
          <h2>Technologies Used</h2>
          <div class="row">
            <span class="col-md-2 col-md-offset-3">JavaScript</span>
            <span class="col-md-2 col-md-offset-3">PhaserJS</span>
          </div>
          <div class="row">
            <span class="col-xs-2 col-md-offset-3">HTML</span>
            <span class="col-xs-2 col-md-offset-3">Git</span>
          </div>
            <a class="btn btn-success" href="https://github.com/zsahmed/zsahmed.github.io">View Code</a>
            <a class="btn btn-danger" href="http://zsahmed.github.io/">Play!</a>

    </div>
    <div class="image-container col-md-6">
      <!-- <img src="../../../assets/projects/tonyRomo.png" alt=""> -->
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
  overflow-x: hidden;
  overflow-y: hidden;
}

.image-container {
  background-image: url("../../../assets/projects/tonyRomo.png");
  background-size: contain;
  height: 500px;
  display: table-cell;
}

img {
  max-width: 100%;
  max-height: 100%;
}

.content {
  background-color: white;
  padding-left: 15px;
  display: table-cell;
  height: 100%;
}

h1 {
  font-size: 32px;
}

h2 {
  text-align: center;
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
