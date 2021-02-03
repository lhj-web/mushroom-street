<template>
  <div id="detail">
    <detail-nav-bar />
    <scroll class="content" ref="scroll">
      <detail-swipe :banners="topImages" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detailInfo="detailInfo" @imageLoad="resetScroll" />
      <detail-param-info :paramInfo="paramsInfo" />
    </scroll>
  </div>
</template>

<script>
import {
  getDetail, GoodsInfo, Shop, GoodsParams,
} from 'network/detail';

import Scroll from 'components/common/scroll/Scroll.vue';

import DetailNavBar from './childComps/DetailNavBar.vue';
import DetailSwipe from './childComps/DetailSwipe.vue';
import DetailBaseInfo from './childComps/DetailBaseInfo.vue';
import DetailShopInfo from './childComps/DetailShopInfo.vue';
import DetailGoodsInfo from './childComps/DetailGoodsInfo.vue';
import DetailParamInfo from './childComps/DetailParamInfo.vue';

export default {
  components: {
    Scroll,
    DetailNavBar,
    DetailSwipe,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
  },
  name: 'Detail',
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detail: {},
      detailInfo: {},
      paramsInfo: {},
      commentInfo: {},
    };
  },
  created() {
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then((res) => {
      const data = res.data.result;
      this.topImages = data.itemInfo.topImages;

      // 获取商品信息
      this.goods = new GoodsInfo(data.itemInfo, data.columns, data.shopInfo.services);

      // 创建店铺信息
      this.shop = new Shop(data.shopInfo);

      // 详情信息
      this.detailInfo = data.detailInfo;

      // 参数信息
      this.paramsInfo = new GoodsParams(data.itemParams.info, data.itemParams.rule);

      // 评论信息
      if (data.rate.cRate !== 0) {
        const commend = data.rate.list[0];
        this.commentInfo = commend;
      }
    });
  },
  methods: {
    resetScroll() {
      this.$refs.scroll.refresh();
    },
  },
};
</script>

<style scoped>
#detail {
  height: 100vh;
}

.content {
  height: calc(100% - 44px);
  overflow: hidden;
}
</style>
