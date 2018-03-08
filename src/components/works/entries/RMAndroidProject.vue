<template lang="html">
  <div class="col-container">
    <div class="image-container col-md-6">
    </div>
    <div class="col-md-6 content">
        <h1>Rick and Morty Android Soundboard</h1>
        <h3>December 2015</h3>
        <p>
          I was feeling energized after my first successful project (see below) and I wanted to keep the momentum going.
          With winter break coming up, I decided to try my hand at Android mobile development. Unlike my previous project,
          Android development used Java, a language I was more familiar with, so I was able to dive in without a tutorial.
        </p>
        <p>
          I wanted to start off with a simple app that I could show recruiters at the upcoming Career Fair. I decided to make
          a sound board application based of Rick and Morty, a show on Adult Swim that I'd recently gotten into.
        </p>
        <p>
          While I hadn't learned about agile development yet in class, this was really my first exposure to the pros of iterative development.
          When I originally developed this app, I created a new MediaPlayer class for each button (I has 33 in total). This was fine, but after clicking
          several buttons, the app would crash. I was not properly managing the lifecycle of the MediaPlayers. Every click created a new one, and my phone
          would run out of memory to handle all of them very quickly.
        </p>
        <p>
          To fix this, I reworked all the buttons to use one MediaPlayer instance. On click, the MediaPlayer would be instantiated with the right mp3 file to play,
          and once the mp3 finished playing the instance would be destroyed to free up memory for the next button clicked by the user. This was a painful lesson to learn
          since I had to re-work al 33 buttons. Had I tested my app after creating 5 or 10 buttons I would've saved a decent amount of time, and thus, I leanred the
          importance of iterative development!
        </p>
        <span> Technologies Used: Android Studio, Java, Git</span>
        <a class="btn btn-success" href="https://github.com/zsahmed/zsahmed.github.io">View Code</a>
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
  height: 600px;
}

.image-container {
  background-image: url("../../../assets/projects/rickAndMortySoundboard.png");
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
