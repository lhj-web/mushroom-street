<template>
  <van-swipe :autoplay="3000" class="van-swipe">
    <van-swipe-item v-for="(item, index) in banners" :key="index">
        <img v-lazy="item" />
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  name: 'DetailSwipe',
  data() {
    return {};
  },
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.van-swipe {
  height: 40vh;
  width: 100%;
  overflow: hidden;
}
</style>
