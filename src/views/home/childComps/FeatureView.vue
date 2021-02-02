<template>
  <div class="feature-view">
    <a href="https://act.mogujie.com/zzlx67">
    <img :src="img">
    </a>
  </div>
</template>

<script>
import HomeRecommend from 'assets/img/home/recommend_bg.jpg';

export default {
  name: 'FeatureView',
  data() {
    return {
      img: HomeRecommend,
    };
  },
};
</script>

<style scoped>
.feature-view img {
  width: 100%;
  height: 40vh;
}

</style>
