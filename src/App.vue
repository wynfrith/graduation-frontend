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
      store.setAuth(token);
      store.checkLoginAndFetch(token)
        .then(({data}) => {
          if(data.code == 0) {
            this.userBrief = data.userBrief;
            // 拉取用户通知
            store.pullNotify().then(({data}) => {
              this.notifyCount = data;
            })
          }
        })
    },
    events: {
      'changeBrief': function (text) {
        this.userBrief.info.brief = text;
      },
      'changeAvatar': function(url) {
        this.userBrief.info.photoAddress = url;
      },
      'login': function(data) {
        this.userBrief = data;
      },
      'signout': function() {
        this.userBrief = {};
      },
      'readNotify': function(num) {
        console.log(num);
        this.notifyCount -=  num;
      }
    }
  }
</script>

<template>
  <navbar :user-brief="userBrief" :notify-count="notifyCount"></navbar>
  <router-view transition="fade" transition-mode="out-in" :user-brief="userBrief"></router-view>
</template>
