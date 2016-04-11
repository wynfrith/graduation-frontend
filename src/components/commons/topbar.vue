<style scoped media="screen">
.header.item a{
  color: rgba(0,0,0,.8)
}
</style>

<template>
  <div class="ui menu borderless">
    <div class="ui container">
      <div class="header item"><a v-link="{name: 'home'}" class="">问答社区</a></div>
      <div class="right menu">
        <div class="ui search item">
          <div class="ui icon input">
            <input class="prompt" type="text" placeholder="搜索问题或标签">
            <i class="search icon link" @click="search"></i>
          </div>
          <div class="results"></div>
        </div>
        <!-- <a v-link="{ name: 'markdown' }" class="item">markdown</a> -->
        <a v-link="{ name: 'signin' }" class="item">注册</a>
        <a v-link="{ name: 'login' }" class="item">登陆</a>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    methods: {
      search() {
        this.$router.go({name: 'search'})
      }
    }
  }
</script>
