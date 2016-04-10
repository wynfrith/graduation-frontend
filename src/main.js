import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from './App.vue'
import routerMap from './router'

import beautyDate from './filter/beautyDate.js'

// register filter
Vue.filter('beautyDate', beautyDate);

// register router
const router = new VueRouter()
routerMap(router)


router.start(App  , '#app')
