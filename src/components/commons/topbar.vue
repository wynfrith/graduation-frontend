
<script>
  export default {
    props: {
      userBrief: Object,
      notifyCount: Number
    },
    data() {
      return {
        showDropDown: false,
        msg: '',
        searchText: '',
      }
    },
    methods: {
      search() {
        this.$router.go({name: 'search', query:{text: this.searchText}})
        this.searchText = '';
        this.$els.searchBox.blur()
      },
      signout() {
        store.setAuth(false);
        localStorage.removeItem('u');
        this.$dispatch('signout');
        this.msg='您已退出登录！'
        this.$router.go({name: 'home'});
      }
    }
  }
</script>


<template>
  <div class="ui menu borderless">
    <div class="ui container">
      <message :msg.sync="msg" color="green"></message>
      <div class="header item"><a v-link="{name: 'home'}" class="">问答社区</a></div>
      <div class="right menu">
        <div class="ui search item">
          <div class="ui icon input">
            <input class="prompt" type="text" v-el:search-box @keyup.enter="search" placeholder="搜索问题或标签" v-model="searchText">
            <i class="search icon link" @click="search"></i>
          </div>
          <div class="results"></div>
        </div>
        <!-- <a v-link="{ name: 'markdown' }" class="item">markdown</a> -->
          <a v-link="{ name: 'signin' }" class="item" v-if="!userBrief.username">注册</a>
          <a v-link="{ name: 'login' }" class="item" v-if="!userBrief.username">登陆</a>
          <a class="item icon" v-link="{name: 'notify'}" v-if="userBrief.username">
            <i class="alarm outline icon "></i>
            <div v-show="notifyCount > 0" class="floating mini ui green empty label">{{ notifyCount}}</div>
          </a>
          <a class="img-item" v-if="userBrief.username">
            <div class="ui simple dropdown img-dropdown" >
              <div class="text">
              <img :src="userBrief.info.photoAddress" alt="" class="ui image avatar"/>
              </div>
              <div class="menu">
                <a v-link="{name: 'post'}" class="item">我要提问</a>
                <a v-link="{ name: 'profile', params: { username: userBrief.username}}" class="item">我的主页</a>
                <a v-link="{name: 'setting'}" class="item">账号设置</a>
                <a class="item" @click="signout">注销</a>
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
.item .empty.label {
  top: 5px;
  left: 40px;
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
