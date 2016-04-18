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
      }, {
        id: '2',
        title: '豌豆荚这种动态生成内容的网页，应该怎么爬取呢？',
        author: '孔亚洲',
        votes: 15,
        answers: 6,
        views: 133,
        date: new Date(),
        tags: [
          'c#'
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
        <div class="ui message">
          <i class="close icon"></i>
          <div class="header">
            javascript
          </div>
          <p>JavaScript一种直译式脚本语言，是一种动态类型、弱类型、基于原型的语言，内置支持类型</p>
        </div>
        <div class="ui top attached secondary pointing menu">
          <a class="item" v-bind:class="{'active': actived == 'new' }" @click="load('new')">最新发布</a>
          <a class="item" v-bind:class="{'active': actived == 'hot' }" @click="load('hot')">最热问题</a>
        </div>
        <div class="ui bottom attached active tab segment" style="margin:0; padding: 6px 14px;">
          <div class="ui very relaxed divided list">
            <!-- 问题列表 -->
              <question-brief v-for="item in items"
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
                <b><a v-link="{name: 'home'}">推荐回答</a></b>
                <div class="ui divider"></div>
                <ul>
                  <li><a href="/">这是一条推荐</a></li>
                  <li><a href="/">react-redux异步读取数据</a></li>
                  <li><a href="/">react 排序功能</a></li>
                </ul>
              </div>
            </div>
            <div class="card">
              <div class="content">
                <b><a v-link="{name: 'tags'}">热门标签</a></b>
                <div class="ui divider"></div>
                <ul>
                  <li>javascrpt</li>
                  <li>java</li>
                </ul>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>

  <!-- <foot></foot> -->
</template>
