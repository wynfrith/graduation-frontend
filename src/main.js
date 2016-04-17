import Vue from 'vue'
import VueRouter from 'vue-router'
import VueForm from 'vue-form'
import VueResource from 'vue-resource'

// npm引用需要 use加载
Vue.use(VueForm)

import App from './App.vue'
import routerMap from './router'


import beautyDate from './filter/beautyDate.js'

// register global componets

// import Message from './components/commons/message.vue'
// Vue.component('message', Message);

// register filter
Vue.filter('beautyDate', beautyDate);

// register router
const router = new VueRouter()
routerMap(router)


router.start(App  , '#app')
