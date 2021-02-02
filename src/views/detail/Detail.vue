<template>
  <div id="detail">
    <detail-nav-bar />
    <detail-swipe :banners="topImages"/>
  </div>
</template>

<script>
import { getDetail } from 'network/detail';

import DetailNavBar from './childComps/DetailNavBar.vue';
import DetailSwipe from './childComps/DetailSwipe.vue';

export default {
  components: { DetailNavBar, DetailSwipe },
  name: 'Detail',
  data() {
    return {
      iid: null,
      topImages: [],
    };
  },
  created() {
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then((res) => {
      this.topImages = res.data.result.itemInfo.topImages;
      console.log(this.topImages);
    });
  },
};
</script>

<style scoped>
</style>
