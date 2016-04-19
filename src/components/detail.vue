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
            title: '如何实现签到逻辑?',
            content: "# 这是最大的字体\n## 二号标题\n### 三号标题拉克丝就\n#### 四号标题\n##### 五号标题阿狸的减肥了\n\n> 卢萨卡的就打了款家的离开家里的空间阿达刻录机大空间里卡掉了\n\n这是一段**普通**的文字, `javascript` 是一门坑爹的语言, *斜体* 是这样的\n\n\n1. 这是第一条\n\t- 哈哈\n\t- 呵呵\n2. 这是第二条\n\n这是一条链接 [http://wwynfrith.me](http://wynfrith.me)\n\n下面是一张图片 \n\n![我头像](http://my-ghost.b0.upaiyun.com/cunliang.png)\n\njs端\n``` javascript\nvar app = angular.module('myApp', []);\napp.controller('myCtrl', function ($scope, $http) {\n $http.get(\"test.ask\").success(function (response) {\n $scope.myWelcome = response;\n });\n});\n```\njsp端：\n\n```html\n<body>\n\t<div ng-app=\"myApp\" ng-controller=\"myCtrl\">\n\t\t <p> 从服务器获取的信息是:</p>\n\t\t <h3>{{myWelcome}}</h3>\n\t</div>\n\t<p> $http 服务向服务器请求信息，返回的值放入变量 中</p>\n</body>\n```"
            ,
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
            votes: -3,
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

  <div class="ui container">
    <message :msg.sync="errorMsg" color="red"></message>
    <message :msg.sync="okMsg" color="orange"></message>
    <div class="ui two column centered grid">
      <div class="left floated twelve wide column">
        <div class="ui segment">

          <!-- question -->
          <h3><span class="decoration"> 问 </span>{{ data.question.title }}</h3>
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
h3 .decoration {
  display: inline-block;
  padding: 3px;
  background-color: #fbeed5;
  color: #619841;
  border-radius: 5px;
  width: 36px;
  text-align: center;
  margin-right: 10px;
  font-weight: 600;
}
h3 {
  color: #406742;
  font-weight: 500;
}
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
