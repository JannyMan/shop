<template>
  <div>
    <p>客说</p>
    <tabbar>
      <tabbar-item selected link="index">
        <img slot="icon" src="../../assets/home.png">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item show-dot link="/speak">
        <img slot="icon" src="../../assets/keshuo.png">
        <span slot="label">客说</span>
      </tabbar-item>
      <tabbar-item link="/shopCar">
        <img slot="icon" src="../../assets/shopCar.png">
        <span slot="label">购物车</span>
      </tabbar-item>
      <tabbar-item badge="2" link="/my">
        <img slot="icon" src="../../assets/myself.png">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem, Group, Cell } from 'vux'
export default {
  name: 'HelloWorld',
  components: {
    Tabbar,
    TabbarItem,
    Group,
    Cell
  },
  methods: {
    onItemClick () {
      console.log('on item click')
    }
  },
  data () {
    return {
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.iconfont{
  font-family:"iconfont" !important;
  font-size:16px;font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
.bottom_grid{
  position: fixed;
  width: 100%;
  left: 0;
  bottom:0;
    .grid-center {
      display: block;
      text-align: center;
      color: #666;
    }
    .weui-grids {
      background-color: #fff;
    }
  }
</style>
