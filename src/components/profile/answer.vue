<script>
  export default {
    activate(done) {
      const username = this.$route.params.username;
      store.getUserAnswers(username)
        .then(({data}) => {
          this.answers = data.answers;
          this.page = data.page;
          done()
        })
    },
    data() {
      return {
        answers: [],
        page: {}
      }
    }
  }
</script>

<template>
   <h4>Wynfrith的回答</h4>

   <div class="search-list relaxed ui list">
   <div class="blank" v-if="answers.length == 0">
     <span>这里什么也没有..</span>
   </div>
    <div class="item question-item" v-for="answer in answers">
      <div class="content">
        <span class="answers"><span>{{ answer.scores }}</span> 票数</span>
        <a class="ui header">{{ answer.title }}</a>
      </div>
    </div>
  </div>

</template>

<style scoped src="./style.css"></style>
