<script>
import QuestionBrief from './modules/question-brief.vue'
import Pagination from './modules/pagination.vue'

export default {
  components: {
    'question-brief': QuestionBrief,
    'pagination': Pagination
  },
  data() {
    return {
      actived: 'new',
      items: [{
        id: '1',
        title: 'react-redux异步读取数据',
        author: 'wynfrith',
        votes: 0,
        answers: 1,
        views: 2,
        date: new Date(),
        tags: [
          'javascript',
          'vue'
        ]
      }]
    }
  },
  methods: {
    load(type) {
      // 加载数据
      this.actived = type;
    }
  }
}
</script>

<style scoped>
</style>

<template>
  <div class="ui container">
    <div class="ui two column center grid">
      <div class="twelve wide column">
        <div class="ui top attached secondary pointing menu">
          <a class="item" v-bind:class="{'active': actived == 'new' }" @click="load('new')">最新发布</a>
          <a class="item" v-bind:class="{'active': actived == 'hot' }" @click="load('hot')">最热问题</a>
        </div>
        <div class="ui bottom attached active tab segment" style="margin:0;">
          <div class="ui very relaxed divided list">
            <!-- 问题列表 -->
            <li v-for="item in items">
              <question-brief
                :id="item.id"
                :title="item.title"
                :author="item.author"
                :votes="item.votes"
                :answers="item.answers"
                :views="item.views"
                :tags="item.tags"
                :date="item.date"
              >
              </question-brief>
            </li>
          </div>

        </div>

        <div class="ui center aligned container">
          <!-- 导航条 -->
          <pagination></pagination>
        </div>

      </div>
      <div class="four wide column">
          <div class="ui cards">
            <div class="card">
              <div class="content">
                <a class=" ui green button fluid" v-link="{name: 'post'}">提出问题</a>
              </div>
            </div>
            <div class="card">
              <div class="content">
                <b>推荐回答</b>
                <div class="ui divider"></div>
                <ul>
                  <li><a href="/">这是一条推荐</a></li>
                  <li><a href="/">react-redux异步读取数据</a></li>
                  <li><a href="/">react 排序功能</a></li>
                </ul>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>

  <!-- <foot></foot> -->
</template>
