<script>
  import Pagination from './modules/pagination.vue'
  export default {
    components: {
      'pagination': Pagination
    },
    methods: {
      changeSearchType(type) {
        this.search.type = type;
        // 进行一次搜索
      }
    },
    data() {
      return {
        search: {
          type: 'question',
          text: ''
        },
        questions: [{
          id: 1,
          title: 'Linux夏令时是怎么调整的？',
          content: '以法国巴黎为例： {代码...} 从dump的信息可以看出，当巴黎时间...'
        },{
          id: 2,
          title: '我想要背景长度变化，而文字不移动，要怎么修改呢',
          content: '{代码...} 我想要背景长度变化，而文字不移动，要怎么修改呢'
        }],
        users: [{
          id: 1,
          username: 'wynfrith',
          avator: 'https://octodex.github.com/images/octoliberty.png',
          introduce: '你好, 我是wynfrith'
        },
        {
          id: 2,
          username: '孔亚洲',
          avator: 'https://octodex.github.com/images/mummytocat.gif',
          introduce: '专注Csharp100年'
        }],
        tags: [
          {
            id: 1,
            name: 'javascript',
            memo: 'JavaScript一种直译式脚本语言，是一种动态类型、弱类型、基于原型的语言，内置支持类型',
            selected: false
          },
          {
            id: 2,
            name: 'go',
            memo:'Go语言专门针对多处理器系统应用程序的编程进行了优化，使用Go编译的程序可以媲美C或C++代码的速度，而且更加安全、支持并行进程'
          },
          {
            id: 3,
            name: 'python',
            memo: 'Python, 是一种面向对象、解释型计算机程序设计语言'
          }
        ]
      }
    }
  }
</script>

<template>
  <div class="ui container">
    <div class="ui two column grid">
      <div class="twelve wide column  ">
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
                  <input type="text" placeholder="搜索你想要的" v-model="search.text">
              </div>
              <div class="three wide field">
                <button class="ui blue green fluid button">搜索</button>
              </div>
            </div>
          </form>
        </div>

        <div class="search-content">
          <h4>共找到{{ questions.length + users.length + tags.length }}个结果</h4>

           <!-- 问题 -->
           <div class="search-list relaxed ui list">
            <div class="item question-item" v-for="question in questions">
              <div class="content">
                <a v-link="'/q/' + question.id" class="header">{{ question.title }}</a>
                <p class="description">
                  {{ question.content }}
                </p>
              </div>
            </div>
          </div>

            <!-- 用户 -->
          <div class="search-list large relaxed middle aligned ui list">
            <div class="item user-item" v-for="user in users">
              <img class="ui avatar image" :src="user.avator">
              <div class="content">
                <a v-link="'/u/' + user.id" class="header">{{ user.username }}</a>
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




        <!-- <div class="ui center aligned container"> -->
          <pagination></pagination>
        <!-- </div> -->

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
