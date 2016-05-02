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
  route: {
    waitForData: true,
    data(trans) {
      const username = trans.to.params.username;
      return store.getUserInfos(username)
        .then(({data}) => {
          this.user = data;
        })
    }
  },
  data() {
    return {
      section: 'news',
      user: {}
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
                <img class="" :src="user.info.photoAddress">
              </div>
              <div class="content">
                <p class="header">
                  {{ user.username }}
                  <span class="residence" v-if="user.info.residence">
                    {{ user.info.residence }}
                  </span>
                  <span class="gender" v-if="user.info.gender === true">
                    <i class="man icon" ></i>
                  </span  >
                  <span class="gender" v-if="user.info.gender === false">
                    <i class="woman icon" ></i>
                  </span  >

                  <a class="editor" v-link="{name: 'setting'}"><i class="edit icon"></i>编辑资料</a>
                </p>
                <div class="meta">
                  <span>{{ user.info.brief }}</span>
                </div>
                <div class="extra">
                  <p class="infos">
                    <span v-if="user.info.birthday">
                      <i class="birthday icon"></i>
                      <span>{{ user.info.birthday | dateFormat 'yyyy-MM-dd' }}</span>
                    </span>
                    <span v-if="user.info.address ">
                      <i class="marker icon"></i>
                      <span>{{ user.info.address }}</span>
                    </span>
                    <span v-if="user.info.schoolName || user.info.institution">
                      <i class="student icon"></i>
                      <span>{{ user.info.schoolName }} | {{ user.info.institution }}</span>
                    </span>
                    <span v-if="user.info.website">
                      <i class="linkify icon"></i>
                      <a href="{{ user.info.website }}">{{user.info.website}}</a>
                    </span>
                    <span v-if="user.info.phoneNumber">
                      <i class="phone icon"></i>
                      <span>{{user.info.phoneNumber}}</span>
                    </span>
                  </p>
                   <p class="introduce" v-if="user.info.introduce">
                    <span>个人简介: {{user.info.introduce}}</span>
                  </p>
                </div>
              </div>
              <div class="scores">
                <div class="ui labeled button" tabindex="0">
                  <div class="ui button btn">
                    <i class="heart icon"></i> 赞同
                  </div>
                  <span class="ui basic label">
                    {{ user.scores || 0 }}
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
              <div class="ten wide column" >
                <div v-show="isCurrent('news')"  v-cloak >
                  <news ></news>
                </div>
                <div v-show="isCurrent('answer')" v-cloak>
                  <answer></answer>
                </div>
                <div v-show="isCurrent('question')" v-cloak>
                  <question></question>
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
.ui.items>.item>.content> p.header .residence{
  font-size: .9rem;
  vertical-align: middle;
  color: rgba(42, 152, 78, 0.68);
}
.ui.items>.item>.content> p.header .gender {
  margin-top: -1px;
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
