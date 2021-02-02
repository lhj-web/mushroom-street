<template>
  <nav-bar class="nav-bar">
    <template v-slot:left>
      <img src="~assets/img/common/back.png" @click="backClick">
    </template>
    <template v-slot:center>
      <div class="title">
        <div
          v-for="(item, index) in title"
          :key="index"
          :class="currentIndex===index?'title-item':''"
          @click="isClick(index)"
        >{{item}}</div>
      </div>
    </template>
  </nav-bar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue';

export default {
  components: { NavBar },
  name: 'DetailNavBar',
  data() {
    return {
      title: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0,
    };
  },
  methods: {
    isClick(index) {
      this.currentIndex = index;
    },
    backClick() {
      // this.$router.go(-1);
      this.$router.back();
    },
  },
};
</script>

<style scoped>
.title {
  display: flex;
  font-size: 13px;
  justify-content: space-around;
  /* color: ; */
}

.title-item {
  color: var(--color-high-text);
}

.nav-bar img {
  width: 30px;
  height: 30px;
  vertical-align: middle;
}
</style>
