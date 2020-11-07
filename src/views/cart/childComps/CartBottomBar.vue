<template>
  <div class="bottom-menu">
    <check-button
      class="select-all"
      :is-checked="isSelectedAll"
      @click.native="checkClick"></check-button>
    <!--      不能监听组件的点击，用native将组件变为HTML-->
    <span>全选</span>
    <span class="total-price">合计：{{totalPrice}}</span>
    <span class="buy-product" @click="countClick">去结账({{checkLength}})</span>
  </div>
</template>

<script>
  import CheckButton from "./CheckButton";

  import {mapGetters} from 'vuex'

  export default {
    name: "CartBottomBar",
    data() {
      return {
        message: '付款成功！',
        nMessage: '您还没有选择商品！'
      }
    },
    components: {
      CheckButton
    },
    computed: {
      ...mapGetters(['cartList']),
      totalPrice() {
        //用filter过滤掉checked不为true的数据，即没有被选中的商品
        //在reduce中计算价格，并通过toFixed保留两位小数
        return '￥' + this.cartList.filter(item => {
          return item.checked
        }).reduce((preValue, item) => {
          return preValue + item.price * item.count
        }, 0).toFixed(2)
      },
      checkLength() {
        return this.cartList.filter(item => item.checked).length
      },
      isSelectedAll() {
        if (this.cartList.length === 0) return false
        // 1.使用filter
        // return !(this.cartList.filter(item => !item.checked).length)
        // 2.使用find
        // 使用find方法找到cartList下第一个checked为false的值
        return !this.cartList.find(item => !item.checked)
      }
    },
    methods: {
      checkClick() {
        if (this.isSelectedAll) {
          this.cartList.forEach(item => item.checked = false)
        } else {
          this.cartList.forEach(item => item.checked = true)
        }
      },
      countClick() {
        if (this.isSelectedAll) {
          this.$toast.show(this.message)
        } else {
          this.$toast.show(this.nMessage)
        }
      }
    }
  }
</script>

<style scoped>
  .bottom-menu {
    width: 100%;
    height: 44px;
    background-color: #eee;
    position: fixed;
    bottom: 50px;
    left: 0;
    box-shadow: 0 -2px 3px rgba(0, 0, 0, .2);
    font-size: 14px;
    color: #888;
    line-height: 44px;
    padding-left: 35px;
    box-sizing: border-box;
  }

  .bottom-menu .select-all {
    position: absolute;
    line-height: 0;
    left: 12px;
    top: 13px;
  }

  .bottom-menu .total-price {
    margin-left: 15px;
    font-size: 16px;
    color: #666;
  }

  .bottom-menu .buy-product {
    background-color: orangered;
    color: #fff;
    width: 100px;
    height: 44px;
    text-align: center;
    line-height: 44px;
    float: right;
  }
</style>
