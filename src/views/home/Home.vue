<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>购物街</template>
    </nav-bar>
    <tab-control
      :title="title"
      @tabClick="tabClick"
      ref="tabControl1"
      v-show="isTabFixed"
    />
    <scroll
      class="content"
      ref="scroll"
      :probeType="3"
      @scroll="contentScroll"
      :pullUpLoad="isPullUpLoad"
      @pullingUp="loadMore"
    >
      <home-swipe :banners="banners" @swipeImageLoad="swipeImageLoad" />
      <recommend-view :recommends="recommends" />
      <feature-view />
      <tab-control :title="title" @tabClick="tabClick" ref="tabControl2" />
      <goods-list :goods="showGoods" />
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop" />
  </div>
</template>

<script>
import { getHomeMultidata, getHomeGoods } from 'network/home';

import NavBar from 'components/common/navbar/NavBar.vue';
import Scroll from 'components/common/scroll/Scroll.vue';
import TabControl from 'components/content/tabControl/TabControl.vue';
import GoodsList from 'components/content/goods/GoodsList.vue';
import BackTop from 'components/content/backTop/BackTop.vue';

import { debounce } from 'common/utils/debounce';

import RecommendView from './childComps/RecommendView.vue';
import FeatureView from './childComps/FeatureView.vue';
import HomeSwipe from './childComps/HomeSwipe.vue';

export default {
  name: 'Home',
  data() {
    return {
      banners: [],
      recommends: [],
      title: ['流行', '精选', '新款'],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: 'pop',
      isShowBackTop: false,
      isPullUpLoad: true,
      tabControlTop: 0,
      isTabFixed: false,
      saveY: 0,
    };
  },
  components: {
    NavBar,
    Scroll,
    TabControl,
    GoodsList,
    BackTop,
    RecommendView,
    FeatureView,
    HomeSwipe,
  },
  created() {
    this.getHomeMultidata();
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 50);
    // 监听item中图片加载完成
    this.$bus.$on('itemImageLoad', () => {
      // this.$refs.scroll.refresh();
      refresh();
    });
  },
  methods: {
    // 网络请求
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      this.goods[type].page += 1;
      const { page, list } = this.goods[type];
      getHomeGoods(type, page).then((res) => {
        list.push(...res.data.data.list);
        this.$refs.scroll.finishPullUp();
      });
    },

    // tabControl点击事件监听
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop';
          break;
        case 1:
          this.currentType = 'new';
          break;
        case 2:
          this.currentType = 'sell';
          break;
        default:
          break;
      }
      this.$refs.tabControl1.num = index;
      this.$refs.tabControl2.num = index;
    },
    // 返回顶部事件
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    // BScroll内容高度事件
    contentScroll(position) {
      this.isShowBackTop = (position.y <= -1000);
      this.isTabFixed = (-position.y >= this.tabControlTop);
    },
    // 上拉加载更多
    loadMore() {
      this.getHomeGoods(this.currentType);
    },
    // 轮播图图片加载
    swipeImageLoad() {
      // 获取tabControl的offsetTop
      // $el 获取组件的dom元素
      this.tabControlTop = this.$refs.tabControl2.$el.offsetTop;
    },
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
};
</script>

<style scoped>
#home {
  height: 100vh;
  /* padding-top: 5.5vh; */
}

.home-nav {
  background-color: var(--color-tint);
  z-index: 999;
  color: #fff;
}

/* 粘性定位 */
/* .tab-control {
  position: sticky;
  top: 40px;
  z-index: 888;
} */

.content {
  height: calc(100% - 53px);
  overflow: hidden;
}
</style>
