<template id="">
  <div class="ui container">
    <h2>我的消息</h2>
    <div class="ui divider"></div>
    <div class="notify-box">
      <div class="btns">
        <a  class="ui button tiny">全部标为已读</a >
      </div>

      <div class="ui grid">
        <div class="ten wide column">
          <div class="notify">
            <div class="ui very relaxed list">
              <div class="item unread">
                <div class="content">
                  <div class="description">
                     <a href="#">xi_yu</a> 回答了问题 <a href="#">请教关于html布局问题。</a>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="content">
                  <div class="description">你的问题已经被删除  <a href="#">测试测试测试测试测试测试</a> 「已删除」</div>
                </div>
              </div>
              <div class="item">
                <div class="content">
                  <div class="description"><a href="#">gbrazy</a> 回答了你的问题 <a href="#">又拍云 options请求 401 Unauthorized</a></div>
                </div>
              </div>
            </div>
            <div class="more">
              <button class="ui basic tiny grey button">查看更多</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>

</template>

<style scoped media="screen">
 .more {
   text-align: center;
 }
  .unread.item {
    background-color: #F5F5F5;
  }
  .ui.list>.item{
    padding-left: 25px;
  }
  .btns {
    padding-left: 1rem;
  }
  .notify {
  }
  .ui.grid {
    margin: 0;
    margin-top: 5px
  }
  .ui.list .item {
    border-top: 1px dotted #eee;
  }
</style>
