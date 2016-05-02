<script>
  export default {
    props: {
      like: Array,
      hate: Array
    },
    data() {
      return {
        msg: ''
      }
    },
    computed: {
      'counts': function () {
        return this.like.length - this.hate.length;
      }
    },
    methods: {
      vote(num) {
        if(num == 1) {
          this.$dispatch('vote', true)
        } else if(num == -1) {
          this.$dispatch('vote', false)
        }
      },
      getStatus() {
        // 判断登陆
        const username = this.$root.$get('userBrief').username;
        if (this.like.indexOf(username) != -1) {
          return 1
        } else if (this.hate.indexOf(username) != -1){
          return -1
        } else return 0
      }
    }
  }
</script>

<template >
  <div class="vote">
    <button
      type="button"
      class="ui button up"
      :class="{'green': getStatus() == 1}"
      @click="vote(1)"
    ><i class="caret up icon"></i></button>

    <p class="">{{ counts }}</p>

    <button
      type="button"
      class="ui button down"
      :class="{'red': getStatus() == -1}"
      @click="vote(-1)"
    ><i class="caret down icon"></i></button>
  </div>
</template>

<style scoped media="screen">
  i {
    font-size: 2rem;
    position: absolute;
    left: 8px;
  }
  button {
    position: absolute;
    width: 36px;
    height: 26px;
    left:0px;
    padding: 11px 12px !important;
  }
  .vote {
    margin: 5px;
    width: 36px;
    text-align: center;
    position: absolute;
  }
  button.up {
    top: 0px;
  }
  button.down {
    top: 50px;
  }
  button.up i {
    top: 4px;
  }
  button.down i {
    top: 6px;
  }
  .vote p{
    font-size: 1.15rem;
    padding-top: 26px;
    color: rgba(0,0,0,.6);
  }
  .button.green {
    /*color:#21ba45*/
  }
  .ui.button:focus {
    background-color: #e0e1e2;
    color: rgba(0,0,0,.6);
  }
  .ui.green.button:focus {
    background-color: #21ba45;
    color: #fff;
  }
  .button.red {
    background-color: rgb(185, 118, 97);
  }
  .ui.red.button:focus {
    background-color: rgb(185, 118, 97);
    color: #fff;
  }
  .ui.red.button:hover {
    background-color: #B56B54;
    color: #fff;
  }


</style>
