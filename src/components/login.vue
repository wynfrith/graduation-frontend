<script>
  export default {
    data() {
      return {
        myform: {},
        username: '', // or email
        password: ''
      }
    },
    methods: {
      onSubmit() {
        if(this.myform.$valid==true)
          alert("提交成功");
      }
    }
  }

</script>

<template>
  <div class="ui middle aligned center aligned grid">
    <div class="column">
      <h2 class="ui green image header">用户登录</h2>
      <form v-form name="myform" class="ui large form" v-on:submit.prevent="onSubmit" >
        <div class="ui stacked segment">
          <div class="errors" v-if="myform.$submitted">
            <p v-if="myform.username.$error.required">请输入用户名或邮箱</p>
            <p v-if="myform.password.$error.required">请输入密码</p>
          </div>
          <div class="field">
            <div class="ui left icon input">
              <i class="user icon"></i>
              <input
                type="text"
                name="username"
                v-model="username"
                v-form-ctrl
                required
                placeholder="用户名或邮箱">
            </div>
          </div>
          <div class="field">
            <div class="ui left icon input">
              <i class="lock icon"></i>
              <input
                type="password"
                name="password"
                v-model="password"
                v-form-ctrl
                required
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
    .errors {
      font-size: .9rem;
      padding: 10px 0;
    }
    .errors p{
      background-color: #FFACA6;
      margin: 0 0 .5rem;
      padding: 2px;
    }
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
