<template>
  <div class="tab-control">
    <div
      v-for="(item, index) in title"
      :key="index"
      :class="num===index? 'tabc-item active': 'tabc-item'"
      @click="addUline(index)"
    ><span>{{item}}</span></div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  data() {
    return {
      num: 0,
    };
  },
  props: {
    title: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    addUline(index) {
      this.num = index;
      this.$emit('tabClick', index);
    },
  },
};
</script>

<style scoped>
.tab-control {
  width: 100%;
  display: flex;
  background-color: #fff;
}

.tab-control .tabc-item {
  flex: 1;
  text-align: center;
  height: 40px;
  line-height: 40px;
}

.active {
  color: var(--color-high-text);
}

.active span {
  border-bottom: 4px solid var(--color-tint);
  padding-bottom: 5px;
}
</style>
