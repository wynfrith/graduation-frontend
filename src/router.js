export default function routerMap(router) {
  router.map({
      '/': {
        name: 'home',
        component: require('./components/home.vue')
      },
      '/login': {
        name: 'login',
        component: require('./components/login.vue')
      },
      '/signin': {
        name: 'signin',
        component: require('./components/signin.vue')
      },
      '/forget': {
        name: 'forget',
        component: require('./components/forget.vue')
      },
      '/q/:qid': {
        name: 'question',
        component: require('./components/detail.vue')
      },
      '/markdown': {
        name: 'markdown',
        component: require('./components/markdown.vue')
      },
      '/post': {
        name: 'post',
        component: require('./components/post.vue')
      },
      '/tags': {
        name: 'tags',
        component: require('./components/tags.vue')
      },
      '/u/:username': {
        name: 'profile',
        component: require('./components/profile.vue')
      }
  })

  router.redirect({
  '*': '/'
  })
}
