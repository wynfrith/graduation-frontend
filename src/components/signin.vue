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
    .header {
      font-weight: normal !important;
    }
</style>
<template>
  <div class="ui middle aligned center aligned grid">
    <div class="column">
      <h2 class="ui green image header">新用户注册</h2>
      <form class="ui large form">
        <div class="ui stacked segment">
          <div class="field">
            <div class="ui left icon input">
              <i class="user icon"></i>
              <input type="text" name="text" placeholder="字母或数字">
            </div>
          </div>
          <div class="field">
            <div class="ui left icon input">
              <i class="mail icon"></i>
              <input type="text" name="email" placeholder="user@example.com">
            </div>
          </div>
          <div class="field">
            <div class="ui left icon input">
              <i class="lock icon"></i>
              <input type="password" name="password" placeholder="不少于6位">
            </div>
          </div>
          <button class="ui fluid green submit button">注册</button>

          <div class="clear"></div>
        </div>

        <div class="ui error message"></div>

      </form>

    </div>
  </div>

</template>
