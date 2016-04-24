<script>
  export default {
    data() {
      return {
        myform: {},
        model: {},
        errMsg: '',
        okMsg: ''
      }
    },
    methods: {
      onSubmit() {
        if(this.myform.$valid==true) {
          store.login(this.model.username, this.model.password)
            .then(({data})=> {
              if (data.code != 0) this.errMsg = data.msg || '出错了， 请重试'
              else {
                this.okMsg = '登陆成功， 正在跳转..'
                store.doAuth(true, data.token);
                store.fetchUser().then((res) => {
                })
                //TODO 更新全局的的 data , 并跳转到主页
              }
            })
        }

      },
      isError(name) {
        return this.myform[name].$dirty && this.myform[name].$invalid;
      }
    }
  }

</script>

<template>
  <div class="ui middle aligned center aligned grid">
    <div class="column">
      <message :msg.sync="errMsg"></message>
      <message :msg.sync="okMsg" color="orange" :delay="2500"></message>
      <h2 class="ui green image header">用户登录</h2>
      <form v-form name="myform" class="ui large form" v-on:submit.prevent="onSubmit" >
        <div class="ui stacked segment">
          <div class="sumbit-errors errors" v-if="myform.$submitted">
            <p v-if="myform.username.$error.required">请输入用户名或邮箱</p>
            <p v-if="myform.password.$error.required">请输入密码</p>
          </div>
          <div class="field " :class="{'error': isError('username')}">
            <div class="ui left icon input">
              <i class="user icon"></i>
              <input
                type="text"
                name="username"
                v-model="model.username"
                v-form-ctrl
                required
                maxlength="30"
                placeholder="用户名或邮箱">
            </div>
          </div>
          <div class="field" :class="{'error': isError('password')}">
            <div class="ui left icon input">
              <i class="lock icon"></i>
              <input
                type="password"
                name="password"
                v-model="model.password"
                v-form-ctrl
                required
                maxlength="30"
                placeholder="输入密码">
            </div>
          </div>


          <button type="submit" class="ui fluid green submit button" >登录</button>
          <a class="ui fluid button" v-link="{name: 'signin'}">我是新用户</a>
          <div class="forget">
            <a class="ui basic teal label" v-link="{name: 'forget'}">忘记密码?</a>
          </div>
          <div class="clear"></div>
        </div>



      </form>
    </div>
  </div>

</template>

<style scoped media="screen">

    .column {
      margin-top: 60px;
      max-width: 450px;
    }
    .button {
      margin-bottom: .75rem;
    }
    input {
      font-size: 1rem !important;
    }
    .forget {
      float: right;
      margin-right: 10px;
      font-size: .95rem;
    }
    .forget a {
      border: none !important;
      padding: 0
    }
    .header {
      font-weight: normal !important;
    }

</style>
