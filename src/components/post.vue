<script>
  import Editor from './modules/editor/editor.vue'
  export default {
    components: {
      'editor': Editor
    },
    data() {
      return {
        errorField: '',
        msg: '',
        okMsg: '',
        model: {
          title: '',
          tagsText: '',
          content: ''
        },
        form: {}
      }
    },
    methods: {
      onSubmit() {

        if (this.form.title.$invalid) {
          this.msg = "请输入标题!"
          this.errorField = 'title'
        } else if (this.form.tagsText.$invalid) {
          this.msg = "请选择至少一个标签!"
          this.errorField = 'tagsText'
        } else if (this.model.content.trim() == ''){
          this.msg = "请输入问题内容!"
          this.errorField = 'content'
        } else if (this.model.content.trim().length < 15) {
          this.msg = "你的内容太少了吧! (15字以上)"
          this.errorField = 'content'
        } else {
          this.errorField = ''
          this.okMsg = '问题发布成功, 正在跳转..';
        }
      },
      isError(name) {
        // return (this.form[name].$dirty && this.form[name].$invalid)
        //         || (this.form.$submitted && this.form[name].$invalid);
        return (this.form.$submitted &&
                this.form[name].$invalid &&
                this.errorField == name)
      }
    },
    watch: {
      'model.content': function() {
        // clear error
        if (this.errorField == 'content')
          this.errorField = '';
      }
    }
  }
</script>
<template >
  <div class="ui container">
    <message :msg.sync="msg"></message>
    <message :msg.sync="okMsg" color="orange" :delay="2500"></message>
    <div class="form-box">
      <form name="form" v-form class="ui form" @submit.prevent="onSubmit">
        <div class="field" :class="{'error': isError('title')}">
          <input type="text" name="title" v-model="model.title" v-form-ctrl required maxlength="30" class="large" placeholder="输入标题, 说清问题">
        </div>
        <div class="field" :class="{'error': isError('tagsText')}">
            <input type="text" name="tagsText" v-model="model.tagsText" v-form-ctrl required placeholder="标签, 可用,或;分割">
        </div>
        <div class="field" :class="{'error': errorField == 'content' }">
          <editor :content.sync="model.content" placeholder="问题详细内容 (最少15字)"></editor>
        </div>
        <div class="field submit-box">
          <button type="submit" class="ui submit green  right floated large button">发布问题</button>
        </div>
      </form>
    </div>

  </div>

</template>

<style scoped media="screen">
  .ui.form .large {
    font-size: 1.2rem;
  }
  .ui.container .form-box{
    margin: 0 auto;
  }
  .form-box {
    width: 90%;
  }

</style>
