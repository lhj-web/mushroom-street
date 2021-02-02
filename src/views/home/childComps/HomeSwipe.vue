<template>
  <van-swipe :autoplay="3000" class="van-swipe">
    <van-swipe-item v-for="(item, index) in banners" :key="index">
      <a :href="item.link">
        <img v-lazy="item.image" @load="imageLoad"/>
      </a>
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  name: 'HomeSwipe',
  data() {
    return {
      isLoad: false,
    };
  },
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    imageLoad() {
      if (!this.isLoad) {
        this.$emit('swipeImageLoad');
        this.isLoad = true;
      }
    },
  },
};
</script>

<style scoped>
.van-swipe img {
  width: 100%;
  height: 200px;
}
</style>
