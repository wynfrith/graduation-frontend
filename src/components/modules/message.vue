<script>
  export default {
    props: {
      msg: String,
      delay: {
        type: Number,
        'default': 1800
      },
      color: {
        type: String,
        'default': 'red'
      }
    },
    data() {
      return {
        message: '你好',
        show: false,
        timer: ''
      }
    },
    watch: {
      'msg': function () {
        if (this.msg) {
          this.message = this.msg;
          this.show = true
          if (this.timer) {
            clearTimeout(this.timer);
          }
          this.timer = setTimeout(() => {
            this.msg = ''
            this.timer = '';
          }, this.delay)
        } else {
          this.show = false
        }
      }
    }
  }

</script>

<template >
  <div class="notify" v-show="show" transition="notify">
    <div class="ui message"
      :class="{ 'red': color == 'red' || color == '', 'orange': color == 'orange', 'green': color == 'green'}"
      >{{message}}</div>
  </div>
</template>

<style scoped media="screen">

.notify {
  // display: none;
  position: fixed;
  max-width: 600px;
  z-index: 9999;
  text-align: center;
  -webkit-transition: all linear .25s;
  transition: all linear .25s;
  overflow: hidden;
  height: 42px;
  top: 0px;
  left: 0px;
  right: 0px;
  margin: 0 auto;
}
.notify .ui.message {
  height: 100%;
  display: inline-block;
  border-radius: 3px;
  padding: .8rem 5rem;
  font-size: 1rem;
}

.notify-enter,
.notify-leave {
  margin-top: -42px;
}

</style>
