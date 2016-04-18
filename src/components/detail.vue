<script>
  import Vote from './modules/vote.vue'
  import Comments from './modules/comments/list.vue'
  import Editor from './modules/editor/editor.vue'
  import Qa from './modules/qa/qa.vue'
  import Message from './modules/message.vue'
  import Recommend from './modules/sidebar/recommend.vue'
  import HotTags from './modules/sidebar/hotTags.vue'


  export default {
    components: {
      'vote': Vote,
      'qa': Qa,
      'comments': Comments,
      'editor': Editor,
      'message': Message,
      'hot-tags': HotTags,
      'recommend': Recommend
    },
    data() {
      return {
        errorField: '',
        editorContent: '',
        errorMsg: '',
        okMsg: '',

        data: {
          question: {
            id: 1,
            votes: 18,
            title: '问题: 如何实现签到逻辑?',
            content: '  PHP的类名本身是不区分大小写的，但是一般的类加载器并不转换类名，而是直接根据类名查找对应的php代码文件。这样就造成在一些文件名称大小写敏感的操作系统下好像类名也是大小写敏感一样。而Windows的文件名是大小写不敏感的，所有本身和可以适应PHP类名大小写不敏感的加载。',
            comments: [{
              author: 'Wynfrith',
              content: '你说的对, 但是没什么卵用a',
              date: 'Today at 5:42PM',
              avator: 'http://my-ghost.b0.upaiyun.com/avator.jpg'
            },{
              author: 'Wynfrith',
              content: '你说的对, 但是没什么卵用a',
              date: 'Today at 5:42PM',
              avator: 'http://my-ghost.b0.upaiyun.com/avator.jpg'
            }]
          },
          answers: [{
            id: 2,
            votes: -1,
            content: 'PHP的类名本身是不区分大小写的，但是一般的类加载器并不转换类名，而是直接根据类名查找对应的php代码文件。这样就造成在一些文件名称大小写敏感的操作系统下好像类名也是大小写敏感一样。而Windows的文件名是大小写不敏感的，所有本身和可以适应PHP类名大小写不敏感的加载。',
            comments: [{
              author: 'Wynfrith',
              content: '你说的对, 但是没什么卵用a',
              date: 'Today at 5:42PM',
              avator: 'http://my-ghost.b0.upaiyun.com/avator.jpg'
            },{
              author: 'Wynfrith',
              content: '你说的对, 但是没什么卵用a',
              date: 'Today at 5:42PM',
              avator: 'http://my-ghost.b0.upaiyun.com/avator.jpg'
            }]
          }]
        }
      }
    },
    methods: {
      onSubmit() {
        if(this.editorContent.trim() == '') {
          this.errorMsg= "请输入你要回答的内容!"
          this.errorField = 'editorContent'
        } else if (this.editorContent.trim().length < 5) {
          this.errorMsg = "你的回答字数过少 (最少5字)"
          this.errorField = 'editorContent'
        }
        else {
          this.errorField = ''
          this.okMsg = '提交成功'
        }
      }
    },
    watch: {
      'editorContent': function () {
        if (this.errorField == 'editorContent')
          this.errorField = '';
      }
    }
  }

</script>

<template>
  <message :msg.sync="errorMsg" color="red"></message>
  <message :msg.sync="okMsg" color="orange"></message>
  <div class="ui container">
    <div class="ui two column centered grid">
      <div class="left floated twelve wide column">
        <div class="ui segment">

          <!-- question -->
          <h3>{{ data.question.title }}</h3>
          <div class="ui divider"></div>

          <qa :data="data.question"></qa>


          <!-- answers -->
          <h5>{{ data.answers.length }}个回答</h5>
          <div class="ui divider"></div>

          <template v-for="answer in data.answers">
            <qa :data="answer"></qa>
          </template>

          <div class="ui divider"></div>

          <div class="ui container">
            <h5>你的答案</h5>
            <form class="ui form" @submit.prevent="onSubmit">
              <div class="field" :class="{'error': errorField == 'editorContent' }">
                <editor :content.sync="editorContent" placeholder="写下你的答案 (最少5字)"></editor>
              </div>
              <div class="field">
                <button type="sumbit" class="ui submit green button right floated">提交答案</button>
                <div class="clear"></div>
              </div>
            </form>


          </div>

        </div>
      </div>
      <div class="four wide column">
        <div class="ui cards">
          <recommend></recommend>
          <hot-tags></hot-tags>
        </div>
      </div>
    </div>
  </div>

  <!-- <foot></foot> -->
</template>

<style scoped media="screen">
.four.wide.column {
  margin-top: 1px;
}
.ui.container .ui.segment {
  padding: 20px 15px;
}
.field button.submit {
  margin-right: 10px;
}

</style>
