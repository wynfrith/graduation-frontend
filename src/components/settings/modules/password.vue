<script>
export default {
  data() {
    return {
      form: {},
      model: {},
      vueForm: {}
    }
  },
  methods: {
    onSubmit() {
      if(this.form.$invalid) {
        if (this.form.oldPassword.$error.required) {
          this.$dispatch('msg', false, '请填写您的原密码')
        } else if (this.form.newPassword.$error.required) {
          this.$dispatch('msg', false, '请填写新密码')
        } else if (this.form.newPassword.$error.minlength) {
          this.$dispatch('msg', false, '新密码长度要大于六位')
        } else if (this.form.rePassword.$error.required) {
          this.$dispatch('msg', false, '请填填写确认密码')
        } else if (this.model.newPassword != this.model.rePassword) {
          this.$dispatch('msg', false, '两次密码不一致')
        } else {
          this.$dispatch('msg', false, '请检查表单')
        }
      } else {
        store.changePass(this.model)
          .then(({status, data}) => {
            if (status == 401) {
              this.$dispatch('msg', false, '请先登录')
              setTimeout(()=> {this.$router.go({name:'login'})}, 800)
            } else {
              if (data.code == 0) {
                this.$dispatch('msg', true, '密码修改成功')
              } else {
                this.$dispatch('msg', false, data.msg)
              }
            }
          }).catch(({status}) => {
            if (status == 401 || status == 0) {
              this.$dispatch('msg', false, '请先登录')
              setTimeout(()=> {this.$router.go({name:'login'})}, 800)
            }
          })
      }
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
        <form v-form name="form" class="ui form" @submit.prevent="onSubmit" >
          <div class="inline fields">
            <div class="two wide field">
              <label>当前密码:</label>
            </div>
            <div class="eight wide field" :class="{'error': isError('oldPassword')}">
              <input type="password" placeholder="当前密码" name="oldPassword"
               v-model="model.oldPassword" v-form-ctrl required maxlength="30">
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
            <button type="submit" class="ui green button">修改密码</button>
          </div>

        </form>
      </div>
    </div>

</template>
