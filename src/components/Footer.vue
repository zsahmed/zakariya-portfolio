<template lang="html">
  <nav class="footer navbar-inverse navbar-bottom">
    <div class="container">
      <div class="col-md-4 left">
          <i class="fas fa-envelope"></i>
          <h6>zakariya.ahmed34@gmail.com</h6>
      </div>
      <div class="col-md-4 middle">
          <i class="fab fa-linkedin"></i>
          <hr>
          <i class="fab fa-github"></i>
      </div>
      <div class="col-md-4 right">
          <i class="fas fa-phone"></i>
          <h6>214.986.9949</h6>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>

.navbar {
  margin-bottom: 0px;
  border-radius: 0px;
  margin-top: 25px;
}

.navbar-header {
  display: inline-block;
}

.fab {
  color: #F0FFFF;
}

.fas {
  color: #F0FFFF;
  display: inline-block;
}

.left {
  margin-top: 12px;
  margin-bottom: 12px;
}

.middle {
  text-align: center;
  margin-top: 5px;
  margin-bottom: 5px;
}

.right {
  text-align: right;
  margin-top: 12px;
  margin-bottom: 12px;
}

h6 {
  color: #F0FFFF;
  display: inline-block;
  margin-left: 7px;
}

hr {
  margin-top: 5px;
  margin-bottom: 5px;
  width: 20%;
  border-top: 2px solid;
}
</style>
