<template lang="html">
  <nav class="navbar navbar-inverse">
    <div class="container">
      <div class="navbar-header">
        <router-link to="/" class="navbar-brand">Zakariya Ahmed</router-link>
      </div>

      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <router-link to="/works" activeClass="active" tag="li"><a>Works</a></router-link>
          <router-link to="/blog" activeClass="active" tag="li"><a>Blog</a></router-link>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li><a href="/src/assets/resume.pdf">Resume</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>

export default {
}
</script>

<style scoped>
  .navbar {
    margin-bottom: 0px;
    border-radius: 0px;
  }
</style>
