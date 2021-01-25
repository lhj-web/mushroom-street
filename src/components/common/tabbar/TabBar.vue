<template>
    <div id="tab-bar">
      <slot></slot>
    </div>
</template>

<script>

export default {
  name: 'TabBar',
  components: {

  },
};
</script>

<style scoped>
#tab-bar {
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 49px;
  position: fixed;
  bottom: 0px;
  /* line-height: 49px; */
  background: #f6f6f6;
  box-shadow: 0 -1px 3px rgba(100, 100, 100, .1);
}
</style>
