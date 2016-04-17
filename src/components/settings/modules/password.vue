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

<template id="">
    <div class="ui centered grid">
      <div class="fourteen wide column">
        <h3>密码修改</h3>
        <div class="ui divider">

        </div>
        <form v-form name="form" class="ui form">
          <div class="inline fields">
            <div class="two wide field">
              <label>当前密码:</label>
            </div>
            <div class="eight wide field" :class="{'error': isError('oldPassword')}">
              <input type="password" placeholder="当前密码" name="oldPassword"
               v-model="model.oldPassworld" v-form-ctrl required maxlength="30">
            </div>
          </div>
          <div class="inline fields">
            <div class="two wide field" >
              <label>新密码:</label>
            </div>
            <div class="eight wide field" :class="{'error': isError('newPassword')}">
              <input type="password" placeholder="输入新的密码, 至少6位" name="newPassword"
              v-model="model.newPassword" v-form-ctrl required maxlength="30" minlength="6">
            </div>
          </div>
          <div class="inline fields">
            <div class="two wide field">
              <label>确认密码:</label>
            </div>
            <div class="eight wide field" :class="{'error': isError('rePassword')}">
              <input type="password" placeholder="请再输入一次密码" name="rePassword"
              v-model="model.rePassword" v-form-ctrl required maxlength="30" minlength="6">
            </div>
          </div>
          <div class="field">
            <button type="button" class="ui green button">修改密码</button>
          </div>

        </form>
      </div>
    </div>

</template>
