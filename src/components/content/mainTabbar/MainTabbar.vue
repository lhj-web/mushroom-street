<template>
  <tab-bar>
    <div
      v-for="(m, index) in message"
      :key="index"
      :id="num==index? 'active': ''"
      @click="changeColor(index)"
    >
      <tab-bar-item :path="paths[index]">
        <img :src="m.address" />
        <div>{{ m.name }}</div>
      </tab-bar-item>
    </div>
  </tab-bar>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar.vue';
import TabBarItem from 'components/common/tabbar/TabBarItem.vue';
import ImgHome from 'assets/img/tabbar/home.png';
import ImgCate from 'assets/img/tabbar/category.png';
import ImgShop from 'assets/img/tabbar/shopping-cart-one.png';
import ImgMe from 'assets/img/tabbar/me.png';

export default {
  name: 'MainTabbar',
  components: {
    TabBar,
    TabBarItem,
  },
  data() {
    return {
      message: [
        { name: '首页', address: ImgHome },
        { name: '分类', address: ImgCate },
        { name: '购物车', address: ImgShop },
        { name: '我的', address: ImgMe },
      ],
      num: 0,
      paths: ['/home', '/category', '/cart', '/profile'],
    };
  },
  methods: {
    changeColor(index) {
      this.num = index;
    },
  },
};
</script>

<style scoped>
@import '~assets/css/base.css';

#active {
  color: red;
}
</style>
