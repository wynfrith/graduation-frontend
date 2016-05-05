<script>
import Comment from './comment.vue'
 export default {
   components: {
     'comment': Comment
   },
   props: {
     datas: Array,
     id: String,
   },
   data() {
     return {
       newComment: ''
     }
   },
   methods: {
     onSubmit() {
       if (this.newComment.trim() == '') {
         this.$dispatch('msg', { type: 'error', text: '写点啥吧~'});
         this.$els.commentInput.focus();
         return false;
       }
       // commit
       store.postComment(this.newComment, this.id)
        .then(({status, data}) => {
          if (status == 401) {
            this.$dispatch('msg', { type: 'error', text: '请先登录'});
          } else {
            if (data.code == 0)  {
              this.$dispatch('msg', { type: 'ok', text: '评论成功'});
              //发消息给当前QA
              const currentUser = this.$root.$get('userBrief');
              this.$dispatch('addComment', {
                authorAvatar: currentUser.info.photoAddress,
                author: currentUser.username,
                content: this.newComment
              })

              this.newComment = '';

            }
            else {
              this.$dispatch('msg', { type: 'ok', text: data.msg});
            }
          }
        }).catch(({status}) => {
          if (status == 401 || status == 0) {
            this.$dispatch('msg', { type: 'error', text: '请先登录!'});
          }
        })

     }
   },
   events: {
     'reply': function (msg) {
       this.newComment = `@${msg} `
       this.$els.commentInput.focus();
     }
   }
 }

</script>
<template>
  <div class=" ui container">
    <div class="ui divider"></div>
    <div class="ui minimal comments">
      <div>
        <template v-for="data in datas">
          <comment
            :avatar="data.authorAvatar"
            :author="data.author"
            :date="data.date"
            :content="data.content"
          ></comment>
        </template>
      </div>

      <form class="ui form" @submit.prevent="onSubmit">
        <div class="field">
          <textarea rows="1" v-model="newComment" class="left floated" placeholder="询问更多信息或提出修改意见，请不要在评论里回答问题" v-el:comment-input></textarea>
          <button type="submit" class="ui icon teal basic button right floated">
            <i class="icon edit"></i> 评论
          </button>
        </div>
      </form>
      <div class="clear">  </div>

    </div>

  </div>
</template>


<style scoped media="screen">
.ui.comments {
  margin: 0;
}
.ui.form .field {
  overflow: auto;
}
.right.button {
  margin-right: 10px;
}

.ui.form .field textarea {
  padding-top: 8px;
  padding-bottom: 8px;
  width: calc(100% - 110px);
  float: left;
  word-wrap: break-word;
  margin-left: 10px;
}
</style>
