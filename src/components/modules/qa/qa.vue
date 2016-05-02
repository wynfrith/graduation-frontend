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
  },
  events: {
    'addComment': function(comment) {
      this.data.comments.push(comment);
    },
    'vote': function(isLike) {
      store.vote(this.data._id, isLike).then(({status, data}) => {
        if(status == 401) {
          this.$dispatch('msg', { type: 'error', text: '请先登录'});
          return false;
        }
        this.$dispatch('msg', { type: 'ok', text: data.msg})
        const likeIndex = this.data.like.indexOf(data.username);
        const hateIndex = this.data.hate.indexOf(data.username);
        if (likeIndex != -1) this.data.like.splice(likeIndex, 1);
        if (hateIndex != -1) this.data.hate.splice(hateIndex, 1);

        if (data.status == 1) {
          this.data.like.push(data.username)
        } else if (data.status == -1) {
          this.data.hate.push(data.username)
        } 
      });
    }
  }
}

</script>
<template>
  <div class="post-item">
    <vote :like="data.like" :hate="data.hate" ></vote>
    <div class="content">
      <div class="fmt" v-html="data.content | marked">
      </div>
      <div class="topic">
        <span>发布于5天前</span>
        <a class="ui comment-btn" @click="isShow = !isShow">评论 {{ data.comments.length == 0 ? '': data.comments.length }}</a>
        <div class="post-author">
          <span><a v-link="{name: 'profile', params: { username: data.author }}">{{ data.author }}</a></span>&nbsp;&nbsp;
          <img :src="data.authorAvatar" alt="" class="ui avatar image"/>
        </div>
      </div>
      <div class="comments-box" >
        <comments :datas="data.comments" :id="data._id" v-show="isShow"></comments>
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
