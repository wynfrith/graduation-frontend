<script>
  import Navbar from './components/commons/topbar.vue'

  export default {
    name: "App",
    data() {
      return {
        userBrief: {}
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
          }
        })
    },
    events: {
      'changeAvatar': function(url) {
        this.userBrief.info.photoAddress = url;
      },
      'login': function(data) {
        this.userBrief = data;
      },
      'signout': function() {
        this.userBrief = {};
      }
    }
  }
</script>

<template>
  <navbar :user-brief="userBrief"></navbar>
  <router-view transition="fade" transition-mode="out-in" :user-brief="userBrief"></router-view>
</template>
