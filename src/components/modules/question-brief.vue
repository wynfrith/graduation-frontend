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
      <a v-link="'q/' + id" class="ui header title">{{title}}</a>
      <span class="tags-box">
        <a class="ui mini teal label" v-for="tag in tags" v-link="{name: 'home', query: { tag: tag}}">{{ tag }}<a>
      </span>

      <p class="meta">
        <a v-link="'u/' + author">{{author}}</a>&nbsp;&nbsp; <span>{{date | beautyDate }}</span>
      </p>
    </div>
  </div>
</template>

<style scoped media="screen">
.item > .inline.content{
  display: inline-block;
}

.item > .rank-list {
  margin-top: 3px;
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

a.ui.header.title {
  vertical-align: top;
  display: inline-block;;
  font-size: 1.1rem;
  color: #4CB77E !important;
}
a.ui.header.title:hover {
  color: #4CB77E !important;
  text-decoration: underline;
}
.tags-box {
  vertical-align: top;
}
.meta a{
  color: #999;
  font-size: .9rem;
}
.meta span{
  font-size: .9rem;
  color: #999
}
.meta a:hover {
  text-decoration: underline;
}

/* tag */
.tags-box .ui.teal.label {
  background-color: rgb(135, 179, 145) !important;
  padding: 3px 4px;
  border-radius: 2px;
}
.tags-box .ui.teal.label:hover {
  background-color: #A6C779 !important;
  color: rgba(0,0,0,.87);

}
</style>
