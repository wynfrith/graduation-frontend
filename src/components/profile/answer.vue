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
    },
    methods: {
      loadMore() {
        const username = this.$route.params.username;
        store.getUserAnswers(username, {page: this.page.currPage+1})
          .then(({data}) => {
            console.log(data);
            this.page = data.page;
            data.answers.forEach((q) => {
              this.answers.push(q);
            })
          })
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
        <span class="answers"><span>{{ answer.score }}</span> 票数</span>
        <a class="ui header" v-link="{name: 'question', params: {qid: answer.questionId}}" >{{ answer.content | limit 40 }}</a>
      </div>
    </div>
    <div class="ui center aligned container" v-show="answers.length < page.count" v-cloak >
      <button class="ui mini button" @click="loadMore"> 更多回答 </button>
     </div>
  </div>

</template>

<style scoped src="./style.css"></style>
