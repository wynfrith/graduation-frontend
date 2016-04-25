<script>
export default {
  props: {
    oldEmail: String
  },
  data() {
    return {
      form: {},
      email: ''
    }
  },
  methods: {
    onSubmit() {
      if(this.form.email.$error.required) {
        console.log('...');
        this.$dispatch('msg', false, '请输入新邮箱地址');
      } else if(this.form.email.$invalid) {
        this.$dispatch('msg', false, '请输入正确的邮箱地址!');
      } else {
        // 发送邮件
        // 跳转到发送成功的页面
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
        <h3>邮箱修改</h3>
        <div class="ui divider">

        </div>
        <form name="form" v-form class="ui form" @submit.prevent="onSubmit">
          <div class="inline fields">
            <div class="two wide field">
              <label>当前邮箱:</label>
            </div>
            <div class="eight wide field">
              <b>{{ oldEmail }}</b>
            </div>
          </div>
          <div class="inline fields">
            <div class="two wide field">
              <label for="email">新邮箱地址:</label>
            </div>
            <div class="eight wide field" :class="{'error': isError('email')}">
              <input id="email" name="email" type="email" placeholder="输入新的邮箱"
                 v-form-ctrl required v-model="email">
            </div>
          </div>
          <div class="field">
            <button type="submit" class="ui green button">修改邮箱</button>
          </div>

        </form>
      </div>
    </div>

</template>
