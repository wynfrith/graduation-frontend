<script>
import Vote from '../../modules/vote.vue'
import Comments from '../../modules/comments/list.vue'
import HyperDown from 'hyperdown'
import marked from 'marked'
import hljs from 'hljs'

marked.setOptions({
  highlight: function (code) {
    return hljs.highlightAuto(code).value;
  }
});
export default {
  props: {
    data: Object
  },
  components: {
    'vote': Vote,
    'comments': Comments
  },
  data() {
    return {
      isShow: false
    }
  },
  filters: {
    marked: function(value) {
      return marked(value || '')
    }
  }
}

</script>
<template>
  <div class="post-item">
    <vote :counts="data.score"></vote>
    <div class="content">
      <div class="fmt" v-html="data.content | marked">
      </div>
      <div class="topic">
        <span>发布于5天前</span>
        <a class="ui comment-btn" @click="isShow = !isShow">评论</a>
        <div class="post-author">
          <img :src="data.authorAvatar" alt="" class="ui avatar image"/>
          <span><a v-link="{name: 'profile', params: { username: data.author }}">{{ data.author }}</a></span>
        </div>
      </div>
      <div class="comments-box" >
        <comments :datas="data.comments" v-show="isShow"></comments>
      </div>
    </div>
  </div>
</template>

<style scoped media="screen">
.topic > span {
  font-size: 1rem;
}
.topic > a {
  color: rgba(105, 101, 101, 0.81);
  font-size: 1rem;
}
.topic > a:hover {
  color: #696565;
  text-decoration: underline;
}
.post-author span a{
  color: #60B173;
  font-size: 1rem;
}
.post-author span a:hover{
  color: rgba(74, 138, 89, 0.92);
  /*text-decoration: underline;*/
}
a.ui.comment-btn {
  cursor: pointer;
}
.post-item {
  position: relative;
  min-height: 80px;
}
.content {
  margin-left: 50px;
  font-size: 1.1rem;
  color: #696565;
  padding: 6px;
}
.topic {
  margin-top: 30px;
  min-height: 20px;
  vertical-align: middle;
}
.post-author {
  float: right;
}
</style>
