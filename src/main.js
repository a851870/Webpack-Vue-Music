import Vue from 'vue'
import App from './app.vue'
import router from './router'
import VueLazyload from 'vue-lazyload'
import Vuex from 'vuex'
import axios from 'axios'
import { Swipe, SwipeItem, Tab, Tabs, Cell, CellGroup, Collapse, CollapseItem, Progress } from 'vant'
import '~/css/joggle.scss'

Vue.use(Vuex)
Vue.use(Swipe).use(SwipeItem).use(Tab).use(Tabs).use(Collapse).use(CollapseItem).use(Cell).use(CellGroup).use(Progress)

Vue.config.productionTip = false

Vue.prototype.$ajax = axios

Vue.use(VueLazyload, {
    preLoad: 1.3,
    error: require('images/lazyload/loader.gif'),
    loading: require('images/lazyload/loader.gif'),
    attempt: 1
    // listenEvents: [ 'scroll' ]
})

const store = new Vuex.Store({
    state: {
        homeScroll: 'visible',
        rollShow: true, // 滚动条显示
        navNum: 0, // 当前touch的位置
        sheelShow: true, // 歌单显示
        controlShow: false // 播放界面
    }
})

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
