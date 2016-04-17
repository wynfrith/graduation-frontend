<script>
import CropModal from '../../modules/modal.vue'

export default {
  components: {
    'cropper': CropModal
  },
  data() {
    return {
      avatarUrl: '',
      showCrop: false
    }
  },
  ready() {
    $('#imgBox .dimmable.image').dimmer({
      on: 'hover'
    });
  },

  methods: {
    upload(event) {
      const files = event.target.files;
      const reader = new FileReader()
      reader.onload = (e) => {
        const url = e.target.result
        this.avatarUrl = url;
        this.showCrop = true
      }
      reader.readAsDataURL(files[0]);
    },
    clear(){
      $('#img').val('')
    }
  }
}
</script>
<template >
  <div class="ui centered grid">
    <div class="ten wide column">
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


    <div class="four wide column">
      <div class="card" id="imgBox">
        <div class="blurring dimmable image">
          <div class="ui inverted dimmer">
            <div class="content">
              <div class="center">
                <input id="img" type="file" @change="upload" @click="clear" style="display:none">
                <label for="img" class="ui green inverted button">修改头像</label>
              </div>
            </div>
          </div>
          <img class="ui image" src="https://octodex.github.com/images/cloud.jpg">
        </div>
      </div>
      <cropper :show.sync="showCrop" :img="avatarUrl"><cropper>
    </div>

  </div>

</template>


<style scoped media="screen">
button[type=submit] {
  /*margin-right: 10px !important;*/
}
#imgBox {
  padding: 22px;
}
#imgBox .ui.image {
  border-radius: 5px;
}
</style>
