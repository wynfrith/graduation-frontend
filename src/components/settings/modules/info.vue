<script>
import CropModal from '../../modules/modal.vue'

export default {
  components: {
    'cropper': CropModal,
  },
  data() {
    return {
      avatarUrl: '',
      showCrop: false,
      model: {
        photoAddress: 'http://my-ghost.b0.upaiyun.com/avator.jpg',
        brief: '服务端开发',
        phoneNumber: '18369905318',
        birthday: '1994-01-25',
        schoolName: '山东理工大学',
        institution: '软件工程',
        gender: '男',
        residence: '淄博',
        website: 'https://github.com/wynfrith',
        address: '山东省淄博市淄川区',
        introduce: '大家好, 我是王富诚, 来自美丽的淄博'
      }
    }
  },
  ready() {
    $('#imgBox .dimmable.image').dimmer({
      on: 'hover'
    });
    $('#calendar').calendar({
      type: 'date',
      text: {
        days: ["日", "一", "二", "三", "四", "五", "六"],
        months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
        monthsShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
        today: "今天"
      },
      formatter: {
        date: function (date, settings) {
          if (!date) return '';
          var day = date.getDate();
          var month =date.getMonth() + 1;
          var year = date.getFullYear();
          return `${year}-${month}-${day}`;
        }
      }
    })
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
          <input v-model="model.brief" type="text" placeholder="不超过20字" maxlength="20">
        </div>

        <div class="field">
          <label >生日:</label>
          <div class="ui calendar" id="calendar">
            <div class="ui input left icon">
              <i class="calendar icon"></i>
              <input v-model="model.birthday" type="text" placeholder="出生年月" >
            </div>
          </div>
        </div>
        <div class="field">
          <label>性别:</label>
          <div class="inline fields">
            <div class="field">
              <div class="ui radio checkbox">
                <input id="noGender" type="radio" name="gender"
                :checked="model.gender!='男'&& model.gender!='女'" tabindex="0" class="hidden">
                <label for="noGender">保密</label>
              </div>
            </div>
            <div class="field">
              <div class="ui radio checkbox">
                <input id="man" type="radio" name="gender" :checked="model.gender=='男'" tabindex="0" class="hidden">
                <label for="man">男</label>
              </div>
            </div>
            <div class="field">
              <div class="ui radio checkbox">
                <input id="woman" type="radio" name="gender" :checked="model.gender=='女'" tabindex="0" class="hidden">
                <label for="woman">女</label>
              </div>
            </div>
          </div>
        </div>
        <div class="field">
          <label>院校:</label>
          <div class="inline fields">
            <div class="eight wide field">
              <input  v-model="model.schoolName"  type="text" placeholder="学校名称">
            </div>
            <div class="eight wide field">
              <input v-model="model.institution" type="text" placeholder="学院">
            </div>
          </div>
        </div>
        <div class="field">
          <label>居住地: </label>
          <input v-model="model.residence" type="text" placeholder="如: 淄博">
        </div>
        <div class="field">
          <label>详细地址:</label>
          <input v-model="model.address" type="text" placeholder="您的地址">
        </div>
        <div class="field">
          <label>个人网站</label>
          <input v-model="model.website" type="text" placeholder="http://example.com">
        </div>
        <div class="field">
          <label>手机号码</label>
          <input v-model="model.phoneNumber" type="text" placeholder="您的手机号">
        </div>
        <div class="field">
          <label>个人简介</label>
          <textarea v-model="model.introduce" rows="4" placeholder="不超过200字"></textarea>
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
          <img class="ui image" :src="model.photoAddress">
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
