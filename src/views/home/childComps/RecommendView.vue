<template>
  <div class="recommends">
    <div v-for="item in recommends" class="recommend-items">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "RecommendView",
    props: {
      recommends: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
.recommends{
  display: flex;
  width:100%;
  text-align: center;
  font-size: 12px;
  padding:10px 0 20px;
  border-bottom: 8px solid #e9e9e9;
}
  .recommend-items{
    flex:1;
  }
  .recommend-items img{
    width:80%;
    margin-bottom: 10px;
  }
</style>
