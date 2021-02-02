<template>
  <div class="tab-bar-item" @click="itemClick()">
      <div v-if="!isActive"><slot name="icon"></slot></div>
      <div v-else><slot name="icon-active"></slot></div>
      <div :class="{active: isActive}"><slot></slot></div>
  </div>
</template>
<script>
export default {
  name: 'TabBarItem',
  data() {
    return {
    };
  },
  props: {
    path: String,
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path).catch((error) => error);
    },
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
  },
};
</script>
<style scoped>

.tab-bar-item {
  margin-top: 5px;
  text-align: center;
}

.tab-bar-item img {
  width: 20px;
  height: 20px;
  vertical-align: middle;
  margin-bottom: 2px;
}

.tab-bar-item .active {
  color: red;
}
</style>
