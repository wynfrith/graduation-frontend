<script>
  export default {
    data() {
      return {
        time: 4,
        isOk: false
      }
    },
    created() {
      if(this.$route.query.type == 'ok') {
        this.isOk = true;
      }
    },
    ready() {
      if (this.isOk) {
        setInterval(() => {
          if(this.time > 0) {
            this.time -= 1;
          } else {
            this.$router.go({name: 'home'})
          }
        }, 1000)
      } else {
      }
    },
    methods: {
      reSend() {
        store.reSendMail()
          .then(({status, data}) => {
            if (status == 401)
              this.errMsg = '请先登录！'
            else {
              this.$router.go({name: 'registered'})
            }
          })
      }
    }
  }

</script>
<template>
  <div class="ui middle center aligned grid">
    <div class="column">
      <message :msg.sync="errMsg"></message>
      <message :msg.sync="okMsg" color="orange" :delay="2500"></message>
      <div class="ok" v-if="isOk">
        <h2 class="ui grey image header">验证成功</h2>
        <div class="ui segment">
          <p>
            你的账号已经完成激活， <a class="green">{{ time }}秒后</a>自动跳转。
          </p>
        </div>
      </div>

      <div class="err" v-if="!isOk">
        <h2 class="ui grey image header">验证失败</h2>
        <div class="ui segment">
          <p>
            您的激活链接不正确或者已经过期， 请尝试重新激活
          </p>
          <button class="ui green button" @click="reSend">重新发送到邮箱</button>
        </div>
      </div>

    </div>
  </div>

</template>

<style scoped media="screen">
    p{
      font-size: 1.1rem;
      color: #859889;
    }
    a.green {
      color: #2AAF3D;
    }
    .column {
      margin-top: 60px;
      max-width: 600px;
    }
    .button {
    }
    input {
      font-size: 1rem !important;
    }
    .header {
      font-weight: normal !important;
    }
</style>
