<script>
  import CropModal from './modules/crop-modal.vue'
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
<template id="">
  <form class="" action="index.html" method="post">
    <div class="crop-box">
      <input id="img" type="file" @change="upload" @click="clear">
    </div>

    <cropper :show.sync="showCrop" :img="avatarUrl"><cropper>
  </form>
</template>
