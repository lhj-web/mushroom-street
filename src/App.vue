<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>
    <main-tabbar class="main-tabbar" />
  </div>
</template>

<script>
import MainTabbar from './components/content/mainTabbar/MainTabbar.vue';

export default {
  components: { MainTabbar },
  name: 'App',
  data() {
    return {};
  },
};
</script>

<style scoped>
.main-tabbar {
  z-index: 999;
}
</style>
