<script>
export default {
  props: {
    user: Object
  }
}

</script>
<template>
  <div class="ui card profile">
    <div class="content">
      <div class="image-box">
        <img class="ui image" :src="user.info.photoAddress">
      </div>
      <div class="user-info">
        <p class="username">
          {{user.username}}
        </p>
        <p class="brief">
          {{user.info.brief}}
        </p>
      </div>
    </div>
    <div class="extra content">
      <span class="left floated home">
        <i class="home icon"></i>
        <a v-link="{name: 'profile', params: { username: user.username}}">个人主页</a>
      </span>
      <span class="right floated setting">
        <i class="setting icon"></i>
        <a v-link="{name: 'setting'}">设置</a>
      </span>
    </div>
  </div>


</template>

<style scoped media="screen">
.ui.card.profile .content {
  position: relative;
}
/* 个人资料卡片 */
.ui.card.profile .image-box {
  position: absolute;
  width: 60px;
  height: 60px;
  /*float: left;*/
  display: inline-block;
}
.ui.card.profile .image-box .image {
  border-radius: 5px;
}
.ui.card.profile .user-info {
  min-height: 60px;
  margin-top: 5px;
  margin-left: 65px;
  padding: 0 15px;
    font-size: .96rem;
  display: inline-block;
}
.ui.card.profile .user-info .brief{
  font-size: .86rem;
  color: #A59494;
}
.extra.content a:hover {
  color: #8BAF93 !important;
}
</style>
