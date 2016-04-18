<script>
import QuestionBrief from './modules/question-brief.vue'
import Pagination from './modules/pagination.vue'
import Siderbar from './modules/sidebar/sidebar.vue'

export default {
  components: {
    'question-brief': QuestionBrief,
    'pagination': Pagination,
    'siderbar': Siderbar
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
        <siderbar></siderbar>
      </div>
    </div>
  </div>

  <!-- <foot></foot> -->
</template>
