<script>
  import CropModal from './modules/crop-modal.vue'
  import Modal from './modules/modal.vue'
  export default {
    components: {
      'cropper': CropModal,
      'modal': Modal
    },
    data() {
      return {
        avatarUrl: '',
        showCrop: false,
        showModal: false
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
    <div class="crop-box">
      <input id="img" type="file" @change="upload" @click="clear">
        <modal :show.sync="showCrop" :img="avatarUrl"></modal>
    </div>


</template>
