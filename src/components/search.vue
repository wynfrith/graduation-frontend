<script>
  import Pagination from './modules/pagination.vue'
  export default {
    components: {
      'pagination': Pagination
    },
    methods: {
      doSearch() {
        if (this.search.text.trim().length == 0) {
          this.msg = '请输入搜索内容'
          this.$els.searchBox.focus();
        } else {
          this.search.page = 1;
          this.$router.go({name: 'search', query: {
            type: this.search.type,
            text: this.search.text.trim()
          }})
        }

        // store.doSearch(this.search)
        //   .then(({data}) => {
        //     this.$router.go({name: 'search', query: {
        //       type: this.search.type
        //     }})
        //     this.count = data.page.count;
        //     this.users = this.questions = this.tags = [];
        //     this[this.search.type+'s'] = data.result;
        //   })
      },
      changeSearchType(type) {
        this.search.type = type;
        this.count = 0;
        if (this.search.text.trim().length > 0 ) {
          this.$router.go({name: 'search', query: {
            type: this.search.type,
            text: this.search.text.trim(),
            t: +(new Date)
          }})
        }

        // this.search.page = 1;
        // this.search.type = type;
        // this.count = 0;
        // store.doSearch(this.search)
        //   .then(({data}) => {
        //     this.count = data.page.count;
        //     this.users = this.questions = this.tags = [];
        //     this[type+'s'] = data.result;
        //   })
        // 进行一次搜索
      },
      loadMore() {
        // 首先判断个数和总个数是否相等
        // 创建一个search对象， 并使page+1
        // const search = Object.assign({}, this.search);
        const search = this.search;
        search.page += 1;
        store.doSearch(search)
          .then(({data}) => {
            this.count = data.page.count;
            data.result.forEach((item) => {
              this[this.search.type+'s'].push(item);
            })
          })
      },
      showLoadMore() {
        let length = this[this.search.type+'s'].length;
        return this.count > length;
      }
    },
    filters: {
      'limit': function(str, length) {
        return str.substring(0, length) + (length < str.length ? '...' : '')
      }
    },
    route: {
      waitForData: true,
      data(trans) {
        const query = trans.to.query;
        this.firstLoad = (!query.text && !query.type) ;
        this.search.text = query.text;
        this.search.type = query.type || 'question';

        if (this.search.text.trim().length > 0 ) {
          this.search.page = 1;
          this.loading = true;
          store.doSearch(this.search)
              .then(({data}) => {
                this.count = data.page.count;
                this.users = this.questions = this.tags = [];
                this[this.search.type+'s'] = data.result;
                setTimeout(() => {
                  this.loading = false;
                }, 300)
              })
        }

        trans.next()

      }
    },
    data() {
      return {
        firstLoad:  false,
        loading: false,
        msg: '',
        count: 0,
        search: {
          type: 'question',
          text: '',
          page: 1,
          limit: 10
        },
        questions: [],
        users: [

        ],
        tags: [

        ]
      }
    }
  }
</script>

<template>
  <div class="ui container">
    <div class="ui two column grid">
      <div class="twelve wide column  ">
        <message :msg.sync="msg" color="orange"></message>
        <div class="search-box">
          <ul>
            <li :class="{'actived': search.type == 'question'}" @click="changeSearchType('question')">问题</li>
            <li :class="{'actived': search.type == 'tag'}" @click="changeSearchType('tag')">标签</li>
            <li :class="{'actived': search.type == 'user'}" @click="changeSearchType('user')">用户</li>
          </ul>
          <div class="clear"></div>

          <form class="ui form ">
            <div class="fields">
              <div class="twelve wide field">
                  <input type="text" placeholder="搜索你想要的"  v-model="search.text" v-el:search-box >
              </div>
              <div class="three wide field">
                <button class="ui blue green fluid button"
                  @click="doSearch"
                  :class="{'loading': loading }">搜索</button>
              </div>
            </div>
          </form>
        </div>

        <div class="search-content">
          <h4 v-show="!firstLoad">共找到{{ questions.length + users.length + tags.length }}个结果</h4>

           <!-- 问题 -->
           <div class="search-list relaxed ui list">
            <div class="item question-item" v-for="question in questions">
              <div class="content">
                <a v-link="'/q/' + question._id" class="header">{{ question.title }}</a>
                <p class="description">
                  {{ question.content | limit 80 }}
                </p>
              </div>
            </div>
          </div>

            <!-- 用户 -->
          <div class="search-list large relaxed middle aligned ui list">
            <div class="item user-item" v-for="user in users">
              <img class="ui avatar image" :src="user.info.photoAddress">
              <div class="content">
                <a v-link="'/u/' + user.username" class="header">{{ user.username }}</a>
                <p class="description">
                  {{ user.introduce }}
                </p>
              </div>
            </div>
          </div>

          <div class="search-list relaxed ui list">
           <div class="item tag-item" v-for="tag in tags">
             <div class="content">
               <span class="header">
                 <a v-link="'/tag/' + tag.id" class="ui label" > {{ tag.name }}</a>
               </span>
               <p class="description">
                 {{ tag.memo }}
               </p>
             </div>
           </div>
         </div>




        <div class="ui center aligned container" v-if="showLoadMore()" v-cloak >
          <button class="ui tiny button" @click="loadMore"> 加载更多</button>
          <!-- <pagination></pagination> -->
         </div>

        </div>
      </div>
    </div>
</div>

</template>

<style scoped media="screen">

.search-box {
  overflow: auto;
  margin: 0 0 10px 0;
}
.search-content {
  margin: 25px 60px 10px 3px;
}

.search-content .header {
  font-weight: 500 !important;
  font-size: 1.1rem;
  padding: 5px 0;
}
.search-content .question-item a.header {
  /*display: inline-block;*/
  color: #4CB77E !important;
}
.search-content .question-item a.header:hover {
  color: #4CB765 !important;
  text-decoration: underline;
}
.search-content .search-list.ui.list .question-item {
  padding: 8px 0 !important
}
.search-content .user-item .description {
  font-size: .9rem;
}

.search-content .tag-item .header {
  display: inline-block;
}

.search-content .tag-item .description {
  padding: 2px 0 0 6px;
  font-size: .9rem;
}

 ul {
   list-style: none;
   padding: 0;
 }
 ul li {
   float: left;
   margin: 0 17px 10px 3px;
   cursor: pointer;
 }
 ul li.actived {
   color: #2BA748;
 }
 ul li:hover {
   text-decoration: underline;
 }
</style>
