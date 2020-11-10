<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div @click="collect">
        <i class="icon select" :class="{'collect' : isCollect}"></i>
        <!--        <span class="text" :text="isCollect ? '已收藏' : '收藏'">收藏</span>-->
        <span v-if="!isCollect" class="text">收藏</span>
        <span v-else class="text">已收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy" @click="toCart">立即购买</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBottomBar",
    data() {
      return {
        isCollect: false
      }
    },
    methods: {
      addToCart() {
        this.$emit('addToCart')
      },
      collect() {
        if (!this.isCollect) {
          this.$toast.show("收藏成功！", 1500)
          this.isCollect = true
        } else {
          this.$toast.show("已取消收藏！", 1500)
          this.isCollect = false
        }
        console.log(this.isCollect)
      },
      toCart() {
        this.$router.push('/cart')
      }
    }
  }
</script>

<style scoped>
  .bottom-bar {
    height: 45px;
    background-color: #fff;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    text-align: center;
  }

  .bar-item {
    flex: 1;
    display: flex;
  }

  .bar-item > div {
    flex: 1;
  }

  .bar-left .text {
    font-size: 13px;
  }

  .bar-left .icon {
    display: block;
    width: 16px;
    height: 16px;
    margin: 4px auto 1px;
    background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
  }

  .collect {
    background-position: 0 -18px !important;
  }

  .bar-left .service {
    background-position: 0 -38px;
  }

  .bar-left .shop {
    background-position: 0 38px;
  }

  .bar-right {
    font-size: 14px;
    color: #fff;
    line-height: 45px;
    text-align: center;
  }

  .bar-right .cart {
    background-color: #FDB15D;
    color: #fff;
    /*padding:0 10px;*/
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
  }

  .bar-right .buy {
    background-color: #f69;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
  }
</style>
