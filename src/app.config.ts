import { useGlobalIconFont } from './iconfont/helper';


export default defineAppConfig({
  pages: [
    'pages/Home/index',
    'pages/Cart/index',
    'pages/Person/index',
    'pages/Sort/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '电商',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: "#666",
    position:'bottom',
    selectedColor: "#b4282d",
    backgroundColor: "#fafafa",
    borderStyle: 'black',
    list: [{
      pagePath: "pages/Home/index",
      text: "首页"
    }, {
      pagePath: "pages/Sort/index",
      text: "分类"
    }, {
      pagePath: "pages/Cart/index",
      text: "购物车"
    }, {
      pagePath: "pages/Person/index",
      text: "我的"
    }]
  },
  usingComponents: Object.assign(useGlobalIconFont()),
})
