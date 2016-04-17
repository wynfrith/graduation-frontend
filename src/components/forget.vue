<script type="text/javascript">
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
      <form v-form name="form" class="ui large form" @submit.prevent="onSubmit">

        <div class="ui stacked segment">
          <div class="title ui grey header">
            找回密码
          </div>
          <div class="sumbit-errors errors" v-if="form.$submitted">
            <p v-if="form.email.$error.email || form.email.$error.required">请正确的邮箱</p>
            <p v-if="form.code.$error.required">请输入验证码</p>
          </div>
          <div class="field" :class="{'error': form.email.$dirty && form.email.$error.required}">
            <div class="ui left icon input">
              <i class="user icon"></i>
              <input type="email" v-model="model.email" name="email" v-form-ctrl required placeholder="请输入注册的邮箱" maxlength="30">
            </div>
          </div>
          <div class="field" :class="{'error': isError('code')}">
            <div class="ui left icon input">
              <i class="lock icon"></i>
              <input type="text" v-model="model.code" name="code" v-form-ctrl required placeholder="4位验证码" maxlength="4">
            </div>
          </div>
          <button type="submit" class="ui fluid green submit button">提交</button>

          <div class="clear"></div>
        </div>

        <div class="ui error message"></div>

      </form>

    </div>
  </div>

</template>

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
