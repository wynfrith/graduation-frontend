<script>
import News from './news.vue'
import Question from './question.vue'
import Answer from './answer.vue'

export default {
  components: {
    'news': News,
    'question': Question,
    'answer': Answer
  },
  data() {
    return {
      section: 'news'
    }
  },
  methods: {
    isCurrent(name) {
      return this.section == name;
    }
  }
}

</script>
<template id="">
  <div class="ui container">
    <div class="ui two column centered grid">
      <div class="fourteen wide column  ">

        <div class="profile-head">
          <div class="ui items">
            <div class="item">

              <div class="ui small image">
                <img class="" src="http://my-ghost.b0.upaiyun.com/avator.jpg">
              </div>
              <div class="content">
                <p class="header">
                  Wynfrith
                  <span class="gender"><i class="man icon"></i></span>
                  <a class="editor" v-link="{name: 'setting'}"><i class="edit icon"></i>编辑资料</a>
                </p>
                <div class="meta">
                  <span>这个人很懒, 什么也没留下</span>
                </div>
                <div class="extra">
                  <p class="infos">
                    <span>
                      <i class="birthday icon"></i>
                      <span>1994-01-25</span>
                    </span>
                    <span>
                      <i class="marker icon"></i>
                      <span>山东省淄博市</span>
                    </span>
                    <span>
                      <i class="student icon"></i>
                      <span>山东理工大学 | 软件工程</span>
                    </span>
                    <span>
                      <i class="linkify icon"></i>
                      <a href="http://www.wynfrith.me">http://www.wynfrith.me</a>
                    </span>
                    <span>
                      <i class="phone icon"></i>
                      <span>18369905318</span>
                    </span>
                  </p>
                   <p class="introduce">
                    <span>个人简介: 大家好, 我是王富诚, 来自美丽的淄博</span>
                  </p>
                </div>
              </div>
              <div class="scores">
                <div class="ui labeled button" tabindex="0">
                  <div class="ui button btn">
                    <i class="heart icon"></i> 赞同
                  </div>
                  <span class="ui basic label">
                    22
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="ui divider"></div>

        <div class="profile-content">
          <div class="ui two column grid">
              <div class="four wide column">
                <div class="ui secondary vertical menu">
                  <a class="active item" :class="{'active': isCurrent('news') }" @click="section = 'news'" >他的动态</a>
                  <a class="item" :class="{'active': isCurrent('question') }" @click="section = 'question'" >他的问题</a>
                  <a class="item" :class="{'active': isCurrent('answer') }" @click="section = 'answer'" >他的回答</a>
                </div>
              </div>
              <div class="ten wide column">
                <div v-if="isCurrent('news')"  v-cloak>
                  <news v-cloak></news>
                </div>
                <div v-if="isCurrent('answer')" v-cloak>
                  <answer v-cloak></answer>
                </div>
                <div v-if="isCurrent('question')" v-cloak>
                  <question v-cloak> </question>
                </div>
              </div>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<style scoped media="screen">



/*个人资料显示*/
.item .scores {
  text-align: right;
  float: right;
  padding: 15px;
  width: 200px;
  /*border: 1px solid #000;*/
}

.item .scores .ui.button.btn:hover{
  cursor: default;
  background-color: #e0e1e2;
  color: rgba(0,0,0,.6);
}
.item .scores .basic.label {
  cursor: default;
}

/*个人信息展示*/
.ui.items>.item>.ui.image {
  padding: 10px;
}
.ui.items>.item>.ui.image img{
  margin: auto;
  border-radius: 5px;
  border: 1px solid rgba(212, 212, 212, 0.18);
}
.ui.items>.item>.content {
  width: 500px !important;
  flex: none !important;
}

.ui.items>.item>.content> p.header {
  margin: 5px 5px 0px 5px;
  font-size: 2rem !important;
  font-weight: 400;
}
.ui.items>.item>.content> p.header .gender,
.ui.items>.item>.content> p.header .editor
{
  font-size: .95rem;
  vertical-align: middle;
  color: rgba(0, 150, 136, 0.68);
  display: inline-block;
}
.ui.items>.item>.content> p.header .gender {
  margin-top: -2px;
}
.ui.items>.item>.content> p.header .editor{
  transition: all .3s ease-in-out;
  font-size: 1rem;
  color: rgba(61, 127, 64, 0.57);
  box-sizing: border-box;
  opacity: 0;
}
.ui.items>.item>.content:hover .editor {
  opacity: 1 !important;
}
.ui.items>.item>.content> p.header .editor:hover {
  color: rgba(14, 60, 16, 0.57);
}

.ui.items>.item>.content> .meta{
  /*background-color: #eee;*/
  font-size: 1.2rem !important;
  /*box-shadow: inset 2px 0 0 0 rgba(0,0,0,.2);*/
  padding: 3px 5px;
}
.ui.items>.item>.content .extra p {
  margin:  0;
}
.ui.items>.item>.content .extra p.infos {
  margin-top: 10px;
}
.ui.items>.item>.content .extra p > span{
  display: inline-block;;
  margin: 4px 5px;
}


</style>
