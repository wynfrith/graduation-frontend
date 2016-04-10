<style scoped media="screen">
    .column {
      margin-top: 80px;
      max-width: 450px;
    }
    .button {
      margin-bottom: .75rem;
    }
    input {
      font-size: 1rem !important;
    }
    .header {
      font-weight: normal !important;
    }

</style>
<template>
  <div class="ui middle aligned center aligned grid">
    <div class="column">
      <form class="ui large form">

        <div class="ui stacked segment">
          <div class="title ui grey header">
            找回密码
          </div>
          <div class="field">
            <div class="ui left icon input">
              <i class="user icon"></i>
              <input type="text" name="email" placeholder="请输入注册的邮箱">
            </div>
          </div>
          <div class="field">
            <div class="ui left icon input">
              <i class="lock icon"></i>
              <input type="text" name="code" placeholder="验证码 (暂时不用填)">
            </div>
          </div>
          <button class="ui fluid green submit button">提交</button>

          <div class="clear"></div>
        </div>

        <div class="ui error message"></div>

      </form>

    </div>
  </div>

</template>
