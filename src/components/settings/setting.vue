<script>
import Info from './modules/info.vue'
import Email from './modules/email.vue'
import Password from './modules/password.vue'


export default {
  components: {
    'info': Info,
    'email': Email,
    'password': Password
  },
  ready() {
    $('#imgBox .dimmable.image').dimmer({
      on: 'hover'
    });
  },
  data() {
    return {
      section: 'info'
    }
  }
}

</script>
<template>
  <div class="ui container main-box">
    <div class="ui two column grid">
      <div class="fourteen wide column  ">
        <div class="ui grid">
          <div class="four wide column">
            <div class="ui secondary vertical menu">
              <a class="item" :class="" @click="section = 'info'" >
                个人资料
              </a>
              <a class="item" class="section = 'email'">
                修改邮箱
              </a>
              <a class="item" @click="section = 'password'">
                修改密码
              </a>
            </div>
          </div>
          <info  v-if="section == 'info'"></info>
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

</style>
