<script>
  export default {
    props: {
      datas: Array
    }
  }
</script>
<template>
  <div class="card">
    <div class="content">
      <b><a v-link="{name: 'home'}">推荐问题</a></b>
      <div class="ui divider"></div>
      <ul>
        <li v-for="data in datas">
          <a v-link="{name: 'question', params: {qid: data._id}}">
            {{ data.title }}
          </a>
        </li>
      </ul>
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
.card ul {
  list-style-type:square;
  list-style-position: inside;
  padding: 0 5px;
  margin: 0;
}
.card ul li {
  padding: 2px 0;
}
.card ul li a {
  color: #249E5D;
}
.card ul li a:hover {
  text-decoration: underline;
}
</style>
