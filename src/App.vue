<script>
  import Navbar from './components/commons/topbar.vue'

  export default {
    name: "App",
    data() {
      return {
        userBrief: {},
        notifyCount: 0
      }
    },
    components: {
      'navbar':Navbar
    },
    created() {
      // 检测localstorege有没有token，并且确认是否已经登陆
      // 如果已经登陆， 取出 userBrief 并向下boradcast事件
      const token = localStorage.getItem('token')
      if (!token) return;
      // 临时的userBrief， 为了防止闪动， 首先从localStorage读取
      let userBrief = localStorage.getItem('u');
      if (userBrief) {
        try {
          userBrief = JSON.parse(userBrief)
          this.userBrief = userBrief;
        } catch(e) {
          localStorage.removeItem('u');
          userBrief = {}
        }
      }

      store.setAuth(token);
      store.checkLoginAndFetch(token)
        .then(({data}) => {
          if(data.code == 0) {
            this.userBrief = data.userBrief;
            localStorage.setItem('u', JSON.stringify(data.userBrief))
            // 拉取用户通知
            store.pullNotify().then(({data}) => {
              this.notifyCount = data;
            })
          } else {
            localStorage.removeItem('u');
            this.userBrief = {}
          }
        })
      // 通知轮询
      setInterval(() => {
        store.pullNotify().then(({data}) => {
          this.notifyCount = data;
        })
      }, 1000 * 10)
    },
    events: {
      'changeBrief': function (text) {
        this.userBrief.info.brief = text;
        localStorage.setItem('u', JSON.stringify(this.userBrief))
      },
      'changeAvatar': function(url) {
        this.userBrief.info.photoAddress = url;
        localStorage.setItem('u', JSON.stringify(this.userBrief))
      },
      'login': function(data) {
        this.userBrief = data;
      },
      'signout': function() {
        this.userBrief = {};
      },
      'refreshNotify': function(count) {
        this.notifyCount = count;
      },
      'readNotify': function(num) {
        this.notifyCount -=  num;
      }
    }
  }
</script>

<template>
  <navbar :user-brief="userBrief" :notify-count="notifyCount"></navbar>
  <router-view transition="fade" transition-mode="out-in" :user-brief="userBrief"></router-view>
</template>
