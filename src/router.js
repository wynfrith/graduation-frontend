export default function routerMap(router) {
  router.beforeEach((transition) => {
    const authPages = ['post', 'setting', 'notify'];
    if (!localStorage.getItem('token')) {
      for(let page of authPages) {
        if (page == transition.to.name) {
          console.log(transition.to.name);
          let redirect = encodeURIComponent(transition.to.path);
          transition.redirect('/login?redirect=' + redirect);
          return;
        }
      }
    }
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100)
    transition.next();
  })

  router.afterEach(function (transition) {


  })

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
        component: require('./components/profile/profile.vue')
      },
      '/search': {
        name: 'search',
        component: require('./components/search.vue')
      },
      '/setting': {
        name: 'setting',
        component: require('./components/settings/setting.vue')
      },
      '/notify': {
        name: 'notify',
        component: require('./components/notify.vue')
      },
      '/registered': {
        name: 'registered',
        component: require('./components/registered.vue')
      },
      '/verify': {
        name: 'verify',
        component: require('./components/verify.vue')
      }

  })

  router.redirect({
  '*': '/'
  })
}
