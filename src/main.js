import Vue from 'vue'
import VueRouter from 'vue-router'
import VueForm from 'vue-form'
import VueResource from 'vue-resource'

// npm引用需要 use加载
Vue.use(VueForm) // TODO: 移除

import App from './App.vue'
import routerMap from './router'

// register global store
import Store from './store/store'
window.store = new Store()

// register global componets
import Message from './components/modules/message.vue'
Vue.component('message', Message);

// register filter
import beautyDate from './filter/beautyDate.js'
import dateFormat from './filter/dateFormat.js'
Vue.filter('beautyDate', beautyDate);
Vue.filter('dateFormat', dateFormat);

// register router
const router = new VueRouter()
routerMap(router)


router.start(App  , '#app')
