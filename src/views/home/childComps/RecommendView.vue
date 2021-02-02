<template>
  <div class="recommends">
    <div v-for="(item, index) in recommends" :key="index" class="recommend">
      <a :href="item.link">
        <img :src="item.image" />
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {};
  },
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.recommends {
  display: flex;
  justify-content: space-around;
  text-align: center;
  font-size: 0.8rem;
  padding: 1vh 0 1.5vh;
  border-bottom: 8px solid #eee;
}

.recommend img {
  width: 22vw;
  vertical-align: middle;
  margin-bottom: 2px;
}
</style>
