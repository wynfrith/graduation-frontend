<template id="">
  <div class="ui container">
    <div class="ui two column grid">
      <div class="twelve wide column  ">

        <div class="profile-head">
          <div class="ui items">
            <div class="item">

              <div class="ui small image">
                <img class="" src="https://octodex.github.com/images/octoliberty.png">
              </div>
              <div class="content">
                <div class="ui right floated">
                  <div class="score">
                    <span>积分 20</span>
                    <span>点赞数 10</span>
                  </div>

                </div>

                <a class="header">Wynfrith</a>
                <div class="meta">
                  <span>阿拉克点击来看就</span>
                </div>
                <!-- <div class="description">
                  这啦空间大垃圾袋就立刻减肥离开家都快放假了家肯德基拉科技的垃圾
                </div> -->
                <div class="extra">
                    <p>
                      <i class="marker icon"></i>
                      <span>山东省淄博市</span>
                    </p>
                    <p>
                      <i class="student icon"></i>
                      <span>山东理工大学 | 软件工程</span>
                    </p>
                    <p>
                      <i class="linkify icon"></i>
                      <a href="http://www.wynfrith.me">http://www.wynfrith.me</a>
                    </p>
                    <a v-link="{name: 'setting'}" type="button" class="ui right floated button" name="button">修改资料</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="ui divider"></div>

        <div class="profile-content">
          <h4><a href="#">Wynfrith </a>的提问</h4>
          <div class="search-list relaxed ui list">
           <div class="item question-item" >
             <div class="content">
               <a class="ui left floated header">又拍云 options请求 401 Unauthorized</a>
                <span type="button" class="ui right floated">2014-05-08</span>
             </div>
           </div>
           <div class="item question-item" >
             <div class="content">
               <a class="ui left floated header">又拍云 options请求 401 Unauthorized</a>
                <span type="button" class="ui right floated">2014-05-08</span>
             </div>
           </div>
         </div>

         <h4><a href="#">Wynfrith</a> 的回答</h4>

         <div class="search-list relaxed ui list">
          <div class="item question-item" >
            <div class="content">
              <a class="ui left floated header">又拍云 options请求 401 Unauthorized</a>
               <span type="button" class="ui right floated">2014-05-08</span>
            </div>
          </div>
          <div class="item question-item" >
            <div class="content">
              <a class="ui left floated header">又拍云 options请求 401 Unauthorized</a>
               <span type="button" class="ui right floated">2014-05-08</span>
            </div>
          </div>
        </div>


        </div>
      </div>
    </div>

  </div>
</template>

<style media="screen">

.profile-content .item.question-item a.header {
  /*display: inline-block;*/
  font-size: 1.1rem;
  color: #4CB77E !important;
}
.profile-content .item.question-item a.header:hover {
  color: #4CB765 !important;
  text-decoration: underline;
}
</style>
