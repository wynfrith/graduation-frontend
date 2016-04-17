<script>

export default {
  data() {
    return {
      jcropApi: '',
      imgOpts: ''
    }
  },

  props: {
    show: Boolean,
    img: String
  },
  methods: {
    open() {
      $('.ui.modal').modal({
      blurring: true,
       onHide: () => {
          this.show = false;
        },
      }).modal('show')
    },
    updateCoords(c) {
      this.imgOpts = c;
    },
    upload() {
      // upload img and opts
      console.log(this.img);
      console.log(this.imgOpts);
    }
  },
  watch: {
    'show': function() {
      if (this.show) {
        this.open()
        // create jcrop and open modal
        let api;
        this.open()
        $('#image').Jcrop({
          aspectRatio: 1,
          bgOpacity: 0.8,
          setSelect:   [ 50, 50, 250, 250 ],
          onSelect: this.updateCoords
        }, function () {
          api = this;
        })
        this.jcropApi = api;

      } else {
        // destory jcrop


        if(this.jcropApi) {
          this.jcropApi.destroy();
          $('#image').removeAttr('style');
        }
      }
    }
  }
}
</script>
<template id="">
  <div class="ui modal" id="avatarModal">
    <div class="header">上传图片</div>
    <div class="center content">
      <img id="image" v-bind:src="img" alt="" height="300" />
    </div>
    <div class="actions">
      <button class="ui button green" @click="upload">上传</button>
      <button class="ui cancel button">取消</button>
    </div>
  </div>

</template>

<style media="screen">
  #avatarModal .center.content {
    text-align: center;
    justify-content: center;
    position: relative;
    top: 0;
    padding: 0 !important;
    margin: 15px 0;
    /*width: 600px;*/
    height: 300px;
  }
  #avatarModal .center.content .jcrop-holder {
    margin: 0 auto;
  }
  #avatarModal .center.content .jcrop-holder .jcrop-keymgr {
    display: none !important;
  }
</style>
