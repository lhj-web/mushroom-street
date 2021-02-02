<template>
  <div class="goods-list">
    <div v-for="(item, index) in goods" :key="index">
      <goods-list-item :goodsItem="item" />
    </div>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue';

export default {
  components: { GoodsListItem },
  name: 'GoodsList',
  data() {
    return {};
  },
  props: {
    goods: {
      type: Array,
      data() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
