import {debounce} from "common/untils"
import BackTop from "components/content/backTop/BackTop";
import {BACKTOP_DISTANCE} from "common/const";

export const itemListenerMixin = {
  data() {
    return {
      itemListenerMixin: null,
      newRefresh: null
    }
  },
  mounted() {
    let newRefresh = debounce(this.$refs.scroll.refresh, 100)
    this.itemImgListener = () => {
      newRefresh()
    }
    this.$bus.$on('itemImgLoad', this.itemImgListener)
  }
}

export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowBackTop: false
    }
  },
  methods: {
    backTop() {
      //单击回到顶部按钮执行
      this.$refs.scroll.scrollTo(0, 0, 200)
    },
    listenShoBackTop(position) {
      //判断回到顶部按钮是否显示
      this.isShowBackTop = -position.y > BACKTOP_DISTANCE
    }
  }
}
