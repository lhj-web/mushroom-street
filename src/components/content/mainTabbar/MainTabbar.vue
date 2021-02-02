<template>
  <tab-bar>
    <div
      v-for="(m, index) in message"
      :key="index"
    >
      <tab-bar-item :path="paths[index]">
        <template v-slot:icon>
          <img :src="m.address" />
        </template>
        <template v-slot:icon-active>
          <img :src="m.active" />
        </template>
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
import ImgHomeActive from 'assets/img/tabbar/home-two.png';
import ImgCateActive from 'assets/img/tabbar/category-two.png';
import ImgShopActive from 'assets/img/tabbar/shopping-cart-two.png';
import ImgMeActive from 'assets/img/tabbar/me-two.png';

export default {
  name: 'MainTabbar',
  components: {
    TabBar,
    TabBarItem,
  },
  data() {
    return {
      message: [
        { name: '首页', address: ImgHome, active: ImgHomeActive },
        { name: '分类', address: ImgCate, active: ImgCateActive },
        { name: '购物车', address: ImgShop, active: ImgShopActive },
        { name: '我的', address: ImgMe, active: ImgMeActive },
      ],
      paths: ['/home', '/category', '/cart', '/profile'],
    };
  },
};
</script>

<style scoped>
</style>
