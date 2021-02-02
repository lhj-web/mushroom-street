<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core';
import Pullup from '@better-scroll/pull-up';

BScroll.use(Pullup);

export default {
  name: 'Scroll',
  data() {
    return {
      scroll: null,
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: true,
    },
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      // 0不侦测实时位置
      // 1为每隔一段时间侦测 2为惯性不侦测， 3一直侦测
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      click: true,
      observeDOM: true,
    });

    if (this.probeType === 2 || this.probeType === 3) {
      this.scroll.on('scroll', (position) => {
        this.$emit('scroll', position);
      });
    }

    if (this.pullUpLoad) {
      this.scroll.on('pullingUp', () => {
        this.$emit('pullingUp');
      });
    }
  },
  methods: {
    scrollTo(x, y, time = 500) {
      this.scroll.scrollTo(x, y, time);
    },
    refresh() {
      this.scroll.refresh();
    },
    finishPullUp() {
      setTimeout(() => {
        this.scroll.finishPullUp();
      }, 500);
    },
  },
};
</script>
<style scoped>

</style>
