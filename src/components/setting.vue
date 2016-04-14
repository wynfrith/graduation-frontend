<template>
  <div class="ui container main-box">
    <div class="ui two column grid">
      <div class="twelve wide column  ">
        <div class="ui grid">
          <div class="six wide column">
            <div class="ui secondary vertical menu">
              <a class="active item">
                个人资料
              </a>
              <a class="item">
                修改邮箱
              </a>
              <a class="item">
                修改密码
              </a>
            </div>
          </div>
          <div class="eight wide column">
            <div class="ui form">
              <!-- TODO: 修改头像 -->
              <div class="field">
                <label>一句话描述: </label>
                <input type="text" placeholder="不超过20字">
              </div>
              <div class="field">
                <label >生日:</label>
                <input type="text" placeholder="出生年月">
              </div>
              <div class="field">
                <label>性别:</label>
                <div class="inline fields">
                  <div class="field">
                    <div class="ui radio checkbox">
                      <input type="radio" name="fruit" tabindex="0" class="hidden">
                      <label>保密</label>
                    </div>
                  </div>
                  <div class="field">
                    <div class="ui radio checkbox">
                      <input type="radio" name="fruit" tabindex="0" class="hidden">
                      <label>男</label>
                    </div>
                  </div>
                  <div class="field">
                    <div class="ui radio checkbox">
                      <input type="radio" name="fruit" tabindex="0" class="hidden">
                      <label>女</label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="field">
                <label>院校:</label>
                <div class="inline fields">
                  <div class="eight wide field">
                    <input type="text" placeholder="学校名称">
                  </div>
                  <div class="eight wide field">
                    <input type="text" placeholder="学院">
                  </div>
                </div>
              </div>
              <div class="field">
                <label>地址:</label>
                <input type="text" placeholder="您的地址">
              </div>
              <div class="field">
                <label>个人网站</label>
                <input type="text" placeholder="http://example.com">
              </div>
              <div class="field">
                <label>手机号码</label>
                <input type="text" placeholder="您的手机号">
              </div>
              <div class="field">
                <label>个人简介</label>
                <textarea rows="4" placeholder="不超过200字"></textarea>
              </div>

              <button class="ui green button right floated" type="submit">修改资料</button>

            </div>
          </div>

        </div>


      </div>
    </div>
  </div>

</template>

<style media="screen">
  .ui.main-box {
    margin-top: 30px;
    margin-bottom: 30px;
  }
  button[type=submit] {
    margin-right: 10px !important;
  }
</style>
