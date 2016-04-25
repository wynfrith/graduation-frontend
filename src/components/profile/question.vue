<script>
  export default {
    activate(done) {
      const username = this.$route.params.username;
      store.getUserQuestions(username)
        .then(({data}) => {
          this.questions = data.questions;
          this.page = data.page;
          done()
        })
    },
    data() {
      return {
        questions: [],
        page: {}
      }
    }
  }
</script>
<template v-cloak>
    <h4>Wynfrith的问题</h4>
    <div class="search-list relaxed ui list">
    <div class="blank" v-if="questions.length == 0">
      <span>这里什么也没有..</span>
    </div>

     <div class="item question-item" v-for="question in questions">
       <div class="content">
         <span class="views"><span>{{ question.views }}</span> 浏览</span>
         <a class="ui header" v-link="{name:'question', params: { qid: question._id }}">{{ question.title }}</a>
         <span class="publish-time">{{ question.createdAt }}</span>
       </div>
     </div>
   </div>
</template>

<style scoped src="./style.css"></style>
