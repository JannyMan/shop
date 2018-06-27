<template>
  <div>
    <panel header="最新文章" :list="list" :type="type" @on-img-error="onImgError"></panel>
    <tabbar>
      <tabbar-item>
        <img slot="icon" src="../../assets/about.png">
        <span slot="label">Wechat</span>
      </tabbar-item>
      <tabbar-item show-dot>
        <img slot="icon" src="../../assets/about.png">
        <span slot="label">Message</span>
      </tabbar-item>
      <tabbar-item selected link="/component/demo">
        <img slot="icon" src="../../assets/about.png">
        <span slot="label">Explore</span>
      </tabbar-item>
      <tabbar-item badge="2">
        <img slot="icon" src="../../assets/about.png">
        <span slot="label">News</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
/*eslint-disable*/
import { Tabbar, TabbarItem, Group, Cell, Panel, Radio } from 'vux'
export default {
components: {
    Tabbar,
    TabbarItem,
    Group,
    Panel,
    Radio,
    Cell
},
 methods: {
    onImgError (item, $event) {
      console.log(item, $event)
    }
  },
data () {
    return {
      type: '5',
      list: [{
        src: 'http://somedomain.somdomain/x.jpg',
        fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        title: '标题一',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        url: {
          path: '/component/radio',
          replace: false
        },
        meta: {
          source: '湖北武汉',
          date: '2018年6月27日',
          other: ''
        }
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
      }]
     
    }
  }
}
</script>