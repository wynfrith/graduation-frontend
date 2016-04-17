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
  ready() {

  },
  data() {
    return {
      section: 'info'
    }
  },
  methods: {
    isCurrent(name) {
      return this.section == name;
    }
  }
}

</script>
<template>
  <div class="ui container main-box">
    <div class="ui two column  grid">
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
        <div v-if="isCurrent('info')" transition="fade">
          <info ></info>
        </div>
        <div v-if="isCurrent('email')" transition="fade">
          <email></email>
        </div>
        <div v-if="isCurrent('password')" transition="fade">
          <pwd> </pwd>
        </div>
      </div>

          <!-- <info  v-if="section == 'info'" transition="fade"  ></info>
          <email v-if="section == 'email'" transition="fade" transition-mode="out-in"  ></email>
          <pwd  v-if="section == 'password'" transition="fade" transition-mode="out-in" ></pwd> -->

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
