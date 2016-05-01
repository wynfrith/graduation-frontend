<script>
  import Vote from './modules/vote.vue'
  import Comments from './modules/comments/list.vue'
  import Editor from './modules/editor/editor.vue'
  import Qa from './modules/qa/qa.vue'
  import Recommend from './modules/sidebar/recommend.vue'
  import HotTags from './modules/sidebar/hotTags.vue'


  export default {
    components: {
      'vote': Vote,
      'qa': Qa,
      'comments': Comments,
      'editor': Editor,
      'hot-tags': HotTags,
      'recommend': Recommend
    },
    route: {
      data ({ to: { params: { qid }}}) {
        return Promise.all([
          this.$http.get('http://127.0.0.1:3000/api/q/recommends'),
          this.$http.get(`http://127.0.0.1:3000/api/question/${qid}`)
        ]).then((res) => {
          return {
            recommends: res[0].data,
            data: res[1].data
          }
        })
      }
    },
    data() {
      return {
        errorField: '',
        editorContent: '',
        errorMsg: '',
        okMsg: '',
        recommends: [],
        data: {}
      }
    },
    methods: {
      onSubmit() {
        let content = this.editorContent.trim();
        if(content == '') {
          this.errorMsg= "请输入你要回答的内容!"
          this.errorField = 'editorContent'
        } else if (content.length < 5) {
          this.errorMsg = "你的回答字数过少 (最少5字)"
          this.errorField = 'editorContent'
        }
        else {
          this.errorField = ''
          this.$http.post('http://127.0.0.1:3000/api/user/answer', {
            answer: { content: content },
            qid: this.$route.params.qid
          })
            .then((res) => {
              if (res.status == 200) {
                const currentUser = this.$root.$get('userBrief');

                let answer = {
                  author: currentUser.username,
                  authorAvatar: currentUser.info.photoAddress,
                  comments: [],
                  views: 0,
                  score: 0,
                  like: [],
                  hate:[],
                  content: content
                }
                this.data.answers.push(answer);
                this.okMsg = '答案发布成功'
                this.editorContent = '';

              } else {
                this.errorMsg = '发布失败, 请重新尝试'
              }
            })


        }
      }
    },
    watch: {
      'editorContent': function () {
        if (this.errorField == 'editorContent')
          this.errorField = '';
      }
    },
    events: {
      'msg': function(msg) { // type, text
        if (msg.type == 'error') {
          this.errorMsg = msg.text;
        } else if (msg.type == 'ok') {
          this.okMsg = msg.text;
        }
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


          <template v-for="answer in data.answers">
            <div class="ui divider"></div>
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
          <recommend :datas="recommends"></recommend>
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
