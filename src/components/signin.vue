<script>
export default {
  data() {
    return {
      form: {},
      model: {}
    }
  },
  methods: {
    onSubmit() {

    },
    isError(name) {
      return this.form[name].$dirty && this.form[name].$invalid;
    }

  }
}
</script>

<template>
  <div class="ui middle aligned center aligned grid">
    <div class="column">
      <h2 class="ui green image header">新用户注册</h2>
      <form name="form" v-form class="ui large form" @submit.prevent="onSubmit">
        <div class="ui stacked segment">
          <div class="sumbit-errors errors" v-if="form.$submitted">
            <p v-if="form.username.$error.required">用户名不能为空</p>
            <p v-if="form.email.$error.email || form.email.$error.required">请正确的邮箱</p>
            <p v-if="form.password.$error.required">密码不能为空</p>
            <p v-if="form.password.$error.minlength">请输入至少六位的密码</p>
          </div>
          <div class="field" :class="{'error': isError('username')}">
            <div class="ui left icon input">
              <i class="user icon"></i>
              <input name="username" placeholder="您的用户名"
                     v-model="model.username" v-form-ctrl minlength="2" required maxlength="20">
            </div>
          </div>
          <div class="field" :class="{'error': isError('email')}" >
            <div class="ui left icon input">
              <i class="mail icon"></i>
              <input type="email" placeholder="user@example.com"
                     v-model="model.email" v-form-ctrl name="email" required maxlength="30" >
            </div>
          </div>
          <div class="field" :class="{'error': isError('password')}">
            <div class="ui left icon input">
              <i class="lock icon"></i>
              <input type="password" v-model="model.password" placeholder="不少于6位"
                     required minlength="6" v-form-ctrl maxlength="25" name="password" >
            </div>
          </div>
          <button type="submit" class="ui fluid green submit button">注册</button>

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
    .header {
      font-weight: normal !important;
    }
</style>
