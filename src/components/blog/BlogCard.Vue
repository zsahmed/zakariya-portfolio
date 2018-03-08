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
  margin-left: auto;
  margin-right: auto;
}


.blog-card-img {
  max-width: 100%;
  max-height: 100%;
  margin-left: auto;
	margin-right: auto;
	display: block;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  border-top: 1px solid #00008B;
  border-left: 1px solid #00008B;
  border-right: 1px solid #00008B;
  border-bottom: 2px solid black;
}

.blog-card-p {
  font-size: 25px;
  padding: 10px 15px 10px 15px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  border-bottom: 2px solid #00008B;
  border-left: 2px solid #00008B;
  border-right: 2px solid #00008B;
}
</style>
