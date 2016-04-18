
<script>
  export default {
    data() {
      return {
        showDropDown: false
      }
    },
    ready() {
      // $('.ui.dropdown').dropdown()
    },
    methods: {
      search() {
        this.$router.go({name: 'search'})
      }
    }
  }
</script>


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
        <a class="item icon" v-link="{name: 'notify'}">
          <i class="alarm outline icon "></i>
          <div class="floating mini ui green empty circular label"></div>
        </a>
        <a class="img-item">
          <div class="ui simple dropdown img-dropdown" >
            <div class="text">
            <img src="https://octodex.github.com/images/octoliberty.png" alt="wynfrith" class="ui image avatar"/>
            </div>
            <div class="menu">
              <a v-link="{name: 'post'}" class="item">我要提问</a>
              <a v-link="{ name: 'profile', params: { username: 'wynfrith'}}" class="item">我的主页</a>
              <a v-link="{name: 'setting'}" class="item">账号设置</a>
              <a href="#" class="item">注销</a>
            </div>

          </div>

        </a>


      </div>
    </div>
  </div>
</template>


<style scoped media="screen">
.header.item a{
  color: rgba(0,0,0,.8)
}
.item .empty.circular.label {
  top: 8px;
  left: 45px;
}
.img-dropdown:hover{
  cursor: pointer;
  background: rgba(0,0,0,.03) !important;
}
.img-item{

}
.img-item img{
  margin: 8px 13px 0 13px !important;
  /*margin-top: 7px;
  margin-left: 13px;*/
}
.ui.dropdown .menu {
  top: 40px;
}
.ui.menu .ui.dropdown .menu .item {
  margin: 2px 0;
  padding: 8px 25px !important;
}
.showDropDown {
  display: block !important;
}

</style>
