<template>
  <div>
    <swiper loop auto :list="demo06_list" :index="demo06_index" @on-index-change="demo06_onIndexChange"></swiper>
    <div style="margin: 10px;overflow: hidden;" v-for="item in list1" :key="item.index">
      <masker style="border-radius: 2px;">
        <div class="m-img" :style="{backgroundImage: 'url(' + item.img + ')'}"></div>
        <div slot="content" class="m-title">
          {{item.title}}
          <br/>
          <span class="m-time">2016-03-18</span>
        </div>
      </masker>
    </div>
    <group>
      <cell title="公告">
        <marquee>
          <marquee-item v-for="i in 5" :key="i" @click.native="onClick(i)">JavaScript is the best language {{i}}</marquee-item>
        </marquee>
      </cell>
    </group>
    <div class="goodsList">
      <ul class="goods"><li></li></ul>
    </div>
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
    <divider>我是有底线的</divider>
    <div class="h56"></div>
  </div>
</template>

<script>
import { Tabbar, TabbarItem, Group, Cell, Swiper, GroupTitle, SwiperItem, XButton, Masker, Panel, Marquee, MarqueeItem, Divider } from 'vux'
const baseList = [{
  url: 'javascript:',
  img: 'https://www.291buy.cn/shop/images/ban1.jpg',
  title: '送你一朵fua'
}, {
  url: 'javascript:',
  img: 'https://www.291buy.cn/shop/images/banner.jpg',
  title: '送你一辆车'
}, {
  url: 'javascript:',
  img: 'https://www.291buy.cn/shop/images/banner1.jpg',
  title: '送你一次旅行',
  fallbackImg: 'https://www.291buy.cn/shop/images/banner1.jpg'
}]
const urlList = baseList.map((item, index) => ({
  url: 'http://m.baidu.com',
  img: item.img,
  fallbackImg: item.fallbackImg,
  title: `${item.title}`
}))
export default {
  name: 'HelloWorld',
  components: {
    Tabbar,
    TabbarItem,
    Group,
    Cell,
    Swiper,
    SwiperItem,
    GroupTitle,
    XButton,
    Panel,
    Masker,
    Marquee,
    MarqueeItem,
    Divider
  },
  methods: {
    demo06_onIndexChange (index) {
      this.demo06_index = index
    },
    onItemClick () {
      console.log('on item click')
    },
    onImgError (item, $event) {
      console.log(item, $event)
    }
  },
  data () {
    return {
      demo06_list: urlList,
      demo06_index: 0,
      type: '1',
      list: [{
        src: 'https://www.291buy.cn/shop/images/banner2.jpg',
        fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        title: '标题一',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        url: '/component/cell'
      }, {
        src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        title: '标题二',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        url: {
          path: '/component/radio',
          replace: false
        },
        meta: {
          source: '来源信息',
          date: '时间',
          other: '其他信息'
        }
      }],
      list1: [{
        title: '洗颜新潮流！人气洁面皂排行榜',
        img: 'https://www.291buy.cn/shop/images/banner3.png'
      }, {
        title: '美容用品 & 日用品（上）',
        img: 'https://www.291buy.cn/shop/images/banner4.png'
      }, {
        title: '远离车内毒气，日本车载空气净化器精选',
        img: 'https://www.291buy.cn/shop/images/banner1.jpg'
      }]
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import './index.less';
</style>
