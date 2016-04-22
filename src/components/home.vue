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
  route: {
    // waitForData: true,
    data (trans) {
      return Promise.all([
        this.$http.get(this.fetchUrl, { page: this.$route.query.page || 1}),
        this.$http.get('http://127.0.0.1:3000/api/q/recommends')
      ]).then((res) => {
        console.log(res[1].data);
        return {
          items: res[0].data.questions,
          page:  res[0].data.page,
          recommends: res[1].data
        }
      })
    }
  },
  data() {
    return {
      actived: 'new',
      items: [],
      page: {}, // 分页情况
      recommends: [],
    }
  },
  methods: {
    load(type) {
      this.actived = type;
      this.$http.get(this.fetchUrl).then((res) => {
        this.items = res.data.questions;
        this.page = res.data.page;
      });
    },
  },
  computed: {
    fetchUrl: function() {
      let url = 'http://127.0.0.1:3000/api/q/list'
      return this.actived == 'hot' ? url+'?sort=hot' : url;
    }
  },
  events: {
    'page': function(datas) {
      this.items = datas.questions;
      this.page = datas.page;
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
                :id="item._id"
                :title="item.title"
                :author="item.author"
                :votes="item.score"
                :answers="item.answerNum"
                :views="item.views"
                :tags="item.tags"
                :date="item.date"
              >
              </question-brief>
          </div>

        </div>

        <div class="ui center aligned container">
          <!-- 导航条 -->
          <pagination :current="page.currPage" :nums="page.pageNum" :url="fetchUrl"></pagination>
        </div>

      </div>
      <div class="four wide column">
        <siderbar :recommends="recommends"></siderbar>
      </div>
    </div>
  </div>

  <!-- <foot></foot> -->
</template>
