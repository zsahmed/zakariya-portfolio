<template lang="html">
  <div class="blog-card">
    <img :src="info.imageLink" class="blog-card-img">
    <p class="blog-card-p">{{ info.title }}</p>
  </div>
</template>

<script>
export default {
  props: ['info']
}
</script>

<style lang="css" scoped>

.blog-card {
  width: 1000px;
  margin: 25px auto 25px auto;
  color: #34495e;
  box-shadow: 2px 4px #8888;
}


.blog-card-img {
  max-width: 100%;
  max-height: 100%;
  margin-left: auto;
	margin-right: auto;
	display: block;
  border-top: 1px solid #34495e;
  border-left: 1px solid #34495e;
  border-right: 1px solid #34495e;
  border-bottom: 2px solid #34495e;
}

.blog-card-p {
  font-size: 25px;
  padding: 10px 15px 10px 15px;
  font-family: 'Muli';
  background-color: #fafafa;
  border-bottom: 2px solid #34495e;
  border-left: 2px solid #34495e;
  border-right: 2px solid #34495e;
}
</style>
