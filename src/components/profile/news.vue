<script>
export default {
  activate(done) {
    const username = this.$route.params.username;
    Promise.all([
      store.getUserQuestions(username),
      store.getUserAnswers(username)
    ]).then(([question, answer]) => {
      this.q = question.data;
      this.a = answer.data;
      done();
    })
  },
  data() {
    return {
      q : {},
      a : {},
    }
  }
}

</script>
<template>
    <h4>最近的提问</h4>
    <div class="search-list relaxed ui list">
      <div class="blank" v-if="q.questions.length == 0">
        <span>还没有发布过提问</span>
      </div>
     <div class="item question-item" v-for="question in q.questions">
       <div class="content">
         <span class="views"><span>{{ question.views }}</span> 浏览</span>
         <a class="ui header"  v-link="{name: 'question', params: {qid: question._id}}">{{ question.title }}</a>
       </div>
     </div>
   </div>

   <h4>最近的回答</h4>

   <div class="search-list relaxed ui list">
     <div class="blank"  v-if="a.answers.length == 0">
       <span>还没有发布过回答</span>
     </div>
    <div class="item question-item" v-for="answer in a.answers">
      <div class="content">
        <span class="answers"><span>{{ answer.score }}</span> 票数</span>
        <a class="ui header" v-link="{name: 'question', params: {qid: answer.questionId}}">{{ answer.content | limit 30 }}</a>
      </div>
    </div>
  </div>

</template>

<style scoped src="./style.css"></style>
