<template lang="html">
  <div class="col-container">
    <div class="image-container rm-image-container col-md-6">
    </div>
    <div class="col-md-6 content">
        <h1>Rick and Morty Android Soundboard</h1>
        <h3>December 2015</h3>
        <p>
          I was energized after my first successful project (see below), and I wanted to keep the momentum going.
          I decided to try my hand at Android mobile development since the Android SDK used a language I was familiar with, Java.
        </p>
        <p>
          I wanted to start off with a simple app that I could show recruiters at the upcoming Career Fair. I decided to make
          a sound board application based of off the Adult Swim show Rick and Morty.
        </p>
        <p>
          Although I hadn't learned of agile development yet in class, this project would show me the importance of iterative development.
          When I originally developed this app, I created a new MediaPlayer class for each button (I has 33 in total). This was fine, but after clicking
          several buttons, the app would crash. I was not properly managing the lifecycle of the MediaPlayers. Every click created a new instance,
          and my phone quickly ran out of memory.
        </p>
        <p>
          To fix this, I reworked all the buttons to use one MediaPlayer instance. On click, the MediaPlayer would be instantiated with
          the mp3 file to play, and once the mp3 finished playing the instance would be destroyed to free up memory for the next button clicked
          by the user. This was a painful lesson to learn since I had to re-work al 33 buttons. Had I tested my app after creating 5 or 10
          buttons I would've saved a decent amount of time, and thus, I learned the importance of iterative development!
        </p>
        <h2>Technologies Used</h2>

        <div class="row">
          <span class="tech-span-dubs col-md-2 col-md-offset-3">Android Studio</span>
          <span class="tech-span-dubs col-md-2 col-md-offset-3">Java</span>
          <span class="tech-span-dubs col-md-2 col-md-offset-3">Git</span>
        </div>

        <div class="button-row">
          <a class="btn btn-success" href="https://github.com/zsahmed/zsahmed.github.io">View Code</a>
        </div>

    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style src="../../../css/work-entries.css" scoped></style>
