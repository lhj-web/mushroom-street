<template>
  <div class="goods" @click="itemClick">
    <img :src="goodsItem.show.img" @load="imageLoad"/>
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">&#9734; {{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsListItem',
  data() {
    return {};
  },
  props: {
    goodsItem: {
      type: Object,
      data() {
        return {};
      },
    },
  },
  methods: {
    imageLoad() {
      this.$bus.$emit('itemImageLoad');
    },
    itemClick() {
      this.$router.push(`/detail/${this.goodsItem.iid}`);
    },
  },
};
</script>

<style scoped>
.goods {
  position: relative;
  padding-bottom: 40px;
  width: 48vw;
}
.goods img {
  width: 100%;
  height: 36vh;
  border-radius: 2vw;
}
.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}
.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}
.goods-info .collect {
  position: relative;
}

</style>
