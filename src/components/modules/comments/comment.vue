<script>
  export default {
    props: {
      avatar: String,
      author: String,
      content: String,
      date: null,
    },
    methods: {
      reply() {
        // 向父组件的发送消息,内容为 author
        this.$dispatch('reply', this.author);
      }
    }
  }

</script>

<template>
  <div class="comment">
    <a class="small avatar">
      <img :src="avatar">
    </a>
    <div class="content">
      <a class="author">{{ author }}</a>
      <div class="metadata">
        <span class="date">{{ date }}</span>
      </div>
      <div class="text">
        {{ content }}
      </div>
      <div class="actions">
        <a class="reply" @click="reply">回复</a>
      </div>
    </div>
  </div>

</template>

<style scoped media="screen">
  .ui.comments a.author {
    font-weight: 500;
    color: #60B173;
  }
  .ui.comments a.author:hover {
    color: rgba(74, 138, 89, 0.92);
  }
  .ui.comments .comment {
    margin: 0 10px 0 10px;
    border-bottom: 1px dashed #ccc;
  }
  .ui.comments .comment:last-child {
    border-bottom: 0px;
    margin-bottom: 12px;
  }
  .ui.comments .comment .avatar {
    width: 30px;
    /*margin: 10px 0 10px 0px;*/
  }
  .ui.comments .comment .content {
    position: relative;
    margin-left: 40px;
  }
  .ui.comments .comment .actions{
    top: 8px;
    right: 10px;
  }
  .ui.comments .comment .author,.ui.comments .comment .text {
    font-size: .96rem;
  }
</style>
