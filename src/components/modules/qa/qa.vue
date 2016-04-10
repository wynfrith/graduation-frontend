<script>
import Vote from '../../modules/vote.vue'
import Comments from '../../modules/comments/list.vue'
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
  }
}

</script>
<template>
  <div class="post-item">
    <vote :counts="data.votes"></vote>
    <div class="content">
      <div class="fmt">
        {{ data.content }}
      </div>
      <div class="topic">
        <span>发布于5天前</span>
        <a class="ui comment-btn" @click="isShow = !isShow">评论</a>
        <div class="post-author">
          <img src="http://my-ghost.b0.upaiyun.com/avator.jpg" alt="" class="ui avatar image"/>
          <span><a href="#">wynfrith</a></span>
        </div>
      </div>

      <div class="comments-box" >
        <comments :datas="data.comments" v-show="isShow"></comments>
      </div>


    </div>
  </div>
</template>

<style scoped media="screen">
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
  padding: 5px;
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
