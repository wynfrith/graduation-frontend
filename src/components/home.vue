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
    waitForData: true,
    data (trans) {
      this.currTag = trans.to.query.tag;
      this.actived = trans.to.query.sort || 'new'
      this.loading = true;
      return Promise.all([
        store.getList({
          tag: this.currTag,
          page: trans.to.query.page,
          sort: this.actived
        }),
        store.getRecommendList(),
        store.getTagByName(this.currTag)
      ]).then((res) => {
        this.loading = false;
        return {
          items: res[0].data.questions,
          page:  res[0].data.page,
          recommends: res[1].data,
          tagDetail: res[2].data
        }
      })
    }
  },
  props: {
    userBrief: Object
  },
  data() {
    return {
      loading: false,
      actived: 'new',
      items: [],
      page: {}, // 分页情况
      recommends: [],
      currTag: '',
      tagDetail: {}
    }
  },
  methods: {
    load(type) {
      this.actived = type;

      this.$router.go({name: 'home', query: {
        tag: this.currTag,
        sort: this.actived == 'hot' ? 'hot' : undefined
      }})

    },
    clearTag() {
      this.currTag = ''
      this.$router.go({name: 'home'})
    }
  },
  events: {
    'goPage': function(pageNum) {
      this.$router.go({name: 'home', query: {
        tag: this.currTag,
        page: pageNum,
        sort: this.actived == 'hot' ? 'hot' : undefined
      }})
    },
    'checkLogin': function(userBrief) {
      this.userBrief = userBrief;
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
        <div class="ui message" v-if="currTag &&  tagDetail.name">
          <i class="close icon" @click="clearTag"></i>
          <div class="header">
            {{ tagDetail.name }}
          </div>
          <p>
            {{ tagDetail.memo }}
          </p>
        </div>
        <div class="ui top green menu">
          <a class="item" v-bind:class="{'active': actived == 'new' }" @click="load('new')">最新发布</a>
          <a class="item" v-bind:class="{'active': actived == 'hot' }" @click="load('hot')">最热问题</a>
        </div>

        <div class="ui bottom active tab " style="margin:0; padding: 6px 14px;">
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
                :date="item.createdAt"
              >
              </question-brief>
              <div class="ui text loader" :class="{'active': loading }"></div>
          </div>

        </div>

        <div class="ui center aligned container">
          <!-- 导航条 -->
          <pagination :current="page.currPage" :nums="page.pageNum" ></pagination>
        </div>

      </div>
      <div class="four wide column">
        <siderbar :recommends="recommends" :user="userBrief"></siderbar>
      </div>
    </div>
  </div>

  <!-- <foot></foot> -->
</template>

<style scoped media="screen">
.relaxed.divided {
  position: relative;
}
.ui .loader {
  top: 45%;
  padding: 0px;
}
.ui.menu .item {
  color: rgba(0, 0, 0, 0.65);
}
.ui.divided.list>.item {
  border-top: 1px solid rgba(132, 136, 140, 0.15);
}
.ui.menu a.item:hover {
  background-color: rgba(158, 158, 158, 0.07);
  color: rgba(0, 0, 0, 0.65);
}
.ui.menu .active.item {
  color: #80AD8B!important;
  background: rgba(0,0,0,.0);
}

</style>
