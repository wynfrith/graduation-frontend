<script>
  import Vote from './modules/vote.vue'
  import Comments from './modules/comments/list.vue'
  import Editor from './modules/editor/editor.vue'
  import Qa from './modules/qa/qa.vue'

  export default {
    components: {
      'vote': Vote,
      'qa': Qa,
      'comments': Comments,
      'editor': Editor
    },
    data() {
      return {
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

    }
  }

</script>

<template>
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
            <form class="ui form">
              <div class="field">
                <editor></editor>
              </div>
              <div class="field">
                <button class="ui submit green button right floated">提交答案</button>
                <div class="clear"></div>
              </div>
            </form>


          </div>

        </div>
      </div>
    </div>
  </div>

  <!-- <foot></foot> -->
</template>

<style scoped media="screen">
  .ui.container .ui.segment {
    padding: 20px 15px;
  }
  .field button.submit {
    margin-right: 10px;
  }

</style>
