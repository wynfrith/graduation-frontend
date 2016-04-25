<script>
import Info from './modules/info.vue'
import Email from './modules/email.vue'
import Password from './modules/password.vue'


export default {
  components: {
    'info': Info,
    'email': Email,
    'pwd': Password
  },
  created() {
    store.setAuth(true, 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMSIsImlhdCI6MTQ2MTU5MDgyOH0.kNF5yXgjSbOMdZ_lcn3ykrQHhiUXdNQeaYobkzBR3vE');
  },
  data() {
    return {
      section: 'info',
      user: {},
      errorMsg: '',
      okMsg: ''
    }
  },
  methods: {
    isCurrent(name) {
      return this.section == name;
    }
  },
  events: {
    'fetchUser': function(user) {
      this.user = user;
    },
    'msg': function(isOk, text) {
      console.log('.....');
      if (isOk) this.okMsg = text;
      else this.errorMsg = text;
    }
  }
}

</script>
<template>
  <div class="ui container main-box">
    <div class="ui two column  grid">
      <message :msg.sync="errorMsg"></message>
      <message :msg.sync="okMsg" color="orange" :delay="2500"></message>
      <div class="three wide column">
        <div class="ui secondary vertical menu">
          <a class="item" :class="{'active': isCurrent('info') }" @click="section = 'info'" >
            个人资料
          </a>
          <a class="item" :class="{'active': isCurrent('email') }" @click="section = 'email'">
            修改邮箱
          </a>
          <a class="item" :class="{'active': isCurrent('password') }" @click="section = 'password'">
            修改密码
          </a>
        </div>
      </div>
      <div class="twelve wide column">
        <div v-if="isCurrent('info')"  transition="fade">
          <info></info>
        </div>
        <div v-if="isCurrent('email')" transition="fade">
          <email :old-email="user.email"></email>
        </div>
        <div v-if="isCurrent('password')" transition="fade">
          <pwd> </pwd>
        </div>
      </div>

    </div>
  </div>

</template>

<style scoped media="screen">
  .ui.main-box {
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .expand-transition {
  transition: all .3s ease;
  height: 30px;
  padding: 10px;
  background-color: #eee;
  overflow: hidden;
}

/* .expand-enter 定义进入的开始状态 */
/* .expand-leave 定义离开的结束状态 */
.expand-enter, .expand-leave {
  height: 0;
  padding: 0 10px;
  opacity: 0;
}

</style>
