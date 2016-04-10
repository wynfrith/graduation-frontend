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
<template>
  <div class="ui middle aligned center aligned grid">
    <div class="column">
      <h2 class="ui green image header">用户登录</h2>
      <form class="ui large form">
        <div class="ui stacked segment">
          <div class="field">
            <div class="ui left icon input">
              <i class="user icon"></i>
              <input type="text" name="email" placeholder="用户名或邮箱">
            </div>
          </div>
          <div class="field">
            <div class="ui left icon input">
              <i class="lock icon"></i>
              <input type="password" name="password" placeholder="输入密码">
            </div>
          </div>
          <button class="ui fluid green submit button">登录</button>
          <a class="ui fluid button" v-link="{name: 'signin'}">我是新用户</a>
          <div class="forget">
            <a class="ui basic teal label" v-link="{name: 'forget'}">忘记密码?</a>
          </div>
          <div class="clear"></div>
        </div>

        <div class="ui error message"></div>

      </form>

    </div>
  </div>

</template>
