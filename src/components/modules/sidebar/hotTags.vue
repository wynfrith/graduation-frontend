<template>
  <div class="card">
    <div class="content">
      <b><a v-link="{name: 'tags'}">热门标签</a></b>
      <div class="ui divider"></div>
      <div class="tags">
        <a v-link="{name: 'home', query: {tag: 'javascript'}}">javascript</a>
        <a v-link="{name: 'home', query: {tag: 'python'}}">python</a>
        <!-- <a v-link="{name: 'home', query: {tag: 'java'}}">java</a> -->
        <a v-link="{name: 'home', query: {tag: 'ruby'}}">ruby</a>
        <!-- <a v-link="{name: 'home', query: {tag: 'c#'}}">c#</a> -->
      </div>
    </div>
  </div>
</template>

<style scoped media="screen">
.card .content b a {
  color: #666 ;
}
.card .content b a:hover {
  color: #4A4A4A;
}
.card .tags {
  box-sizing: border-box;
}
.card .tags a {
  font-size: .9rem;
  background-color: #60B173;
  padding: 1px 8px;
  margin: 3px 0;
  color: #fff;
  border: 1px solid #60B173;
  display: inline-block;
  box-sizing: border-box;
}
.card .tags a:hover {
  border: 1px solid #60B173;
  color: #60B173;
  background-color: #ffffff;
}
</style>
