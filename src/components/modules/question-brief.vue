<script>
  export default {
    props: {
      id: String,
      title: String,
      author: String,
      votes: Number,
      answers: Number,
      views: Number,
      date: null,
      tags: Array
    }
  }

</script>

<template>
  <div class="item">
    <div class="ui horizontal list rank-list">
      <div class="votes item">
        <span class="center">{{votes}}</span>
        <p>投票</p>
      </div>
      <div class="votes item ">
        <span >{{answers}}</span>
        <p>回答</p>
      </div>
      <div class="votes item">
        <span >{{views}}</span>
        <p>浏览</p>
      </div>
    </div>
    <div class="inline content">
      <a v-link="'q/' + id" class="ui header blue">{{title}}
        <span class="ui mini teal label">brown</span></a>
      <p class="meta">
        <a v-link="'u/' + author">{{author}}</a> {{date | beautyDate }}
      </p>
    </div>
  </div>
</template>

<style scoped media="screen">
.item > .inline.content {
  display: inline-block;
}

.item > .rank-list {
  margin-top: 4px;
  display: inline-block;
  vertical-align: middle;
  vertical-align: top;
}

.item > .rank-list > .item {
  text-align: center;
  font-size: 13px;
  padding: 0 !important;
}

.item > .rank-list+.content {
  padding: 0 0 0 .5em;
  vertical-align: top;
}

.ui.header {
}
</style>
