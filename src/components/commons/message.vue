<script>
  export default {
    props: {
      msg: String,
      delay: {
        type: Number,
        'default': 1500
      }
    },
    data() {
      return {
        message: '你好',
        show: true
      }
    },
    watch: {
      'msg': function () {
        if (this.msg) {
          this.message = this.msg;
          this.show = true
          setTimeout(() => {
            this.msg = ''
          }, this.delay)
        } else {
          this.show = false
        }
      }
    }
  }

</script>

<template >
  <div class="notify" v-show="show" v-transition="notify">
  <div class="ui orange message">您的密码不能为空</div>
  </div>
</template>

<style scoped media="screen">

.notify {
  // display: none;
  position: fixed;
  width: 100%;
  z-index: 999;
  text-align: center;
  -webkit-transition: opacity .4s ease;
  transition: opacity .4s ease;
  top: 0px;
}
.notify .ui.message {
  display: inline-block;
  border-radius: 3px;
  padding: .8rem 5rem;
  font-size: 1rem;
}

.notify-enter,
.notify-leave {
  opacity: 0;
}

</style>
