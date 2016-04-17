<script>
  export default {
    data() {
      return {
        jcropApi: '',
        imgOpts: ''
      }
    },
    props: {
      show: {
        type: Boolean,
        required: true,
        twoWay: true
      },
      img: String
    },
    methods: {
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
          // this.open()
          // create jcrop and open modal
          let api;
          $('#avatar').Jcrop({
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
            $('#avatar').removeAttr('style');
          }
        }
      }
    }
  }
</script>
<template id="modal-template">
  <div class="modal" v-show="show" transition="modal" transition-mode="out-in">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-header">
          <h2>上传图片</h2>
        </div>
        <div class="modal-body">
          <img id="avatar" v-bind:src="img" height="300"/>
        </div>
        <div class="modal-footer">
          <button class="ui right floated button" name="button" @click="show = false">取消</button>
          <button class="ui right floated green button" name="button" @click="upload">上传</button>
          <div class="clear"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style media="screen">

</style>
<style scoped media="screen">
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /*background: rgba(0, 0, 0, 0.7);*/
  background-color: rgba(0,0,0,.6);
  display: table;
  transition: opacity .3s ease;
  }

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {

  background: #fff;
  max-width: 800px;
  border-radius: 5px;
  /*box-shadow: 0 2px 8px rgba(0, 0, 0, .33);*/
  box-shadow: 1px 3px 3px 0 rgba(0,0,0,.2),1px 3px 15px 2px rgba(0,0,0,.2);
  transition: all .3s ease;
  margin: 0 auto;
  overflow: auto;
}
.modal-header {
  padding: 15px;
  border-bottom: 1px solid rgba(34,36,38,.15);
}
.modal-body {
  min-height: 15px;
  text-align: center;
  overflow: hidden;
  padding: 15px;
  margin: 0px;
  vertical-align: middle;
}


.modal-footer {
  border-top: 1px solid rgba(34,36,38,.15);
  background: #f9fafb;
  padding: 1rem;
}
.modal-footer img {
  margin: 0;
  padding: 0;
}
.modal-footer button {
  margin-left: 15px !important;
}

.modal-enter, .modal-leave {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>
